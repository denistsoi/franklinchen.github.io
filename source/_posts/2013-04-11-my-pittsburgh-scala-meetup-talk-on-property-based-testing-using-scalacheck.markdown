---
layout: post
title: "My Pittsburgh Scala Meetup talk on property-based testing using ScalaCheck"
date: 2013-04-11T22:49:30-04:00
comments: true
external-url: 
categories: 
- programming
- Java
- xUnit
- JUnit
- Haskell
- Scala
- ScalaCheck
- QuickCheck
- testing
- TDD
- BDD
- Revv Oakland
- Pittsburgh
---
Tonight was the [third meeting](http://www.meetup.com/Pittsburgh-Scala-Meetup/events/108080782/) of the [Pittsburgh Scala Meetup](http://www.meetup.com/Pittsburgh-Scala-Meetup/). Our last meeting was [in late February](/blog/2013/02/21/the-second-meeting-of-the-pittsburgh-scala-meetup-josh-suereth-on-functional-patterns-for-the-asynchronous-web/), and we didn't have a meeting in March.

## Attendance

This time there were only six of us in attendance, but that had its advantages, as it resulted in everyone really participating fully in discussion.

## Presentation

I gave a presentation "Beyond xUnit example-based testing: property-based testing with ScalaCheck" as an introduction to property-based testing, with examples using [ScalaCheck](https://github.com/rickynils/scalacheck).

I prepared the presentation with the goal of spreading the word on property-based testing as a complement to much more widely used methods of testing in the TDD/BDD software development communities. My impression has been that outside of the functional programming communities such as those in Haskell (the pioneer of [QuickCheck](http://en.wikipedia.org/wiki/QuickCheck)), ML, and Haskell, there has not been as much use of property-based methods of design and testing. Fortunately, this has been changing.

In any case, I personally can no longer imagine not starting out design exploration without using ScalaCheck on Scala or Java based projects. It's a useful additional tool for the developer's toolkit.

### Slides and code

My slides are available [on slideshare](http://www.slideshare.net/FranklinChen/handout-18644963), and a full SBT project of the code is [on GitHub](https://github.com/franklinchen/talk-on-scalacheck).

Note that the slides are not in any way a substitute for the actual talk and the questions and answers and discussion during and after it! They are most useful as memory joggers for those who actually attended the presentation. A set of slides is nothing resembling a technical article or a blog post.

## After

Out of some questions during the talk, we came up with an idea for improving ScalaCheck that might be an interesting group project to work on.

There was also more general discussion of using Scala, upcoming and ongoing local Pittsburgh general tech gatherings, Josh filling us in on developments in the Scala world, and ideas for future presentations.

## Conclusion

It was a small gathering, but I enjoyed presenting on property-based testing, and we had some really good discussions. Another meeting for the Pittsburgh Scala Meetup has already been [scheduled for May](http://www.meetup.com/Pittsburgh-Scala-Meetup/events/112652112/).
