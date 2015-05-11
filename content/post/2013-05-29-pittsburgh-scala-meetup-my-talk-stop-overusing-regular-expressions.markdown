---
layout: post
title: "Pittsburgh Scala Meetup: my talk \"Stop Overusing Regular Expressions!\""
date: 2013-05-29T22:37:07-04:00
comments: true
external-url: 
categories:
- programming
- Scala
- Akka
- regular expressions
- parser combinators
- Ruby
- JavaScript
- Python
- M*Modal
- Pittsburgh TechFest
- TypeSafe
---
So two days ago, [Jamie](http://jamieforrest.com/) sent email out to the [Pittsburgh Scala meetup group](http://www.meetup.com/Pittsburgh-Scala-Meetup/) saying that our planned speaker Barrett, who was to have talked about his experiences using [Akka](http://akka.io/), was not going to make it, and asked if anyone else could talk about something.

## I suddenly stepped in as a substitute speaker

Since I was already supposed to give a talk on Saturday at the 2013 [Pittsburgh TechFest](http://pghtechfest.com/), and was in the process of finishing my work on it, I volunteered to give an early version of my Pittsburgh TechFest talk [at the Scala meetup](http://www.meetup.com/Pittsburgh-Scala-Meetup/events/115817242/), since I actually happen to provide Scala code in the talk. Ha, this meant giving two talks in two successive meetings, because at the last meeting, I gave a [talk on property-based testing using ScalaCheck](/blog/2013/04/11/my-pittsburgh-scala-meetup-talk-on-property-based-testing-using-scalacheck/).

<!--more-->

## Presentation

My presentation was "Stop overusing regular expressions!"

Here is my abstract as submitted to Pittsburgh TechFest:
<blockquote>
Regular expressions are very commonly used to process and validate text data. Unfortunately, they suffer from various limitations. I will discuss the limitations and illustrate how using grammars instead can be an improvement. I will make the examples concrete using parsing libraries in a couple of representative languages, although the ideas are language-independent. (I'll try to squeeze in, say, Ruby, Python, JavaScript, Scala.)

I will emphasize ease of use, since one reason for the overuse of regular expressions is that they are so easy to pull out of one's toolbox.
</blockquote>

### Attendance

Turnout was small: five people other than myself. By the way, we've discovered unsurprisingly predictable pattern: roughly half the people who RSVP "yes" on the meetups show up.

### Slides and code

The material for the talk *as given* is at [this tag of my GitHub repository](https://github.com/franklinchen/talk-on-overusing-regular-expressions/tree/meetup-talk).

My [master branch of the GitHub repository](https://github.com/franklinchen/talk-on-overusing-regular-expressions) will always have my latest revisions.

#### (Update of 2013-06-01)

I made substantial revisions in the presentation and code before Pittsburgh TechFest. I recommend looking at the latest version. Details in my [report on my talk at Pittsburgh TechFest 2013](/blog/2013/06/01/pittsburgh-tech-fest-2013-my-talk-stop-overusing-regular-expressions/).

<iframe src="http://www.slideshare.net/slideshow/embed_code/22302440" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="http://www.slideshare.net/FranklinChen/handout-22302440" title="Stop overusing regular expressions!" target="_blank">Stop overusing regular expressions!</a> </strong> from <strong><a href="http://www.slideshare.net/FranklinChen" target="_blank">Franklin Chen</a></strong> </div>

## After

There was great feedback after the talk. Some material I went through took quickly, without a smooth transition to relate ideas, and my final page of Scala code that contained dense use of all kinds of operators and idioms was something I stumbled through trying to explain, even as I was feeling that explaining it was a tangent from the main points of the talk.

There was casual discussion of Scala and other topics after the talk as well. I was pretty excited to hear about how useful Akka has become in solving important problems.

## Thanks

Thanks to everyone who came to the talk! I enjoyed sharing my experiences and recommendations, and engaging in discussion about the topics, and getting to make a mental note of things to change in my delivery, slides, and code for Pittsburgh TechFest on Saturday.

Thanks to [Justin](http://justin-pihony.blogspot.com/) for arranging a meeting place for the Pittsburgh Scala meetup at [M*Modal](http://mmodal.com/), and thanks to M*Modal for providing the space!

And thanks to Jamie again for creating the Pittsburgh Scala meetup group, and [TypeSafe](http://typesafe.com/) for being a sponsor now, thanks to [Josh](http://jsuereth.com/) (who sadly did not make it to this meeting).
