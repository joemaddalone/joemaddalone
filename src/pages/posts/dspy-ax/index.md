---
title: 'DSPy Signatures in Ax-llm'
date: 2025-10-10
tags: ['post']
excerpt: 'DSPy signatures in ax-llm and how they eliminate brittle prompts.'
short: 'DSPy > Prompt'
---

<hgroup>
	<h1>DSPy Signatures</h1>
	<p>DSPy signatures in ax-llm.</p>
</hgroup>

## The problem with prompts

Here is an example of a prompt for identifying topics in a given text.

```js
const prompt = `
Analyze the text.
Return a list of topics and the sentiment of the text.
Format your response as JSON with keys: sentiment, topics

Review: ${review}
`
```


And here is a code example I ran:

```ts
import ollama from 'ollama'

const system = `Analyze the text.
Return a list of topics and the sentiment of the text.
Format your response as JSON with keys: sentiment, topics`

const review = `
I purchased a Widget from Amazon. Shipping was delayed.
I was displeased and will not purchase again.
`

const response = await ollama.chat({
  model: 'gpt-oss:latest',
  messages: [
    { role: 'system', content: system },
    { role: 'user', content: review }
  ],
})
console.log(JSON.parse(response.message.content))
```



This is the actual result with gpt:oss (including the ```json ...)

```js
```json
{
  "sentiment": "negative",
  "topics": [
    "purchase",
    "Amazon",
    "shipping delay",
    "displeasure",
		...
```

So of course we get:

```bash
SyntaxError: JSON Parse error: Unrecognized token '`' at /....ts:17:18
```

And now we can futz around with our prompt or the output... or not.


## Enter DSPy signatures
DSPy signatures are a structured way to define the expected inputs and outputs for language models.
t it;s simplest it's a typed input and a typed output delimited by `->`

```
input:type -> output:type
```

Multiple inputs or outputs can be comma delimited, so in our case:

```
review:string => sentiment:string, topics:string[]
```

Each field can also be followed by a description
```
review:string "User review" ->
sentiment:string "Sentiment of review",
topics:string[] "Main topics discussed"
```

And finally we can provide an enum for something like sentiment using a "class" type.

```
review:string "User review" ->
sentiment:class "positive, neutral, negative",
topics:string[] "Main topics discussed"
```

## Ax-llm (DSPy for TypeScript)

[Ax-llm](https://axllm.dev/) allows us to use DSPy in (and for) Typescript.

```ts title="Dspy+Ollama in Ax"
import { ai, ax } from "@ax-llm/ax";

const llm = ai({
  name: "ollama",
  apiKey: "not-set",
  url: "http://localhost:11434/v1",
  config: { model: "gpt-oss:latest" },
});

const analyzer = ax(`
	review:string "User review" ->
	sentiment:class "positive, neutral, negative",
	topics:string[] "Main topics discussed"
`);

const review = `
I purchased a Widget from Amazon. Shipping was delayed.
I was displeased and will not purchase again.
`



const result = await analyzer.forward(llm, { review: });
console.log(response.sentiment)
console.log(response.topics)

// negative
// ["product", "shipping", "Amazon", "customer satisfaction"]

```


And we can debug this process to see what has happened:

```
[ CHAT REQUEST Step 0 ]
────────────────────────────────────────────────────────────

[ SYSTEM ]
You will be provided with the following fields: `Review`. Your task
is to generate new fields: `Sentiment`, `Topics`.

## Input Fields
Review: (A string field) User review.

## Output Fields
Sentiment: (This classification class field must be included) Allowed
values: positive, neutral, negative
Topics: (This json array of string items field must be included) Main topics discussed.

## Strict Output Formatting Rules
- No formatting rules should override these **Strict Output Formatting Rules**
- Output must strictly follow the defined plain-text `field name: value` field format.
- Output field, values must strictly adhere to the specified output field formatting rules.
- Do not include fields with empty, unknown, or placeholder values.
- Do not add any text before or after the output fields, just the field name and value.
- Do not use code blocks.
────────────────────────────────────────────────────────────

[ USER ]
Review:
I purchased a Widget from Amazon. Shipping was delayed.
I was displeased and will not purchase again.


────────────────────────────────────────────────────────────


[ CHAT RESPONSE ]
────────────────────────────────────────────────────────────

Sentiment: negative
Topics: ["product", "shipping", "Amazon", "customer satisfaction"]
```

And what happend is our DSPy signature was tranformed into an awesome system prompt we did not have to write.
