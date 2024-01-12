---
title: 'OliveTin Node'
layout: layout
date: 2023-12-28
tags: ['post']
excerpt: 'olivetin + nvm'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>


*[OliveTin](https://www.olivetin.app/) gives safe and simple access to predefined shell commands from a web interface.*


Technically OliveTin is mean for making a nice little panel of buttons that do whatever you want.  I also use it as a script runner since those actions can be tied to cron schedules.

I use nvm and it made it slightly trickier to get OliveTin (running in docker) to access my code.

## docker-compose

```yaml
version: "3.3"
services:
  olivetin:
    container_name: olivetin
    image: jamesread/olivetin
    volumes:
      - ${APPDATADIR}/OliveTin:/config
      - /home/username/.nvm/versions/node/v20.10.0/bin:/node # this gets us to node
      - /path/to/projects:/projects # this gets us to my code
    ports:
      - "1337:1337"
    restart: unless-stopped
```

## OliveTin config.yml

Now in our OliveTin config we can just:

```yaml
listenAddressSingleHTTPFrontend: 0.0.0.0:1337
logLevel: "INFO"
- title: Do The Thing
  shell: "/node/node /projects/myscript/index.mjs"
  timeout: 60
  icon: backup
  execOnCron:
    - "0 0 */8 * * *" # At minute 0 past every 8th hour
```
