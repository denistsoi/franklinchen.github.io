---
layout: post
title: "Pittsburgh Ruby: Building a Compiler in JRuby"
date: 2011-10-06 22:29
comments: true
categories: 
- programming
- Pittsburgh
- Ruby
- JRuby
- Java
- compiler
- parser combinators
- Parslet
- Bitescript
- domain-specific languages
---
Tonight I attended the meeting of the [Pittsburgh Ruby group](http://pghrb.heroku.com/) at Vivisimo. It's been a year now since I first discovered the Pittsburgh Ruby group and finally attended my first meeting as an initial non-Rubyist on November 4, 2010, at the encouragement of Bruce, who said it was a friendly group.

## Presentation

[Chris Umbel](http://www.chrisumbel.com/) gave a talk, "Building a compiler in JRuby". Basically, he was inspired by Ian Dee's work with a toy language [Thnad](https://github.com/undees/thnad) at JRubyConf 2011 to illustrate writing a simple compiler, and decided to do similarly, inventing "sucklang", a "language that sucks".

The room was totally packed! Clearly there was great interest in this topic.

The main tools used were:

- [Parslet](http://kschiess.github.com/parslet/), a parser combinator library for Ruby
- [Bitescript](https://github.com/headius/bitescript), a Java bytecode generation library for Ruby

The interesting thing to me was how both these tools involved internal [domain-specific languages (DSLs)](http://en.wikipedia.org/wiki/Domain-specific_language), really showcasing how easy it is to create internal DSLs for Ruby. The down side, of course, is that not having been familiar with these tools before the talk, I was totally bewildered as Chris sped through overviews of them! I did make a note to investigate the libraries later.

It is definitely cool that with these DSLs, you can get up and going quickly to implement a toy language.
