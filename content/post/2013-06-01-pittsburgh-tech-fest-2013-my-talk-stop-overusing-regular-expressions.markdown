---
layout: post
title: "Pittsburgh Tech Fest 2013: my talk \"Stop Overusing Regular Expressions!\""
date: 2013-06-01T23:48:22-04:00
comments: true
external-url: 
categories: 
- Pittsburgh TechFest
- programming
- Scala
- regular expressions
- parser combinators
- Ruby
- JavaScript
- Python
---
At Pittsburgh TechFest 2013 ([full report here](/blog/2013/06/01/report-on-the-second-pittsburgh-techfest-2013/)), I gave a talk for a one-hour time slot before lunch.

This was [my first talk at a conference in three years](/blog/2013/01/18/how-justice-clarence-thomas-uncovered-a-seven-year-old-bug-in-my-computer-program/), and only my second at a conference in my life! I feel that I have much improved as a presenter since then.

Here's how it went.

<!--more-->

## Presentation

My presentation was "Stop overusing regular expressions!"

Here is my abstract as submitted to Pittsburgh TechFest:
<blockquote>
Regular expressions are very commonly used to process and validate text data. Unfortunately, they suffer from various limitations. I will discuss the limitations and illustrate how using grammars instead can be an improvement. I will make the examples concrete using parsing libraries in a couple of representative languages, although the ideas are language-independent. (I'll try to squeeze in, say, Ruby, Python, JavaScript, Scala.)

I will emphasize ease of use, since one reason for the overuse of regular expressions is that they are so easy to pull out of one's toolbox.
</blockquote>

### Revised

Just on Wednesday, [I had given a version of this talk at the Pittsburgh Scala meetup](/blog/2013/05/29/pittsburgh-scala-meetup-my-talk-stop-overusing-regular-expressions/), but revised it considerably based on feedback and my own impressions.

### Slides and code

The material for the talk *as given* is at [this tag of my GitHub repository](https://github.com/franklinchen/talk-on-overusing-regular-expressions/tree/pitt-tech-fest-talk).

My [master branch of the GitHub repository](https://github.com/franklinchen/talk-on-overusing-regular-expressions) will always have my latest revisions. I expect continue to add more code in different languages, for example.

<iframe src="http://www.slideshare.net/slideshow/embed_code/22302440" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="http://www.slideshare.net/FranklinChen/handout-22302440" title="Stop overusing regular expressions!" target="_blank">Stop overusing regular expressions!</a> </strong> from <strong><a href="http://www.slideshare.net/FranklinChen" target="_blank">Franklin Chen</a></strong> </div>

## After

I tried to minimize discussion of the final Scala code slide, which in one page creates a full parser for "toy JSON" into a tree of Scala objects, because I intended mainly to give this as proof of concept, not to get into explaining the funny operator overloading that makes the parser so concise, but this seemed to be an issue anyway. I now lean toward thinking that in the future, I need to create a parallel slide that replaces the operators with standard method names instead.

Why did I use Scala for example code anyway? A major reason is that it is indeed very concise, and yet fully statically typed. I could fit all each of my Scala code examples on a single slide. I did that with Ruby also, up to a point. Writing the classes in Ruby (or Python, Java, etc.) would have taken pages of boilerplate, as opposed to using Scala's case classes. (Of course I wasn't going to use ML or Haskell at all in the talk for this audience.)

I was surprised to learn how quickly I had finished my presentation (around 45 minutes), given that I had actually added many slides after my Pittsburgh Scala version (which had lasted around the same time). I think it could have been because of the following:

- Having practiced the talk once, I was more fluent and stumbled less, and explained some things better.
- My additional transitional and motivational slides were clarifying, and reduced confusion that I had to address in my earlier version.
- I still get the impression that when I speak, I get overexcited and talk too quickly!

### Attendance

Turnout was small, around eight people, but enthusiastic. Half the people I already knew, but the other half were new to me.

I have some hypotheses about why attendance was relatively low (I think most of the talks I went to had 20-40 people):

- Several people actually told me they would have attended my talk, but they too were giving talks or there were others that just happened to have higher priority.
- The topic is more specialized and yet abstract than others: conceptual rather than devoted to "how to use library X in language Y" or "how to improve your career.
- I have no name recognition outside of Pittsburgh, and I submitted a completely non-self-promotional, vague bio; I will definitely fix this in all future talk submissions anywhere.

## Thanks

Thanks to everyone who came to the talk and asked questions and got discussion going! I appreciate having had the opportunity to share my experiences and recommendations at a conference.

Ha, I was happy that Josh was able to come to my talk, since he missed the Pittsburgh Scala meetup on Wednesday!
