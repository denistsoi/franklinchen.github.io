---
layout: post
title: "Pittsburgh Python meetup: I gave my first lightning talk ever; the topic was SCons"
disqus_identifier: "http://franklinchen.com/blog/2012/08/23/pittsburgh-python-meetup-i-gave-my-first-lightning-talk-ever-the-topic-was-scons/"
disqus_url: "http://franklinchen.com/blog/2012/08/23/pittsburgh-python-meetup-i-gave-my-first-lightning-talk-ever-the-topic-was-scons/"
date: 2012-08-23T21:53:00
comments: true
categories: 
- Python
- Pittsburgh
- programming
- SCons
- domain-specific languages
---
Yesterday I gave my first [lightning talk](http://en.wikipedia.org/wiki/Lightning_talk) in my life, as far as I can remember.

I spoke for probably around five minutes at the monthly meeting of the [Pittsburgh Python User Group](http://pghpython.org/), which had a [module show-and-tell night](http://www.meetup.com/pghpython/events/72341992/).

I originally had not planned to attend the meeting, since although I have been to meetings of the Python group since January 2011, [I stopped going over a year ago](/blog/2011/10/16/pittsburgh-software-developer-communities/). But I suddenly decided on short notice to volunteer before the meeting to give a little talk on the Python-based tool [SCons](http://www.scons.org/). I did this for a couple of reasons:

- Two weeks ago at Steel City Ruby Conf, [I decided to start giving talks at programming groups](/blog/2012/08/07/the-first-steel-city-ruby-conference-an-amazing-experience/); I committed to giving a talk at the Ruby group, but this week suddenly saw the opportunity to give a low-pressure lightning talk at the Python group.
- I'd mentioned my use of SCons a long time ago at the Python group and I have been feeling obliged to actually promote this excellent tool.

## The module show and tell

It turned out that only four of us had described ahead of time a module to talk about. The first three spoke about `multiprocessing`, `formencode`, and `urllib2`, then I finally stepped up and talked about SCons. After that, it was good to see people spontaneously get up and talk about other Python libraries and software, including `requests`, `numba`, `lxml`, `melopy`, and `logbook`.

### What I tried to do in my talk

I tried to give a concrete example of why I use SCons to manage building various artifacts from source files and directories, analyzing them, and removing outdated material. Essentially, in 2006, I was looking for an alternative to GNU `make` because I wanted the power of a full-blown programming language in order to do builds that require real computation that depend on conditions, SCons. SCons is an embedded [domain specific language](http://en.wikipedia.org/wiki/Domain-specific_language) for construction, in contrast to `make`, which is an external domain specific language (actually, GNU `make` is more than that; it is a perverse Turing-complete language).

Using SCons, I can generate dependencies dynamically by writing Python code (in contrast to the `make` paradigm in which one often writes, using some separate language, a script to generate a `Makefile` to include into the master `Makefile`).

Furthermore, "builders" that do the work of connecting targets with sources can be written in Python; in `make`, builder actions are shell commands, which means that if you have to do something nontrivial, you have to write some program to call from `make`.

It is so much more convenient to do everything with Python and Python libraries rather than to write extra programs to call.

During the talk, I drew some sketches of directory trees and sources and targets on the whiteboard to illustrate what kinds of actions were handled by an SCons script I had written for a specific purpose at work.

For a longer talk, I would have prepared a few slides and added more clarifying detail to my presentation, but I decided to just do this one impromptu.

## My source code

The source code for my example SCons script is available on [GitHub](http://github.com/FranklinChen/update-childes-talkbank/).

Since it was originally written in 2006, it was not developed the way I would do it today (for example, it is a single monolithic script, does not have proper user-level documentation, has hard-coded strings, and was not designed in a test-driven way), but it works. If new requirements cause me to need to change the code, I will definitely refactor first.

Part of me had wanted to refactor before public release, but I decided that perfectionism had held me back too long from sharing, so I was just going to put the code as it is.

## Conclusion

I have very little experience giving talks at all. The few "long" talks I've given over the years have been a nerve-wracking experience in which I did badly. I have a long-term goal of actually being a decent public speaker, so that I can share my knowledge more effectively with the world. It will take study, practice, self-assessment, and experience. I've delayed progress on this goal for too long, and am happy to start putting myself out there, starting small in lower-stakes situations and building up from there.
