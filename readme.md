# dockerfile-designer

Compose a Dockerfile via drag-n-drop

[![Build Status](https://travis-ci.org/dikarel/dockerfile-designer.svg?branch=master)](https://travis-ci.org/dikarel/dockerfile-designer)

## Quickstart

```bash
npm install
npm start
```

## Motivation

Handcrafting Dockerfiles is fun at first, but gets tiring after a while.
Typing the same magic incantations again and again - hoping you don't screw
something up along the way - is at best tedious. In addition, navigating opaque
package manager sites isn't exactly the best use of time.

We need a way to quickly cobble together Dockerfiles that just work.

![Mockup](https://cloud.githubusercontent.com/assets/15131271/20765558/7025e1a6-b765-11e6-943b-0fd45c58cef2.png)

## TODO

- Select apk package
- Copy to clipboard
- Select npm package
- Select OS
- Select package version
- Detect conflicts
- Snippets/recipes
- Tweak comment verbosity
- Editable
- Save as GitHub project
- Downloadable Dockerfile
