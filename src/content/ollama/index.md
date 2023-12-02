---
title: 'ollama'
layout: layout
date: 2023-11-24
tags: ['post']
excerpt: 'ollama + langchain'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

## Install ollama

```bash
curl https://ollama.ai/install.sh | sh
```

## Pull a model (or two, or three)
```bash
ollama pull llama2
ollama pull codellama
```


## Start ollama

If you get a *port already in use* error, this is common on Linux immediately after installation.  It's already running.

```bash
ollama serve
```

ollama is now available at http://localhost:11434

```bash
curl http://localhost:11434
Ollama is running

curl http://localhost:11434/api/tags
{"models":[
	{"name":"codellama:latest",...},
	{"name":"llama2:latest",...}
]}
```

I personally run this on a custom port with
```bash
LLAMA_HOST=0.0.0.0:9494 ollama serve
```

## Setup project

```bash
mkdir ai-local
cd ai-local
npm init -y
npm i langchain

# add "type": "module" to package.json

```


## Our first app, impossible question

```js
// index.js
// run: node index.js
import { Ollama } from "langchain/llms/ollama";

const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llama2"
});

const question = "What color is the house at 6353 Juan Tabo?"
const res = await ollama.call();
console.log(res)

// alternatively we could capture the response as a stream.
// const stream = await ollama.stream(question);

// const chunks = [];
// for await (const chunk of stream) {
// 	console.log(chunk)
// }
```

This should result in something along the lines of:

```bash
I apologize, but I'm a large language model, I do not have access to real-time
information about the color of houses or any other physical properties...
```
Obviously the llama2 does not know the color of the house.  Had we asked some more general question we would definitely get an answer, but I have purposely asked it something it does not know.

So let's give it some context.

### chain and Document

```js
// index.js
// run: node index.js
import { Ollama } from "langchain/llms/ollama";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";

const ollama = new Ollama(/*... same as before */);

const question = "What color is the house at 6353 Juan Tabo?"
const chain = loadQAStuffChain(ollama);
const input_documents = [
	new Document({ pageContent: "The color of the house at 6353 Juan Tabo is blue" })
];
const res = await chain.call({ input_documents, question});

console.log(res.text)
```
### result:

```bash
The color of the house at 6353 Juan Tabo is blue.
```

Much better.  An kind of exciting when you observe what actually happened.  We taught the model about something new.  We could have told it anything.  This example was a bit "call and response".  Let's see if it can infer information from slightly less direct context.

### chain and Document

```js
// index.js
// run: node index.js
import { Ollama } from "langchain/llms/ollama";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";

const ollama = new Ollama(/*... same as before */);

const question = "What color is the house at 6353 Juan Tabo?"
const chain = loadQAStuffChain(ollama);
const docs = [
  new Document({ pageContent: "Houses on Juan Tabo are either red or blue" }),
  new Document({ pageContent: "6353 is an address on Juan Tabo" }),
  new Document({ pageContent: "Houses on Juan Tabo with odd numbered addresses are red" }),
  new Document({ pageContent: "Houses on Juan Tabo with even numbered addresses are blue" }),
];
const res = await chain.call({ input_documents, question});

console.log(res.text)
```
### result:

```bash
* Houses on Juan Tabo are either red or blue.
* The address 6353 is an odd numbered address, which means the house is red.

Therefore, the house at 6353 on Juan Tabo is red.
```

