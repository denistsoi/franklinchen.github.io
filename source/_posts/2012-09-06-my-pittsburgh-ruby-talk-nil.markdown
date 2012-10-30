---
layout: post
title: "My Pittsburgh Ruby talk: \"nil: historical, theoretical, comparative, philosophical, and practical perspectives\""
date: 2012-09-06 23:07
comments: true
external-url: 
categories: 
- programming
- Pittsburgh
- Ruby
---
{% img /images/franklin-ruby-nil.jpg Franklin speaking at Pittsburgh Ruby on nil %}

[As promised](/blog/2012/08/07/the-first-steel-city-ruby-conference-an-amazing-experience/), I finally [gave a talk](http://www.meetup.com/pittsburgh-ruby/events/79619402/) at our local [Pittsburgh Ruby group](http://pghrb.heroku.com/)!

Here's a brief report (along with links to a video and slides).

<!--more-->

## A video and slides

<iframe src="http://player.vimeo.com/video/49474228?badge=0" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p><a href="http://vimeo.com/49474228">Franklin Chen - nil</a> from <a href="http://vimeo.com/user11358803">Corey Purcell</a> on <a href="http://vimeo.com">Vimeo</a>.</p>

Slides are [here](http://franklinchen.com/talk-on-nil/).

## My preparation

Preparing for this talk was quite challenging for me.

### Time

First of all, I couldn't work on the talk right after Steel City Ruby Conf ended, because I almost immediately disappeared, for almost two weeks, for a trip to New Mexico with Abby for a friend's wedding and our own little vacation tacked onto it.

And I came back to face a whole of projects to pick back up on after the long absence, including stuff at work, [running in a mile race for the first time](/blog/2012/08/17/the-inaugural-liberty-mile-a-review-of-pittsburghs-first-road-mile-race/), continuing to [play French traditional dance music](/blog/2012/08/27/my-second-french-music-jam-playing-my-irish-flute-in-public-for-the-first-time/), and [returning to playing tournament chess after almost two years](/blog/2012/09/04/round-1-of-the-pittsburgh-chess-club-tournament-the-greek-gift-sacrifice/).

### Technical material

Word of my talk was spread fairly wide because it was going to happen during the first meeting of the Pittsburgh Ruby group after Steel City Ruby Conf and because various friends of mine were interested in finally seeing me give a talk and I'd given it a provocative title. Over twenty people were signed up on the [Meetup page](http://www.meetup.com/pittsburgh-ruby/events/79619402/) in no time at all.

I faced the obvious question of what material to include, given that the scope of the topic is vast (any Web search for the topic of the use of `nil` or `null` quickly brings up no shortage of blog posts and rants about it).

Also, given that I expected quite a diverse audience, I had to think about what might be possible to convey clearly in no more than an hour of time.

I wanted to focus on conveying that there *really* is a problem, that it is *not* a matter of debate that it exists. I also wanted to explain the problem in terms of *types*, so I felt I had to give a quick overview of *static type systems*, because I believed that most of the audience had never seen or used one in a modern form.

I used the contrasting examples of [John McCarthy](/blog/2011/10/25/rip-john-mccarthy-but-lisp-will-never-die/) and [Tony Hoare](http://en.wikipedia.org/wiki/Tony_Hoare) in order to illustrate that the *problem* exists whether you are coming from the *dynamically typed* world (as McCarthy was) or the *statically typed* world (as Hoare was). I thought it was particularly important to point out that most mainstream "statically typed" languages exhibit the `null` problem because people like Hoare took a shortcut and put a hole into languages such as C and Java.

I also wanted to frame the issues along some philosophical axes, in terms of who is responsible for what and how, when something goes wrong in code. If we want principled solutions, we have to understand what is at stake, other than hacking something to maybe sometimes work.

Since I expected to spend most of the time really explaining the problem, I did not spend much time on solutions. I explained the static typing [`Maybe` (or `Option`) solution](http://en.wikipedia.org/wiki/Option_type), but left it open-ended what the best solution is when it comes to dynamically typed languages such as Ruby; I suggested that the [Null Object pattern](http://en.wikipedia.org/wiki/Null_Object_pattern) or the [Special Case pattern](http://martinfowler.com/eaaCatalog/specialCase.html) may be usable, but there are issues when trying to object-orientify in the face of [multiple dispatch](http://en.wikipedia.org/wiki/Multiple_dispatch).

### Presentation skills

Having very little experience in giving presentations (and knowing that I have done quite poorly in the past), I spent a good amount of time reading various books and blog posts of advice on presenting. I found them very useful and will continue to study them and apply their insights. At some point I'll write up a compilation of what I have found useful. I am absolutely committed to a lifetime pursuit of improving my presentation skills, because if I can't explain my ideas clearly and convincingly to people, then who else can do it for me? It's my responsibility if I want to have a real impact on the world.

I also jumped at the opportunity to give an [impromptu lightning talk at the Pittsburgh Python group meeting](/blog/2012/08/23/pittsburgh-python-meetup-i-gave-my-first-lightning-talk-ever-the-topic-was-scons/), as practice in facing people and speaking.

### Presentation software

I had some struggles as I decided was presentation software to use in order to prepare slides. I didn't want to use a proprietary format, and I wanted to be able to easily include nicely formatted code fragments. I found no perfect solution, but ended up using the [landslide](http://github.com/adamzap/landslide) tool implemented in Python to generate an HTML slide show.

## The presentation

I arrived in something of a manic mood. I was quite nervous, but I treated the situation in exactly the same way as I've been learning from having started to perform music in the past year. The presentation is not about *me*. It's about trying to offer something valuable to everyone who is taking the time to be there to see it: hopefully something entertaining, intriguing, and practically useful.

I finished up earlier than I expected, in less than hour. (I took that as a sign that I had gone too fast, unfortunately.)

## Reflections

I am very grateful to have been given the opportunity to speak at the Pittsburgh Ruby group meeting. A lot of people spread the word around and we had something like twenty-five people show up! That was a great turnout. And it was an alert, friendly, supportive group of people.

I appreciated that some individuals came up to me and said they liked the talk. Also, I think that my considerable work into trying to be meaningfully entertaining (with my opening anecdotes involving McCarthy and Hoare) seemed a success.

In the end, I believe I had too much material. This is obviously a typical problem in many presentations, especially where one wants to make sure that everyone gets to the same page through a "review" of concepts (which unfortunately will be brand new to some people). I don't know how to solve this problem. Maybe a suggested reading list, targeted tutorial, or questionnaire before the talk? Or splitting into multiple installments? I will continue to grapple with this question of how to completely reach a sufficient number of people in an audience.

I felt this experience was a little breakthrough for me, as a first step in giving a full-length presentation and beginning to experience the "other side" of presentations (since I have attended so many as a listener). It feels like when I moved over from dancing to the other side, playing music for dancers.

## Supporting Web site

I have a [supporting Web site for the talk](http://github.com/franklinchen/talk-on-nil) whose purpose is to be a place for me to add references and code as I continue monitoring this topic online.

## Conclusion

I put a lot of work into the presentation I gave at Pittsburgh Ruby, and was pretty happy about how it turned out. Of course, I'm raising the bar for the future. I plan to continue giving presentations when I feel I have something real to share and contribute, not only at Pittsburgh Ruby, but for other groups and occasions also.