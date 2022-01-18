---
title: 'The Long Goodbye to CommonJS'
layout: layout
date: 2021-11-29
tags: ['post']
excerpt: 'With the advent of HTTP/2, ES Modules, and other technologies the future of web development is ripe for major shifts.'
permalink: "/{{ title | slugify }}/"
---

# The long goodbye to CommonJS.

*TLDR; {{ summary }}*

We may be entering a time for UI development where the tooling we've come to know and love will struggle to remain useful. The tools required to move Javascript into the future, despite browser support, are now having trouble keeping up.

## Why do we bundle?

-   Javascript into a single file
-   CSS into single files
-   Images into sprites?

## A short history lesson:
First and foremost this has always been a performance issue:
* [What is blocking?](https://blog.bluetriangle.com/blocking-web-performance-villain#:~:text=Chrome%20has%20a%20limit%20of,host%20at%20the%20same%20time)
* [Domain Sharding](https://hpbn.co/http1x/#domain-sharding) - The 6-connections-per-origin limit is where Javascript bundles started.

## Browser Limits
Let’s use Google Chrome as an example of this. Chrome has a limit of 6 connections per host name, and a max of 10 connections. This essentially means that it can handle 6 requests at a time coming from the same host, and will handle 4 more coming from another host at the same time. This is important when realizing how many requests are firing off from different hosts on the same page. While Chrome can only handle 10 requests at a time, Firefox can handle up to 17. For an up to date listing of network specifications for browsers, or to check your own browser, visit Browser Scope.

## Bundling evolves

At first it was just concatenation of files, then we took a big step backwards with AMD (module loading), but then Browserify showed up and everything changed - now we had a module bundler which almost overnight turned npm from a purely Node developer resource to an anyone writing javascript resource. Believe it or not there was a time when the Node community absolutely hated the idea of having "browser" packages in npm at all. And Node underwent massive changes to support this.

Browserify was eventually supplanted by the evolution of grunt -> gulp -> Webpack. These next-gen projects didn't stop at bundling Javascript modules. Images, css, javascript, and even HTML are bundled in Webpack today.

## HTTP/2
Fast forward to today.

[Browsers impose a per-domain,only 1 connection per domain](https://stackoverflow.com/questions/36835972/is-the-per-host-connection-limit-raised-with-http-2#:~:text=1%20Answer&text=Browsers%20impose%20a%20per%2Ddomain,only%201%20connection%20per%20domain).

> With HTTP/2, browsers open only 1 connection per domain. However, thanks to the multiplexing feature of the HTTP/2 protocol, the number of concurrent requests per domain is not limited to 6-8, but it is virtually unlimited.

So even if the limits of what we can fetch are no longer a barrier we certainly still need a way to load modules within code... we can't just expect things to work as if there was a module bundler, right?

## EcmaScript Modules

Enter ESM (EcmaScript Modules) - with the end of life of Node 10 on April 30th 2021 all active versions of node will support ESM (with some caveats being worked on). This is without a doubt the death knell for CommonJS across both Node and UI development. It's been dead in modern UI development for a while now. Here's the kicker - ESM works in the browsers already. Like all of them - yes even Safari on iOS.

```js
// a.js
export default () => console.log('A');

// index.js
import A from './a.js'; // yes, you need to use the extension.
A();

// index.html
<script type="module" src="index.js" />
```
That's it.

## More reading

* [esbuild](https://esbuild.github.io/) - crazy fast bundler using esm
* [Snowpack](https://www.snowpack.dev/) - build tool using esm
* [deno](https://www.snowpack.dev/) - a JavaScript runtime dedicated to esm
