---
title: 'ollama'
date: 2023-11-24
tags: ['post']
excerpt: 'ollama + langchain'
---

<hgroup>
	<h1>ollama</h1>
	<p>ollama + langchain</p>
</hgroup>

## What is Ollama?
[Ollama](https://ollama.ai/) is a tool for downloading and running large language models.  It's like bittorrent for open source LLMs.

## What is LangChain?
First, an LLM chain is the chaining of multiple LLM calls. We do this in order to deal with the constraint of limited context challenges when interacting with large volumes of information.

* **System prompt**: "You are an assistant for question-answering tasks.  Use the following code sample to answer the question.  if you don't know the answer, just say that you don't know. Keep your answers concise."
* **Context**: "Here is the code I'd like to discuss: ...code..."
* **Question**: "How can I further optimize this code?"

LLM Chains abstract away the complexity of multiple calls.  [LangChain](https://www.langchain.com/) is an LLM Chain library we can use to produce our LLM Chain in order to provide context which, hopefully, results in less hallucinations.  LangChain also allows us to pair our LLM chain with document retrieval methods.  Pulling in PDFs or database records as context for our LLM chain is, put mildly, awesome.



## Install ollama

```bash
curl https://ollama.ai/install.sh | sh
```

## Pull a model (or two, or three)
```bash
ollama pull llama2
ollama pull codellama
ollama pull mistral
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
	{"name":"llama2:latest",...},
	{"name":"mistral:latest",...}
]}
```

I personally run this on a custom port with
```bash
OLLAMA_HOST=0.0.0.0:9494 ollama serve
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
  model: "mistral" // using the mistral LLM.
});

const question = "What color is the house at 6353 Juan Tabo Blvd?"
const res = await ollama.call();
console.log(res)

// alternatively we could capture the response as a stream.
// const stream = await ollama.stream(question);
// for await (const chunk of stream) {
// 	process.stdout.write(chunk);
// }
```

This should result in something along the lines of:

<div class="message success">
The color of the house at 6353 Juan Tabo Blvd ... would depend
on the specific property and its owners. There are no records to
indicate the color of this particular house...
</div>

Obviously the the LLM does not know the color of the house.  Had we asked some more general question we would definitely get an answer, but I have purposely asked it something it does not know.


So let's give it some context.

## chain and Document and Stuff

We covered what a `chain` is previously.  To `Stuff` a chain is exactly what it sounds like.  Fill it with stuff.  In this case stuff it with `Documents`

```js
// index.js
// run: node index.js
import { Ollama } from "langchain/llms/ollama";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";

const ollama = new Ollama(/*... same as before */);

const question = "What color is the house at 6353 Juan Tabo Blvd?"
const chain = loadQAStuffChain(ollama);
const input_documents = [
	new Document({ pageContent: "The color of the house at 6353 Juan Tabo Blvd is blue" })
];
const res = await chain.call({ input_documents, question});

console.log(res.text)
```
### result:

<div class="message success">
The color of the house at 6353 Juan Tabo is blue.
</div>

Much better.  And kind of exciting when you observe what actually happened.  We taught the model about something new.  We could have told it anything.  This example was a bit "call and response".  Let's see if it can infer information from slightly less direct context.

```js
// index.js
// run: node index.js
import { Ollama } from "langchain/llms/ollama";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";

const ollama = new Ollama(/*... same as before */);

const question = "What color is the house at 6353 Juan Tabo Blvd?"
const chain = loadQAStuffChain(ollama);
const docs = [
  new Document({ pageContent: "Houses on Juan Tabo Blvd are either red or blue" }),
  new Document({ pageContent: "0 through 9999 are valid addresses on Juan Tabo Blvd" }),
  new Document({ pageContent: "Houses on Juan Tabo Blvd with odd numbered addresses are red" }),
];
const res = await chain.call({ input_documents, question});

console.log(res.text)
```
### result:

<div class="message success">
The house at 6353 on Juan Tabo Blvd has a red address because it is an odd number. According to the context given, houses on Juan Tabo Blvd with odd numbered addresses are red.
</div>

## External documents

Here I have moved our context data into a single external text file.  We'll use the TextLoader from LangChain to convert it into a Document.

```md
// jauntabo.txt
Houses on Juan Tabo Blvd are either red or blue.
0 through 9999 are valid addresses on Juan Tabo Blvd.
Houses on Juan Tabo Blvd with odd numbered addresses are red.
```
---
```js
// index.js
import { Ollama } from "langchain/llms/ollama";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";
import { TextLoader } from "langchain/document_loaders/fs/text";

const ollama = new Ollama(/*... same as before */);

const question = "What color is the house at 6353 on Juan Tabo Blvd?"
const chain = loadQAStuffChain(ollama);
const loader = new TextLoader("./jauntabo.txt");
const input_documents = await loader.load();
const res = await chain.call({ input_documents, question });
console.log(res.text)
```

### result

<div class="message success">
To determine the color of the house at 6353 Juan Tabo Blvd, we need to look at the address and see if it is an odd number. Since 6353 is an odd number, according to the information given, the house should be red. Therefore, the house at 6353 on Juan Tabo Blvd is red.
</div>

## Multiple external Documents

Lastly, let's have the code read a directory of external text documents.

```md
--> /jauntabo/a.txt
Houses on Juan Tabo Blvd are either red or blue.

--> /jauntabo/b.txt
0 through 9999 are valid addresses on Juan Tabo Blvd.

--> /jauntabo/c.txt
Houses on Juan Tabo Blvd with odd numbered addresses are red.

--> /jauntabo/d.txt -- this is a new piece of context for the LLM!
Houses on Juan Tabo Blvd with prime numbered addresses are blue.
```
---

```js
// index.js
import { Ollama } from "langchain/llms/ollama";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";

const ollama = new Ollama(/*... same as before */);

const question = "What color is the house at 1901 on Juan Tabo Blvd?";
const chain = loadQAStuffChain(ollama);
const loader = new DirectoryLoader("jauntabo", {
  ".txt": (path) => new TextLoader(path)
});
const input_documents = await loader.load();
const res = await chain.call({ input_documents, question });
console.log(res.text);
```

### result

<div class="message success">
The house at 1901 on Juan Tabo Blvd is blue.
</div>
