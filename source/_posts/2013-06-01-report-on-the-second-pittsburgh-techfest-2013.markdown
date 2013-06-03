---
layout: post
title: "Report on the second Pittsburgh TechFest, 2013"
date: 2013-06-01T22:06:17-04:00
comments: true
external-url: 
categories: 
- Pittsburgh TechFest
- programming
- Pittsburgh
- .NET
- Node
- CoffeeScript
- Ruby
- Java
- PHP
- Selenium
- Scala
- UX
- Agile
- iOS
- Android
- actors
- Akka
- asynchronous
---
Last year ([my report here](/blog/2012/06/09/report-on-the-first-pittsburgh-techfest-2012/)), I attended the very first [Pittsburgh Tech Fest](http://pghtechfest.com/), held at [LaRoche College](http://www.laroche.edu/).

## My second year

{% img http://pghtechfest.com/images/pt_logo_2.png Pittsburgh TechFest 2013 %}

I was very excited to attend it again this year, with a twist: I reported last year that I was inspired by seeing people I know giving talks, and two months later, after the very first [Steel City Ruby Conf](http://steelcityruby.org/) [decided to finally start giving talks myself](/blog/2012/08/07/the-first-steel-city-ruby-conference-an-amazing-experience/), starting with user group talks. When the organizers of this year's Pittsburgh TechFest put out a call for presentations four months ago, I knew I wanted to submit some, and so I did. My talk "Stop overusing regular expressions!" was accepted!

This year I had a goal of enjoying the conference even more than I enjoyed last year's, and I succeeded!

<!--more-->

## Speakers' dinner the evening before the conference

All speakers were invited to a speakers' dinner for the evening before the one-day conference, so I eagerly attended, in order to see some old friends as well as meet new people I hadn't met before. That was fun. This was at [Fox and Hound Bar and Grill](http://www.foxandhound.com/) on McKnight Road. I had to fight through considerable rush hour traffic (and also feeling rather ill: more on that later) to get up north out there from the city, but made it. Tortilla chips, veggie trays, baked potatoes, chicken wings: not my usual diet, but those who know me know that I actually love this stuff, ha (thirty pounds ago I ate like that more often)!

The always eerie thing is meeting people in person *finally* that you've mainly "known" from Twitter or email. For example, last year, when I was far more *shy*, I never actually met the founders of the new conference and talked with them. At the speakers' dinner, I finally met Eric Kepes and Dave Hoerster, for example!

Last year, I basically made myself invisible and kind of only hung out a little bit with some people, whom I already knew! [My experience at Steel City Ruby Conf completely altered how I feel I should relate to people, not only in programming conferences but in life](/blog/2012/08/22/steel-city-ruby-conf-review-part-1-its-about-people/). I'm still slowly getting out of my shell that I basically lived in for four decades, but I know I've made some real progress in the past year.

## Breakfast the day of the conference

Unfortunately, because I was in a rush, I did not eat any breakfast before leaving home. Somehow, I had assumed there would be breakfast provided at the conference (in the form of bagels and fruit, something like that). I was wrong. There was just juice, coffee, tea. Luckily, I had an emergency energy bar in my bag, and ate it.

Others I talked to were also confused by the lack of food. Maybe in the future it should be made clear whether there is any food provided at the beginning of the day.

## Keynote

This year, the keynote speech was by [Dick Wall](http://www.linkedin.com/in/dickwall), whom some of you may know from the [Java Posse](http://javaposse.com/) podcast, others from the [Scalawags](http://www.scalawags.tv/) podcast that started half a year ago (Scala fans, you have to watch this: it also features [Daniel Spiewak](http://www.linkedin.com/in/djspiewak) and Pittsburgh's own [Josh Suereth](http://jsuereth.com/).

Dick gave a passionate, personal, entertaining, and thoughtful talk urging all of us to adopt a mindset of taking risks and embracing *failure*, just as he has in his professional life: he has worked at many companies, including Google and small startups, and his own currently, [Escalate](http://www.escalatesoft.com/), which is devoted to Scala training and mentoring.

### Some lessons from Dick

Some of the lessons Dick imparted, while putting up slides of some pretty epic failures (software or otherwise, including mountain biking, which he does):

Do not overplan; be prepared to adapt to the present situation.

If something is not working, don't continue just because you have invested in it already ([sunk cost](http://en.wikipedia.org/wiki/Sunk_costs)).

Do something new and valuable; for example, don't write yet another [CMS](http://en.wikipedia.org/wiki/Content_management_system), because people have already done it.

The worst thing to do is to "waste engineering effort".

Fail *early*, never in production! Example: the [Tacoma Narrows Bridge](http://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge) disaster.

If you fail repeatedly at something, maybe it's time to stop it and move on.

Honest communication is key. Often, late failure happens because someone was afraid to honestly speak up about design flaws, and often this is because there is a culture against such honesty.

Don't focus on [happy path testing](http://en.wikipedia.org/wiki/Happy_path), but on the sad path: think up front about how something can fail, before even coding.

You can't know whether you've succeeded or failed unless you have defined concretely what success means in a given context.

The [software craftsmanship](http://en.wikipedia.org/wiki/Software_craftsmanship) movement, which focuses on quality, is well-meaning but often results in people afraid to try new things (such as learn and use a new language) because they are afraid of writing "bad code" at first. It's OK to start out by writing bad code.

One way of failing early is to push failure to compile time (he briefly gave a plug for Scala's type system as one way to do this).

## Overview of sessions

As with last year, or actually far "worse", there were a huge number of sessions and limited time slots. I counted six major time slots, with an average of nine sessions during each, so anyone who attended a session in a given time slot basically had choose *one out of nine*. This is pretty wild. (Depending on logistics, hopefully next year the conference can move to a two-day format.)

Consistent with my philosophy in the past year of conference attendance, I chose to seek out talks that fulfilled the following criteria:

- topics revolving around philosophy, experience, wisdom rather than technical tutorials
- speakers *not* from Pittsburgh and whom I do *not* already know
- stuff I'm very interested in that benefits particularly from a guided intro versus looking up a tutorial online

## Sessions I attended

### Messaging with RabbitMQ ([Handerson Gomes](http://www.linkedin.com/in/handersongomes))

Actually, I already know Handerson from Pittsburgh meetups. But, as he offered for his session a sequence of lightning talks on RabbitMQ, I thought I would learn something.

Unfortunately, after his first couple of intro talks, I was feeling so sleepy and ill (more on my physical condition at the end of this report) that I had to bail out and take a nap. I napped for about half an hour, much needed before the second session. Then I realized I wasn't just sleepy, but also starving, and found a vending machine and got more food! Meanwhile, I immediately logged into my health care provider's Web site and submitted a request for a doctor's appointment on Monday.

### It's Cool, Nobody Else Knows What They're Doing Either ([Jared Faris](http://www.jaredthenerd.com/))

This was an interesting philosophical discussion about career and personal development, much in the lines of the keynote speech by Dick Wall.

Jared said that to really learn, we have to *challenge* ourselves. We have to go beyond our comfort zone. How far? He suggested that we should take on stuff that we're 80% sure we can do: if we are too ambitious and commit to something we feel only 50% sure of, that is too risky, because then we might just fail without really learning something from the experience.

#### Some lessons from Jared

*Ask for help*. Jared related that in the past, he was too proud to ask for help because there's sometimes an implicit gamesmanship among us software developers: we don't want to look dumber than our friends, and we fear rejection. But he learned that asking for help was effective, because in the long run it means getting better faster, rather than flailing alone. Stop trying to impress people.

The way to stretch yourself is to build a base of what you do know, so that when you go beyond that, you have the tools to move to the next level.

Be "honest but confident". Do not fear the art of self-promotion: if you hold back on speaking up for yourself because you don't know it all, then you'll lose out to someone who does speak up.

### Stop overusing regular expressions! (me)

I could not attend any of the interesting sessions in the third time slot because I was giving a talk.

Here's [my report about my talk](/blog/2013/06/01/pittsburgh-tech-fest-2013-my-talk-stop-overusing-regular-expressions/).

### Lunch

Lunch was of the usual La Roche College cafeteria high quality, nutritious and filling. (And I also ate some cake and pie as well, ha!) This time I socialized more, sitting with some people I knew (but not so well) and people I didn't know. It was great.

I skipped the lunchtime vendor talks. They might have been interesting, but I needed a break from sitting around in talks, and certainly did not feel like taking lunch outside to eat alone while listening to someone talk! There seemed to be a sizable audience for the one outside the cafeteria, however, so I'm happy they found it useful!

### Redesign is not a four letter word ([Adam Kalnas](http://www.linkedin.com/pub/adam-kalnas/4/660/638))

So this was a short (30-minute) talk about redesign. Although Adam works in the .NET world, the lessons he learned and shared with us are not platform-specific. He described how an architecture at [Omnyx](http://www.omnyx.com/) was redesigned successfully. The steps included

- Writing pinning tests for a system that had no automated tests at all.
- Creating an abstract interface for an existing layer.
- Rewriting code to go through the interface API.
- Creating a parallel implementation for the interface.
- Using [feature toggles](http://martinfowler.com/bliki/FeatureToggle.html) to keep both implementations in the code.
- Finally switching off the feature toggle and deleting the old implementation.
- All the while adding more [TDD](http://en.wikipedia.org/wiki/Test-driven_development) tests.

It was a really nice story of how a really gnarly legacy architecture was successfully brought into the world of cleaner interfaces and automated tests.

### Node.js Design Patterns for the Discerning Developer ([Aaron Cois](http://www.linkedin.com/pub/constantine-aaron-cois/6/312/824))

I am fairly new to the [Node.js](http://nodejs.org/) world, having first heard of it two years ago at a [March 2011 meeting of the Pittsburgh jQuery meetup](http://meetups.jquery.com/events/nodejs-with-todd-eichel) in which Todd Eichel introduced Node to the group.

I don't currently actively use Node except, amusingly, as a vehicle for testing non-client JavaScript code for my own purposes.

Aaron basically talked about how to deal with the whole "callback hell" problem when dealing with the asynchronous APIs of Node. There was hairy looking code that he transformed or wrote wrappers for in order to make less hairy, but to my eye it was still hairy. I have forked his [GitHub repository for the talk](https://github.com/cacois/node-patterns-discerning) and hope to go through the code more closely.

### Scaling out with Akka Actors ([Josh Suereth](http://jsuereth.com/))

I'm still not an active [Akka](http://akka.io/) user, although there is something I believe I could use Akka for fruitfully at work, to considerably improve some efficiency (but in practice, nobody is complaining about the speed, so as a practical matter it has been of no priority to scale out the task in question), and also some personal projects.

Josh has been promoting Akka for some time: it was at last year's Pittsburgh TechFest that I got my first real introduction to it. Since then, Josh has given more advanced talks on architectures using Akka, as Akka continues to improve and provide more features.

I learned quite a bit from this talk about scaling out (vs. scaling up): the focus on topology, the adding of new actors whenever you want to handle some transient state or manage other actors. It's really a different way of thinking than "ordinary" programming and is perhaps more faithful to the original concept of "object-oriented" (being focused entirely on being asynchronous and passing immutable messages) than what has been considered object-oriented in the past couple of decades.

For more details, check out his slides and code at his [GitHub repository](https://github.com/jsuereth/intro-to-actors). Note that the code for the clusters talk is on the [`clusters` branch](https://github.com/jsuereth/intro-to-actors/tree/clusters).

I am definitely going to start using Akka this year. I think the time for actors has truly come.

## After

Dave Hoerster gave the closing speech, thanking all the many sponsors who supported the conference. It was definitely really cool how many sponsors there were. He also noted that there may be an attempt to scale up to a two-day event, which would be really cool if it can be made to happen.

There were raffle prizes. Amusingly, the vast number of people randomly chosen had already left the premises (hey, it was a long day), so it took a while to give everything away (although some prizes were marked to be emailed to those who were no longer present).

After the official conclusion of the conference, some people gathered in groups to have dinner together. I wanted to join Josh and Dick, but knew that I was feeling really miserable and had to go home to shower and sleep.

## What next?

I will apply the lessons I learned from all the talks and conversations I participated in.

One thing I've done is forked a bunch of GitHub repositories for talks that people have posted online (and not just talks I went to) that seem like useful places for me to concretely learn and explore further. Ideas are fine, but working code is working code!

## Thanks

I'm really grateful not only to attend this conference, but also speak in it, and learn a lot of things, meet new people (and add their blogs to my RSS feeds as well as follow them on Twitter), and share ideas with everyone. I thank the organizers who put in even more work than last year, because of so many more attendees and speakers! I thank the speakers whose presentations I attended (and those I met whose presentations I would have wanted to attended if not for the time conflicts) for sharing their knowledge and experience. And La Roche College was a good venue (and I noticed that this year there was not the temperature problem of last year, when it was just way too cold in the rooms).

I hope to come to another Pittsburgh TechFest in 2014. Of course, I would submit some talks for it, and come up with helpful topics that are of increasingly more general interest and use.

## Note on being sick

I've been sick for a week with contact dermatitis, which I thought I got from poison ivy, but may have come from somewhere else. I was hoping it would clear up on its own, so that I could avoid taking drugs, but I felt increasingly worse yesterday (the itching was very unpleasant and made sleep very difficult), and then during the conference, got even worse. I went home and immediately fell into a nap from exhaustion. When I woke up, I was feeling really terrible. I clearly needed immediate treatment. Abby had come home and told me she was going t take me to the local [UPMC Urgent Care](http://upmc.com/Services/urgent-care/Pages/default.aspx) center. So we went, and I got a truly painful steroid shot in the hip. It didn't take long before I started feeling better, with relief from itching, so that I could at least sleep.

I decided that Dick Wall's advice of not failing repeatedly applied to me. I have failed late and too many times by not going to a doctor earlier. I have reasons (some really terrible experiences with doctors earlier in my life who really botched things up big time, and also I generally don't like getting shots or drugs), but reason has to kick in. I should have gone to a doctor last week when I started having real problems, or even better, gotten my neck rash checked out three weeks ago when it first appeared. I don't like to admit my stupidity and stubbornness, but this is "honest communication". I am publicly admitting that I made my own life miserable for weeks, as well as Abby's, and also my fellow conference attendees who had to put up with my marred appearance and energy level (when I explained I wasn't feeling well, people admitted to not wanting to ask me what was up with my neck and skin in general). It wasn't reasonable for me to resist seeking immediate medical attention, and in the future, I will not only use this as a specific learning experience (check myself after any bites or rashes, and immediately have all affected clothing items washed), but a more general one about admitting failure early rather than hoping something going bad with my body will just get better.

I have had a habit of pushing myself too hard (really messing up not only my [Pittsburgh Marathon](/blog/2013/04/20/on-overtraining-and-feeling-injured-two-weeks-before-the-pittsburgh-marathon/), but also a [Rachel Carson Trail hike](/blog/2012/06/03/a-totally-exhausting-rachel-carson-trail-challenge-goal-training-hike/) where if I had not been so fatigued, I would have paid more attention to plants brushing against me or the like, and even my 9-mile run last Saturday that proved too taxing given my incomplete recovery from both of those. Pushing too hard is just stupid, and I know it. What's the worst thing: doing something stupid even though you know it; at least if you don't know it, you can be forgiven.

### (Update of 2013-06-02)

The next day, I was feeling much better, but it's clear that full recovery will take a while. I will continue taking steroid pills and applying steroid cream as needed to relieve the itching. I hope that in two weeks I'll be all good again!
