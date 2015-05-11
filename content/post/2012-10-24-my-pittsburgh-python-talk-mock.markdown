---
layout: post
title: "My Pittsburgh Python talk: \"Testing with isolation: concepts and examples using the Python standard library `mock`\""
date: 2012-10-24T23:58:00
disqus_identifier: "http://franklinchen.com/blog/2012/10/24/my-pittsburgh-python-talk-mock/"
disqus_url: "http://franklinchen.com/blog/2012/10/24/my-pittsburgh-python-talk-mock/"
url: "blog/2012/10/24/my-pittsburgh-python-talk-mock/"
comments: true
external-url: 
categories: 
- programming
- testing
- Pittsburgh
- Python
---
{{< figure src="http://benbiddington.files.wordpress.com/2009/09/mocks-and-stubs.png" title="Mocks" >}}

A week ago, I saw a message on the [Pittsburgh Python](http://www.meetup.com/pghpython/) mailing list:

<blockquote>
We are looking for a presenter to talk about mock, pymox or other Python testing topics for our next meeting. If you have a different topic that you would like to present on, please let us know about that too, though preference will be given to testing-related talks this month.
</blockquote>

I fairly quickly volunteered to talk about the Python standard library [`mock`](http://www.voidspace.org.uk/python/mock/), despite never having used it!

Here's a brief report of the Pittsburgh Python meeting in Google Pittsburgh (along with links to slides).

<!--more-->

## Slides

Slides are [here](http://franklinchen.com/talk-on-python-mock/).

## Why did I volunteer?

When I volunteered to give my last talk, a [talk at Pittsburgh Ruby](/blog/2012/09/06/my-pittsburgh-ruby-talk-nil/), the reason was that I had a specific topic of my choosing on which I already had an informed opinion, and my goal was to explain it.

In stark contrast to that situation, I volunteered to give a talk on testing with `mock` in Python while not having ever used it, and in fact not ever having used [mock objects](http://en.wikipedia.org/wiki/Mock_object) at all in my own [unit testing](http://en.wikipedia.org/wiki/Unit_testing), although I knew the basic concepts behind mocks.

So I was volunteering in this case in order to *force myself to learn something in more depth*.

## My preparation

Preparing for this talk was quite challenging for me. (Hmm, I have a feeling I'll always feel this way for the rest of my talks in my life!?)

### Time

Deciding to suddenly prepare a talk threw a mini-bomb into my schedule for the following week, because I had many other things to work on. However, I thought it was a great opportunity to investigate something in depth that I had already wanted to for some time, so I put some other things aside. Sometimes one has to be flexible in the face of a good opportunity. *I care a huge deal about the topic of software testing*, so I felt I could not pass up the opportunity to share some ideas with an audience.

### Technical material

A huge number of people (over forty) quickly signed up to attend the Pittsburgh Python meeting, during which two talks were scheduled: one on [Selenium WebDriver](http://code.google.com/p/selenium/) by Steve Gross, and one by me. Wow. I don't know what's causing this explosion in the size of the Pittsburgh Python community, but that's great!

I made a very quick decision *not* to focus on all the features of the `mock` library. That's not a talk that I would myself go to. I put myself in the shoes of the forty participants. Obviously there was going to be a wide variety of background knowledge and experience about *testing* in general as well as about *mocks*.

In fact, Abby was going to come along with me to attend the Pittsburgh Python meeting. She just started learning computer programming a couple of weeks ago, using Python as her first programming language, and [Coursera](http://coursera.org/) as the primary vehicle of instruction. I hoped to give a talk that she would get something usefully high-level and conceptual out of.

I figured on speaking for no more than half an hour.

So I wanted to focus on a clean, correct review (or introduction, as the case was surely going to be for some of the participants) of *unit testing*. I deliberately took a [*test-driven development* (TDD)](http://en.wikipedia.org/wiki/Test-driven_development) perspective as I designed some easy-to-understand examples of the entire process of writing a test, making it fail, then writing the implementation, then running the test again, etc. I felt that TDD was the ideal way to discuss the notion of testing with *isolation*, because if collaborating code for a system under test (SUT) does not yet exist at all, it becomes quite clear where the possible isolation boundaries are.

I also wanted to use this example as a running example in order to introduce and explore questions of [*stubbing*](http://en.wikipedia.org/wiki/Method_stub), or more generally, [*test doubles*](http://en.wikipedia.org/wiki/Test_double). In particular, I brought up the ongoing controversy over the use of mocks in testing at all, framed around the pretty fair [analysis by Martin Fowler](http://martinfowler.com/articles/mocksArentStubs.html). In order to be able to explain the controversy, I developed my running example to show a way of refactoring code in order to test *without* mocking, as well as showing how one could do it *with* mocking. And so I only explained enough features of Python `mock` to enable illustrating the issues. I gave some examples of pros and cons to using mocks.

Of course, I had to read a bunch of articles and book excerpts, and writing running code, as part of my own process of learning and understanding the controversy; these were resources I had bookmarked a year ago when I had first heard about it. Hooray for *talk-driven learning*!

Since I was not going to have time, I deliberately had no plan to discuss what I think is quite interesting, which is the *philosophy* that drives a strictly mock-driven approach to testing. This philosophy involves rigorously taking the outside-in approach as a matter of *design*. I have to confess that I do not currently take this extreme approach, but it intrigues me, and now that I know better what the techniques and controversies are, I may give it a try in new projects in order to see how well it works.

### Presentation skills

I felt more relaxed when giving this talk than I did in my previous one (for Pittsburgh Ruby). Just this sheer fact probably helped some.

### Presentation software

I continue to use [landslide](http://github.com/adamzap/landslide) to generate an HTML slide show.

## The presentation

Steve Gross gave a little demo of Selenium WebDriver first, and took questions, before I gave my half-hour talk.

I tried to ask useful questions of the audience and answer people's questions during the talk. This is a kind of skill that has to come from experience, because one can't anticipate everything ahead of time, and one has to gauge where people's minds might be. I know that when I'm at someone's talk, and I'm confused or lost or bored, I appreciate when the speaker can tell, and can adjust accordingly. This is clearly key. With forty people around, however, man, it's hard.

## Reflections

I enjoyed speaking at the Pittsburgh Python group meeting, just my second time since [my first lightning talk for the group](/blog/2012/08/23/pittsburgh-python-meetup-i-gave-my-first-lightning-talk-ever-the-topic-was-scons/) during which I didn't even have any slides prepared, but just drew some pictures on the whiteboard and scrolled through some code in an Emacs buffer.

## Supporting Web site

I have a [supporting Web site for the talk](http://github.com/franklinchen/talk-on-python-mock) with code.

## Conclusion

I put a lot of work into the presentation I gave at Pittsburgh Python, and am grateful to Nick Sloan for bringing up the theme and calling for volunteers. I like the idea of a "theme" for a meeting, such as the theme of "testing" that was our theme this last time.

And I have to thank Abby for supporting me as my week got frantic as a result of suddenly volunteering to give my talk, and for attending a talk by me for the first time ever!


