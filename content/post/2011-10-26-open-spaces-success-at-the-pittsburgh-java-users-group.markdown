---
layout: post
title: "Open Spaces success at the Pittsburgh Java User Group!"
date: 2011-10-26T21:19:00
url: "blog/2011/10/26/open-spaces-success-at-the-pittsburgh-java-users-group/"
comments: true
categories:
- Pittsburgh
- Java
- PittJUG
- Open Spaces
- Scala
- Groovy
- ScalaCheck
- ScalaTest
- specs2
- testing
---
Yesterday evening, the [Pittsburgh Java User Group](http://java.net/projects/pittjug/) (PittJUG) for the first time adopted an Open Spaces format. The basic idea is that instead of having someone give an hour-long presentation on something, everyone gets involved in choosing topics of discussion and we all break up into small groups to sit in a circle and chat ([more details](https://docs.google.com/document/d/1Yufdr8zGBCWawsuEfKXXkM6ddcHnuhywzGw1lJ0u5TE/edit)).

If you have never been to an event with this Open Spaces format and philosophy, such an idea might sound chaotic and confusing. The first time I heard about the format, I was extremely skeptical. But the first time I went to an event adopting it, the first [Pittsburgh Geek Out Day](http://www.pghgeekoutday.com/), I found it quite useful and am totally sold on its virtues.

This is a report on the two sessions that I attended. The [PittJUG mailing list](http://java.net/projects/pittjug/lists/pittjug/archive) has some discussion already of the two sessions that I had to miss.

{{< figure src="/images/pittjug/first-open-spaces.jpg" title="First Open Spaces at PittJUG" >}}

<!--more-->

## The topics

Fifteen of us showed up, and the goal was to collectively decide on four topics to break up into two time slots and two rooms, so that for each time slot, one could choose one of the two topics available and meet in the designated room. We went around the room so that everyone could volunteer a topic of interest, and eventually we consolidated popular related topics such that we had the following:

- Software entrepreneurship
- IDEs
- Scala
- Testing and continuous deployment

I had actually submitted three Post-It notes suggesting topics on IDEs, Scala, and testing, so I was pretty happy that others were thinking similarly, and I ended up having to choose between Scala and testing, and going to the Scala session.

Each session ended up having around eight people each, so there were no extremely small or extremely large sessions.

## IDEs

At the session on IDEs, discussion revolved mostly around the following IDEs:

- Eclipse
- IntelliJ IDEA
- NetBeans

Everyone had extensive experience with and advocacy of at least one of these, so it was good to have many different points of view.

Some of the things I learned:

### Eclipse

Eclipse is free, and a lot of plugins are developed for it, but all of us have had some kind of problem using Eclipse, such as trouble installing a plugin, crashes, competing plugins (such as for Maven), refresh/synchronization problems, inconsistency across platforms. Some advocates of Eclipse said that once you get it working, it's great. And from an ideological and philosophical point of view, it is completely free.

### IntelliJ IDEA

IntelliJ IDEA started off as a purely commercial product but has been available in a free community edition. For some people, the fact that it is not completely free is a minus. On the other hand, since the IntelliJ ecosystem is less sprawling than that of Eclipse, there are fewer headaches when it comes to choice of plugins and getting things to work.

### NetBeans

Some people particularly liked NetBeans. One advantage of it is the tight integration with Java EE 6. Things work out of the box. Also, the UML support is good (in contrast to Eclipse).

### Philosophy

We talked about the question of what our individual preferences was: a system that offered many components to choose from and configure, or a system that works out of the box. Many of us choose depending on the situation; sometimes it's nice to build your own, but sometimes one just wants to get stuff done quickly.

### Practical considerations

There was a fair amount of discussion of practical considerations when choosing an IDE. Sometimes there is no choice, when working with other people or in a particular organization. Also, there was discussion of whether it makes sense for people to use different IDEs when operating on the same code base.

### More than just about code

Time was running out when we started talking about how nice it would be if we could have an IDE link code to design documents.

## Scala

[Josh Suereth](http://jsuereth.com/) was our resident Scala expert, so a lot of questions we asked were answered by him.

### How to get into Scala

One good way to start getting into Scala is to use a Scala testing framework with an existing Java code base.

Another way is to use Scala for new applications.

The question of whether to rewrite old Java applications in Scala depends on whether a whole new architecture is desired. If not, then it may not be worth rewriting in Scala. Perhaps parts of it could be rewritten, or given a Scala wrapper for the sake of interfacing with new Scala code.

### Testing

ScalaCheck was mentioned as being very useful.

I asked about [specs2](http://etorreborre.github.com/specs2/), since I have been trying to figure out how to use it (I currently have used the more traditional [ScalaTest](http://www.scalatest.org/)). I was "happy" to hear from Josh that indeed, there is a learning curve for this framework, so I'm not the only one who finds it difficult.  Scala is designed to make it easy to write DSLs. Unfortunately, learning a DSL can be involved.

We went off on a tangential discussion of DSLs.

### DSLs

The question was whether DSLs really help "non-programmers" in one's organization contribute to development, by enabling them to express their knowledge. Answers were mixed. Some of us had seen DSLs fail miserably at their intent. Josh mentioned cases of DSLs working well, e.g., use of DSLs to help junior developers get going, and use of DSLs for configuration.

### Groovy

There was discussion of Groovy as another JVM-based language for doing some of the same things one can do with Scala, e.g., DSL-based web and testing frameworks.

It was interesting to me, since I have not really used Groovy, that a number of people had tried it and gotten bitten because it is dynamically typed and therefore, many problems occur at runtime when one wishes they would occur at compile time. This experience is in line with my preference for static typing. What attracts me to Scala is that it has type inference that reduces a lot of clutter in code and enables writing code that almost looks like what you would write in a dynamically typed language.

## Retrospective

After the two time slots were over, we gathered together for a brief discussion of the evening. I was pleased that one person said he had been skeptical of the whole Open Spaces idea but had enjoyed the format.

I think all of us had a good time sharing our knowledge and experience, and engaging in friendly debates on various topics. I certainly enjoy Open Spaces meetings more than the usual "sitting at a long presentation" format.
