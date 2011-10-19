---
layout: post
title: "Agile Anti-Patterns"
date: 2011-10-14 22:52
comments: true
categories:
- programming
- Agile
- Pittsburgh
---
On Wednesday, I left my regular [meditation session](http://franklinchen.com/blog/2011/09/28/staring-at-the-wall-with-nowhere-to-go/) early, to rush off to a meeting of the relatively new [Pittsburgh Agile meetup group](http://www.meetup.com/PittsburghAgile/). [Andrew Cox](http://andrewcox.org/) gave a very informative talk on [Agile anti-patterns](http://www.meetup.com/PittsburghAgile/events/36899642/).  (He has put up online his [slides with presentation notes](http://files.meetup.com/1792120/agile-antipatterns.pdf).)

Around ten other people attended (a small turnout compared to some past meetings of the group). I have been to two or three of this group's meetups so far, and have found them rather useful, prodding me to reflect on my own software development processes and start to make changes to them.

What I like about this group's meetings is that there is a lot of informal discussion and contribution by a diverse array of people who share stories from their work experiences. Some of the participants are new to [Agile](http://en.wikipedia.org/wiki/Agile_software_development); others have officially adopted it but seek guidance for how to implement it better; others are trying to introduce Agile into an environment that is skeptical of it.

I enjoy learning about [anti-patterns](http://en.wikipedia.org/wiki/Anti-pattern) when getting started in new endeavors because they are a distillation of hard-won experience in how *not* to go about things, and also how to "refactor" back out of a bad practice into a good practice.

Here are just a few of the discussion points that particularly spoke to me, along with my own analogies that I found useful.

<!--more-->

## We tried baseball and it didn't work

This anti-pattern refers to a "parable" from the earlier [XP movement](http://xprogramming.com/articles/jatbaseball/) and simply refers to what can happen when you take a process (such as the game of baseball) and make all kinds of modifications to it (such as reduce the number of players and change the equipment) and then the resulting process doesn't make any sense, and then you blame the whole process.

Applied to Agile, it refers to not understanding how Agile is supposed to work, but radically modifying it in the name of improving it right off the bat. But I think this anti-pattern is relevant to all areas of human endeavor and therefore is an anti-pattern for living!

My first thought was that of course there can never be any consensus on whether one should "trust" in some established process and try it out fully before improvising; there will always be a subjective element to the question of whether one is just following authority blindly. My second thought is that I've learned through experience that it is often worth fully giving something a try, using experts' advice, before automatically assuming that the experts are dummies and don't even need to be listened to at all.

### My example: barefoot or minimalist running

For example, running barefoot or with minimalist shoes has become remarkably popular in recent years. An unfortunate side effect is anecdotes of people who try it out, get badly injured, and then proclaim minimalist running an unhealthy fad. When you look at the causes of the injuries, however, you find that people who have not yet adapted to proper landing technique or strengthened muscles have suddenly gone out and tried to run a couple of miles barefoot or in minimalist shoes. No wonder they limped home with bloody feet or shin splints.

The *wrong* conclusion to draw from those unfortunate incidents is that God intended for us to wear heavy Nike or New Balance shoes for walking and running. The *right* conclusion is that one needs training and adaptation to change from one way of moving to another way of moving. But somehow, it is very human when trying something new and failing to blame what is new instead of blame oneself for perhaps misunderstanding the new.

### The lesson

In the end, there is only one way to find out whether something new and unfamiliar will work for you. *You* have to do the research, take the advice, try it out in good faith, and then see what happens. That is as true for Agile as it is for learning how to play piano, give an effective public presentation, or eat a healthy diet. Your optimal solution might turn out to be very different from someone else's, but you can't know that till you've really tried different ideas, rather than go into something new with the idea of mainly ignoring it and trying to graft your old habits onto it.

## Kitchen sink product

Another anti-pattern is when there's a list of features for a product, and they are all considered to be critical, and development is driven by the feature list.

The Agile way is to be driven not by feature list, but by a [story](http://en.wikipedia.org/wiki/User_story) list. A story represents what a user will actually use to solve some problem. So the goal of Agile prioritization is to create releases that actually enable the user to get real work done. This makes sense to me because if a product just has a lot of disconnected features that don't fit together for common everyday use, then it is not effective. Furthermore, without user feedback on how the product is actually used or will actually be used, there is the risk of creating features that are not very important after all. In fact, in my experience as a software developer, I have often encountered this frustrating situation: a user demands some feature up front, making a big deal of it, but it happens to be difficult to implement, and we implement it, and then it turns out the user doesn't really need it. A better feedback loop, as opposed to up-front feature lists, makes sense.

## Deadlines

The anti-pattern here isn't the existence of deadlines as such (deadlines are a fact of life), but the nature of the deadlines. A typical deadline anti-pattern is "you must have X, Y, and Z by date D". It is framed in terms of some kind of priority of *quantity* rather than *quality*. The opposite of this anti-pattern is a process in which, if you can't have both quantity and quality given the constraints, you focus on quality. In the long haul, a decrease in quality can create even more problems as you have to keep trying to fix bugs and you spend all your time fixing bugs and introducing new ones. And as a result, you miss even more deadlines. How many of us have experienced this vicious cycle?

The alternative is to reduce expectations in a more controlled way. Life is not perfect, so we need to determine what kind of "imperfect" is OK, rather than pretend that we can be perfect.

### Analogy: running a marathon

Let's say you have never run a marathon before, and furthermore, have not done a lot of running. You could decide to preregister for a marathon coming up in one year and set that as your fixed deadline for your rebirth as a runner, and also set a particular goal for a finish time.

I would suggest (having run marathons myself) that this may not be the best strategy for completing a marathon in an enjoyable and sustainable way. You could get sick or injured and not make it to the start line, or get to the finish line in pointless agony. Worse, you could swear off marathons or just plain running, and get nothing out of the experience except being able to say that you learned how to suffer. (I'm not knocking knowing how to suffer; I'm just saying that it is more productive to suffer while achieving your goal rather than suffer while not achieving it.)

There are all kinds of ways to make the whole process of becoming a distance runner more enjoyable and sustainable.

You could decide on the marathon but re-estimate your finish time goal along the way while training, and indeed, even during the event itself, e.g., if after a few miles you're not on pace to achieve your time goal, you had better change your goal, or else you will hit the wall and really slow down even worse.

You could approach the task by splitting it up into incremental goals. If you've never run a 5K before, you could target that as your first "release" of your personal distance running project. And then go to 10K, half marathon. This is what I did myself. I waited years before running my first marathon. (Even then, I screwed it up in a couple of ways!)

What is important, both practically and philosophically, I think, is that it is safest to have a way of knowing that you have achieved something worthwhile and self-contained along the way during your process toward the ultimate goal.

## Customer driven development

The anti-pattern of "customer driven development" involves always listening to your various customers and their requests. This is an anti-pattern because a hodgepodge of requests may not be coherent, and particular requests may be a lot more difficult to implement than is really worthwhile: damaging one's design for one particular feature for one particular customer may adversely impact the usability for everyone else. From a technical and business standpoint, customers' requests must be filtered: respected, but filtered.

Perhaps an extreme opposite of customer driven development, of course, was how Steve Jobs operated in Apple. To this day, I do not use an Apple mouse with my Macs. I have hated Apple mice to this day. I happen to like "normal" three-button mice. He never listened to people like me, and Apple did just fine with its one-button mouse, then the Mighty Mouse, etc. Maybe I wasn't happy, but a lot more people were and are. It is impossible to please everyone, so why even try?

## Other anti-patterns

This blog post is already getting long, so I'll stop here in my discussion of the list of anti-patterns Andrew went through. There were a lot more!

Again, here are Andrew's [slides with notes](http://files.meetup.com/1792120/agile-antipatterns.pdf), although they are not a replacement for the discussions that took place at the meetup. 

## Summary

I happen to believe that anti-patterns in any field reflect deep facts about human imperfection and inspiration and that is why I have tried to relate Agile development anti-patterns to other areas of life.

If you are in the Pittsburgh area, I highly recommend checking out the [Agile meetup group]((http://www.meetup.com/PittsburghAgile/)!
