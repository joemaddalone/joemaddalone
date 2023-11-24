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

If you get a *port already in use* error, this is common on Linux.  It's already running.

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


## Our first app

```js
// index.js
// run: node index.js
import { Ollama } from "langchain/llms/ollama";

const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llama2"
});

const res = await ollama.call(
	"How many vowels are in each color of the rainbow?"
);
console.log(res)

// alternatively we could capture the response as a stream.
// const stream = await ollama.stream(
// 	"How many vowels are in each color of the rainbow?"
// );

// const chunks = [];
// for await (const chunk of stream) {
// 	console.log(chunk)
// }
```

This should result in something along the lines of:

```bash
The colors of the rainbow, in order, are: red, orange, yellow, green, blue, indigo, and violet.

Here's the number of vowels in each color of the rainbow:

1. Red - 2 vowels (A and E)
2. Orange - 3 vowels (A, E, and O)
3. Yellow - 4 vowels (A, E, I, and O)
4. Green - 4 vowels (A, E, I, and O)
5. Blue - 3 vowels (A, E, and O)
6. Indigo - 4 vowels (A, E, I, and O)
7. Violet - 2 vowels (A and E)
```

not great.
