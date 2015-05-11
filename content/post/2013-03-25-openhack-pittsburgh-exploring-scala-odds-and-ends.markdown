---
layout: post
title: "OpenHack Pittsburgh: exploring Scala odds and ends"
date: 2013-03-25T22:43:00-04:00
comments: true
external-url: 
categories: 
- OpenHack
- Pittsburgh
- programming
- Scala
- testing
- ScalaCheck
- asynchronous
- continuations
- futures
- Akka
- macros
---
[A third OpenHack Pittsburgh](http://www.meetup.com/pittsburgh-ruby/events/106184432/) meeting was organized, and I attended again. It was held again at [The Beauty Shoppe](http://www.thebeautyshoppe.org/), just like the [previous time](/blog/2013/02/25-openhack-pittsburgh-studying-scala/).

I was pleased by how much progress had been made in the construction inside. The space was looking really nice.

## Scala stuff

My plan was to continue working on a personal project in Scala. That plan kind of changed because Roy wanted to ask me questions about Scala. I told him that I'm still learning stuff myself, but answered his questions as well as I could.

### Unit testing

One question Roy had was about unit test frameworks and generating independent tests (as opposed to writing a single test that makes many generated assertions, because such a test would simply stop at the first failed assertion. I told him this was easy to do with either the [Specs2](http://etorreborre.github.com/specs2/) unit testing framework or the [ScalaTest](http://www.scalatest.org/) one (I use Specs2).

Here's sample code showing [how to do it](https://github.com/FranklinChen/test-loop-over-tests).

### Property-based testing

I also mentioned that I was working on a presentation on a cool Scala library supporting property-based testing, [ScalaCheck](http://www.scalacheck.org/).

#### (Update of 2013-04-11)

I ended up [giving a talk at the Pittsburgh Scala meetup in April on ScalaCheck](/blog/2013/04/11/my-pittsburgh-scala-meetup-talk-on-property-based-testing-using-scalacheck/).

### Continuations

Roy asked about continuations in Scala, in the context of an idea he had for a Web app.

I said that I hadn't personally used first-class continuations in Scala, but knew support for delimited continuations existed as a compiler plugin. So I looked up how to use them and created a little project as proof of concept (nothing worth seeing, just typical examples of code with `shift` and `reset` comparable to how I'd seen them used in other languages with delimited continuations); check out [Josh Suereth's (somewhat dated) article on delimited continuations in Scala](http://suereth.blogspot.com/2010/03/how-you-should-think-about-delimited.html) for more details.

But I asked Roy what he really wanted continuations for anyway. They are a low-level concept, and there are higher-level constructs built on top of continuations that I think are more useful.

He said that he wanted to be able to have code "look" like it was synchronous but actually be asynchronous.

#### (Update of 2014-04-21)

Scala continuations have been deprecated in [Scala 2.11](http://typesafe.com/blog/scala-211-has-arrived).

### Futures

So I told him, that's the perfect use case for [futures](http://docs.scala-lang.org/overviews/core/futures.html), which are well-supported in Scala, especially because of their compositional monadic properties in conjunction with nice `for`-comprehension syntax.

I said, the only drawback is that you have to write code in monadic style.

When I went home after OpenHack Pittsburgh, however, I coincidentally found that there was a project to improve the syntax of writing this kind of asynchronous computation! [Akka Dataflow](http://doc.akka.io/docs/akka/snapshot/scala/dataflow.html) does precisely this, using the continuation plugin.

#### (Update of 2013-08-27)

There has been other work to improve syntactic support for asynchronous computation. [`async`](https://github.com/scala/async) uses [macros](http://scalamacros.org/) to try to provide the nice syntactic experience without the overhead of the continuation plugin.

#### (Update of 2013-12-17)

[`dataflow` has been deprecated](https://github.com/akka/akka/commit/66e40084946f6f993a2c62d9921718704daf448a), now that `async` is fully mature (I have been happily using it for a while now).

#### (Update of 2013-12-31)

More specifically, `async` was much improved just in time for it to be officially used in the Coursera course "Principles of Reactive Programming", which [I just completed and reviewed](http://conscientiousprogrammer.com/blog/2013/12/31/review-of-the-free-coursera-course-principles-of-reactive-programming/).

### Implicits

Roy asked me about other interesting features of Scala. I had to say something about implicits, of course, useful for simulating monkey patching as well as simulating Haskell type classes.

Implicits are probably the single most interesting language feature of Scala.

#### (Update of 2014-02-13)

There was a [Pittsburgh Scala Meetup session on implicits](http://conscientiousprogrammer.com/blog/2014/02/13/pittsburgh-scala-meetup-implicits/).

### Specialization of generics

Roy wanted to know whether generics can be specialized in Scala (in contrast to Java, which treats generics as erasure). I said, yes, actually. Fully automatic, efficient specialization is still being improved on, but for now, there's a manual way to do specialization through the [`@specialized` annotation](http://lampwww.epfl.ch/~dragos/files/scala-spec.pdf).

#### (Update of 2014-07-17)

There's also [Miniboxing](http://scala-miniboxing.org/) for efficiency.

## Conclusion

It was stimulating talking with Roy about Scala and trying to explain stuff to him on the fly, or look stuff up (thank goodness for WiFi in The Beauty Shoppe!), or code something right there and then. The conversations also caused me to do my homework after the meetup!
