---
layout: post
title: "The start of a local Haskell study group"
date: 2012-11-05T09:23:00
comments: true
external-url: 
categories: 
- programming
- Haskell
- Pittsburgh
- functional programming
- Scala
- Test-Driven Development
---
{{< figure src="http://www.haskell.org/wikiupload/4/4a/HaskellLogoStyPreview-1.png" title="Haskell logo" >}}

Recently, I had a conversation with [Bill](http://billlaboon.com/), who was asking about resources for learning more about functional programming. I did some serious thinking about how to advise, but eventually decided to recommend that he use the [Haskell](http://haskell.org/) programming language as a vehicle for getting into the theory and practice of functional programming.

(To fans of [Standard ML](http://en.wikipedia.org/wiki/Standard_ML) or [Caml](http://caml.inria.fr/) or [Scala](http://www.scala-lang.org/) or [Clojure](http://clojure.org/) or [Racket](http://racket-lang.org/) or other languages: I will explain my rationale later.)

Also, I recommended a particular tutorial as a decent starting point: a book available online called ["Learn You a Haskell for Great Good!"](http://learnyouahaskell.com/) (seriously).

As [Bill got going](http://billlaboon.com/learning-myself-a-haskell-for-great-good/) and [Chris](http://www.chrisumbel.com/) joined us, Bill set up a Google Group to make discussion easier. If you're interested in joining the study group, let us know!

## A project setup

Meanwhile, one of my first suggestions so far to the participants has been to get a decent serious development setup beyond just using the REPL for experimentation. In particular, as a proponent of [Test-Driven Development](http://en.wikipedia.org/wiki/Test-driven_development), I believe that anyone learning a new programming language should be given the tools to immediately get a serious process going, even if only to solve trivial problems.

Since [Project Euler](http://projecteuler.net/) was brought up as a source of little programming exercises to solve, I decided to create a project structure with (currently) one solved problem and a test file using [HUnit](http://hunit.sourceforge.net/) and [test-framework](http://batterseapower.github.com/test-framework/) as a template one can use to set up a complete development process.

Here's the link to my [`project-euler-haskell` on GitHub](http://github.com/FranklinChen/project-euler-haskell).

Comments and participation are welcome!

