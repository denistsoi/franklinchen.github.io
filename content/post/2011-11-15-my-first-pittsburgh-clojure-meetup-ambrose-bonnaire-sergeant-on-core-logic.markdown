---
layout: post
title: "My first Pittsburgh Clojure Meetup: Ambrose Bonnaire-Sergeant on core.logic"
date: 2011-11-15T23:12:00
disqus_identifier: "http://franklinchen.com/blog/2011/11/15/my-first-pittsburgh-clojure-meetup-ambrose-bonnaire-sergeant-on-core-logic/"
disqus_url: "http://franklinchen.com/blog/2011/11/15/my-first-pittsburgh-clojure-meetup-ambrose-bonnaire-sergeant-on-core-logic/"
url: "blog/2011/11/15/my-first-pittsburgh-clojure-meetup-ambrose-bonnaire-sergeant-on-core-logic/"
comments: true
categories:
- programming
- Clojure
- Pittsburgh
- Scheme
- Lisp
- Common Lisp
- Emacs
- core.logic
- domain-specific languages
- macros
---
I finally attended a [meeting](http://www.meetup.com/Clojure-PGH/events/16249445/) of the local [Pittsburgh Clojure meetup](http://www.meetup.com/Clojure-PGH/) group, for the first time!

I came to this meeting largely because I heard that Ambrose Bonnaire-Sergeant, a student in Australia, was visiting the US [on scholarship](http://cemerick.com/2011/11/08/ambrose-has-received-his-clojure-scholarship-thanks-to-you/) to present at [Clojure/Conj](https://github.com/relevance/clojure-conj/tree/master/2011-slides) and was happening to be in town in Pittsburgh, and therefore was going to visit the Pittsburgh Clojure meetup group and talk about his recent work on logic programming.

<!--more-->

## A note on Clojure

I confess I haven't yet done anything with the Clojure language.

However, two decades ago, back in the 1990s, I spent a lot of time programming in Scheme, another Lisp variant, and I also did a tiny bit of programming in Common Lisp (but when I discovered Scheme, I basically lost all interest in Common Lisp).

It is remarkable to me that a Lisp has become revived again recently, because for decades it was always such a niche language. Probably most of us who have used Lisp at all have done so through Emacs, which is configured using Emacs Lisp. I'm pretty excited about the Lisp revival, despite my having my own reasons not to prefer Lisp right now for my own programming.

## Ambrose's presentation

I got lost during Ambrose's presentation since the logic programming library [`core.logic`](https://github.com/clojure/core.logic) is an embedded domain-specific language with its own look. One of the advantages of Lisp is that macros enable creating domain-specific languages; of course, this is also a disadvantage. If I wanted to understand `core.logic`, I would have to go off on my own and study it and play around with it and probably even study its implementation.

This is how I felt also last month when I went to a [Ruby meetup that also involved domain-specific languages](/blog/2011/10/06/pittsburgh-ruby-building-a-compiler-in-jruby/).
