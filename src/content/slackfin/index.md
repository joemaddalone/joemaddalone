---
title: 'DupliBalance Disorder'
layout: layout
date: 2023-12-27
tags: ['post']
excerpt: 'Dumb app + automation I did today'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>


I hate most financial snapshot apps... eventually.

So, I started off using PersonalCapital, then it turned into Empower. After that, I switched to Mint, and now it's Credit Karma. The funny thing is, all these apps seem to suffer from what I call "DupliBalance Disorder." You know, the classic scenario where you check your financial data, and suddenly, an account decides to clone itself, messing up all your totals. You try to fix it by kicking out the extra account, but whoops, it ends up deleting both. Add it back, and now you've got three.

Honestly, I don't need the whole everyday budgeting and tracking thing and other apps do a great job of that. I just wanted something that could give me real-time info on my money situation. I'm mostly looking for my bottom line. (cash + investments) - debt.

So...

## Access

I signed up for [Plaid's free plan](https://plaid.com/pricing/).  Then used [mintable](https://github.com/kevinschaich/mintable) to easily get the keys I needed.

Now I have a `config` like this,

```js
{
	"plaid": {
		"PLAID-CLIENT-ID": "xoxoxoxoxoxoxoxoxo",
		"PLAID-SECRET": "xoxoxoxoxoxoxoxoxo",
		"Plaid-Version": "nnnn-nn-nn"
	},
	"accounts": {
		"institution_1": "access-development-xoxoxoxoxoxoxoxoxo",
		"institution_2": "access-development-xoxoxoxoxoxoxoxoxo"
	}
}
```

## Plaid

The plaid npm package is great, but I really only need to do a few things, so adding my own wrapper seemed like a good idea.

```js
// api.mjs
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

export default class Api {
  constructor(config) {
    this.plaidClient = null;
    this.config = config;
    this.makeClient();
  }

  makeClient() {
    if (!this.plaidClient) {
      const configuration = new Configuration({
        basePath: PlaidEnvironments.development,
        baseOptions: {
          headers: { ...this.config.plaid },
        },
      });

      this.plaidClient = new PlaidApi(configuration);
    }
  }

  async balance(access_token) {
    try {
      const accounts_response = await this.plaidClient.accountsBalanceGet({
        access_token,
      });
      return accounts_response;
    } catch (error) {
      // console.error(error);
    }
  }

  async balances() {
	const accounts = this.config.accounts
    const accountBalances = Object.keys(accounts).map(async (key) => {
      const acc = await this.balance(accounts[key]);
      return acc.data.accounts.map((a) => ({ ...a, key }));
    });
    return Promise.allSettled(accountBalances);
  }

  // The part I really care about.
  async formattedBalances() {
	const accountBalances = await this.balances();
	const payload = accountBalances
	  .filter((o) => o.status === "fulfilled")
	  .map((o) => o.value)
	  .flat(Infinity)
	  .map((a) => {
		return {
		  title: `${a.key} (${a.name})`,
		  value: a.type === 'credit' ? ~~a.balances.current*-1 : a.balances.available || a.balances.current,
		};
	  });
	return payload;
  }
}
```

## index.mjs so far...

```js
import config from './config.mjs';
import Api from './api.mjs';
const api = new Api(config);
const data = await api.formattedBalances(config);
console.log(JSON.stringify(data, null, 2));
```

## Result

```bash
[
  {
    "title": "institution_1 (****nnnn)",
    "value": 1.97
  },
  {
    "title": "institution_1 (**nnnn)",
    "value": 2.69
  },
  {
    "title": "institution_2 (High Yield CD 12-Month)",
    "value": 100
  },
  {
    "title": "institution_2 (Spending Account)",
    "value": 50.46
  },
  {
    "title": "institution_2 (Savings Account)",
    "value": 1500.58
  }
]
```

## Make things a tad bit prettier.

Having the data in JSON is fine and all, but I kinda want something I can scan quickly as currency.  A total would be nice too.


```js
/// formatPlaid.mjs
const formatPlaid = (data) => {
  const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
  });

  const fields = data.map(d => ({
	...d,
	'value': formatter.format(d.value),
  }));

  fields.push({
	'title': 'Total',
	'value': formatter.format(data.reduce((a, b) => a + b.value, 0)),
  })

  return fields;
}

export default formatPlaid;
```

## index.mjs so far...

```js
import config from './config.mjs';
import Api from './api.mjs';
import formatPlaid from './formatPlaid.mjs';
const api = new Api(config);
const data = await api.formattedBalances(config);
console.log(formatPlaid(data))
```

## Result

```bash
[
  { title: 'institution_1 (****nnnn)', value: '$1.97' },
  { title: 'institution_1 (**nnnn)', value: '$2.69' },
  { title: 'institution_2 (High Yield CD 12-Month)', value: '$100.00' },
  { title: 'institution_2 (Spending Account)', value: '$50.46' },
  { title: 'institution_2 (Savings Account)', value: '$1,500.58' },
  { title: 'Total', value: '$1,655.70' }
]
```

## Slack

I wanted to send this to my own slack channel so I followed the code [explained here](https://blog.nodeswat.com/simple-node-js-and-slack-webhook-integration-d87c95aa9600).

And here we go...

```js
import https from 'https';
const hookUrl = 'https://hooks.slack.com/services/nnn/nnn/nnn';

function sendSlackMessage(fields) {
  const total = fields.pop()
  const userAccountNotification = {
	'username': 'Fin notifier',
	'text': 'Here is your fin update',
	'attachments': [{
	  'color': '#2eb886',
	  'fields': fields
  },
  {
    'color': '#ffff00',
    'fields': [total]
  }]
};

  return new Promise((resolve, reject) => {
    const requestOptions = {
  	  method: 'POST',
	  header: {
  	    'Content-Type': 'application/json'
	  }
    };

    const req = https.request(hookUrl, requestOptions, (res) => {
      let response = '';
      res.on('data', (d) => { response += d; });
      res.on('end', () => { resolve(response); })
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(JSON.stringify(userAccountNotification));
    req.end();
  });
}

export default sendSlackMessage;
```

## index.mjs so far...

```js
import config from './config.mjs';
import Api from './api.mjs';
import formatPlaid from './formatPlaid.mjs';
import sendSlackMessage from './sendSlack.mjs';
const api = new Api(config);
const data = await api.formattedBalances(config);
try {
  const slackResponse = await sendSlackMessage(formatPlaid(data));
  console.log('Message response', slackResponse);
} catch (e) {
  console.error('There was a error with the request', e);
}
```

## Result

<div class="ui large bordered image ma2">
{% image "finSlack.png", "Plus Branding" %}
</div>

## Next up

I got this running on a cron schedule in [OliveTin](https://github.com/OliveTin/OliveTin).  I explain it a bit [here](/olivetin-node/):
