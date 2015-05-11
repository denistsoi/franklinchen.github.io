---
layout: post
title: "RSpec new expectation: finally not shoving a verb into a noun"
date: 2012-06-23T22:05:00
comments: true
categories: 
- programming
- Ruby
- RSpec
- semantics
- syntax
---
I recently saw a note describing how Ruby's RSpec will soon deprecate `should` in favor of the ["new expectation syntax"](http://myronmars.to/n/dev-blog/2012/06/rspecs-new-expectation-syntax) `expect`.

I sighed. `should` was a terrible mistake in the first place.

<!--more-->

Calling this a change in *syntax* is misleading. It's the *semantics* that matters, and it's the obsessive desire to play with syntax in the first place that led to the original `should` [monkey-patching](http://en.wikipedia.org/wiki/Monkey_patch) nightmare.

In the terminology of Steve Yegge's famous rant about the [kingdom of nouns](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html): there was no good reason to shove the *verb* `should` into a class definition (*noun*).

An expectation of something shouldn't be monkey-patched into an object.

The expectation is external, not internal, not something to be owned by a class. The new RSpec finally recognizes this.
