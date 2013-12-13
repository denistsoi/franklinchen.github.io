---
layout: post
title: "Free course review: Software Engineering for Software as a Service (Part I), from Coursera"
date: 2012-04-13 21:29
comments: true
categories:
- programming
- Coursera
- MOOC
- Ruby
- Rails
- software engineering
- software as a service
- Agile
- Perl
- testing
- Cucumber
- Test-Driven Development
- Behavior-Driven Development
- Git
- Heroku
- Play
- Scala
- edX
---
So after putting quite a bit of time, from February 20 to March 23, into the free Coursera course ["Software Engineering for Software as a Service (Part I)"](http://www.saas-class.org/), I just received my "Statement of Accomplishment":

{% blockquote %}
Congratulations! You have successfully completed the free online offering of Software Engineering for Software as a Service (Part I), offered February to April, 2012. To successfully complete this free online class, students were required to watch lectures, complete quizzes, and do weekly assignments.
{% endblockquote %}

My review:

<!--more-->

## MOOC explosion

Just half a year ago, in the fall of 2011, my life was *radically altered* by the introduction of free massive open online courses ([MOOCs](http://en.wikipedia.org/wiki/Massive_open_online_course)). Eager to learn new skills and ideas of all kinds, I jumped into enrolling in a whole bunch of them.

I went crazy, actually: I took a very heavy load, enrolling in and completing two Stanford MOOCs while doing everything else I was doing:

- [Introduction to Databases](/blog/2012/01/11/experiment-in-learning-completing-stanford-online-course-introduction-to-databases/)
- [Machine Learning](/blog/2012/01/12/experiment-in-learning-completing-stanford-online-course-machine-learning/)

These two courses each lasted for two months, starting in early October and ending in mid-December of 2011.

This spring of 2012, I went crazy again and took a very heavy load of two MOOCs, through Coursera:

- Software Engineering for Software as a Service (Part I) (discussed here)
- Model Thinking

## Why did I take this course?

I signed up for this course in February because I was curious about [Ruby on Rails](http://rubyonrails.org/). I have not done much Web development since the old days of Perl, so I decided to update my skills in this area, which is not what I do in my current job. Also, although I have used some Ruby at my job, I felt that the course would help me deepen my understanding of the language.

Also, this course was advertised as not being about Rails so much as about "software engineering" using the concept of "software as a service" as a concrete domain. So I was interested in getting my hands dirty in adopting the instructors' "opinionated" idea of an "Agile" "software engineering" process for development.

## Materials

Lectures on video were provided. I found them useful but fairly poor in production qualities (sound problems and quite a few in-video quiz glitches). I understand that the instructors may improve these materials, for future offerings of the course, after the scramble of getting everything together for the first trial run of this course!

Somewhat controversially, the instructors' [textbook that was still in rough alpha condition](http://beta.saasbook.info/) was recommended for the course. Originally I wasn't going to buy it, but I found references from the course that made it sound like it would be useful, so I bought it. It was rather poorly formatted and repeated a lot that was already in the lecture videos and slides, but did have additional material. The book was inexpensive enough that its flaws did not annoy me excessively. (Eventually the book finally entered beta!)

{% img http://sites.google.com/site/longlastingsoftware/_/rsrc/1366223530547/config/cover.jpg Book cover %}

Confusingly, we were also to watch the [videos for the book](http://screencast.saasbook.info/). Having course material spread out like this was annoying.

We were told that the course was going to cover about half of the book, and that there might be a second online course offered at some point, to finish the book.

## Coursework

There were quizzes. I experienced glitches in dealing with them. For example, in one of the quizzes, the timer ran down because I started it but then had to attend to something (I was at home in the evening then). When I went back, I couldn't retake the quiz, so I got no credit for anything! It was upsetting, but then again, my goal was to learn, not to get a perfect score in this class. Also, sometimes when I got an answer wrong on a quiz, there was no feedback about what I did wrong! This was quite annoying. The quiz system needs to be significantly improved.

The programming assignments were the heart of the course. They sometimes took quite a long time to complete. There were several reasons for this.

One was just that Rails is big, and in learning to actually write and deploy Rails applications, I had to get familiar with the online documentation to search for Rails methods to use. Another was the use of Cucumber. It took forever to run Cucumber tests. From reading various online Rails tutorials and articles about testing, it appeared to me that the course instructors' testing methodology was suspect, but who was I to complain, since I was just learning all this stuff myself?

That leads to the main problem, which is that of spaghetti code: the "Rotten Potatoes" app that we modified incrementally had logic spread out all over the place. It was very difficult for me to understand what happened where, and what could happen or could not. There were code paths that involved implicit changes of state and hacking in routes and actions. It all felt wrong. Also, I strongly favor statically typed languages, and using Ruby was rather painful for me: you pull attributes out from thin air, stick them into the controller, and then suddenly you have to know you can use them in the view, etc.

## What I learned

I learned a huge amount, actually. This was the first time I'd systematically work through developing an application from the ground up using [Test-Driven Development](http://en.wikipedia.org/wiki/Test-driven_development) (TDD) and [Behavior-Driven Development](http://en.wikipedia.org/wiki/Behavior-driven_development), for example. **I am completely sold on TDD and BDD now.** It was very useful writing down, in code, scenarios to expect to happen or not happen, before implementing the behavior. I have issues with Cucumber, the tool, but the process itself, I am sold on.

It was also very satisfying incrementally developing a Rails application that actually did something.

And it was also useful gaining experience using Git and Heroku.

## Conclusion

Despite rough patches in the course (that I hope will be remedied in a future offering), I found that I learned a lot. I would definitely recommend this course to anyone interested in gaining experience incrementally developing an application, and certainly if desiring to get started with Ruby and Rails.

I hope there will be a part two of this course offered, to complete the material from the Berkeley course.

### (Update of 2013-12-13)

It's been almost two years since I took this course, during which I have not done anything with Rails since, although I have started experimenting with using [Play](http://www.playframework.com/) for [Scala](http://www.scala-lang.org/), which is similar in spirit.

Meanwhile, this course has moved off Coursera to the [edX](http://www.edx.org/) MOOC platform. [Part 2 was offered in August 2013](http://www.edx.org/course/uc-berkeleyx/uc-berkeleyx-cs-169-2x-software-service-1005) and a revised version of [part 1 was offered in September 2013](http://www.edx.org/course/uc-berkeleyx/uc-berkeleyx-cs169-1x-software-service-1136): "The presentation order and amount of time spent on some material is being changed in response to feedback from both on-campus and online students. This run of the class also includes all new videos, two new homeworks and all new exam questions. The new class also includes embedded live chat with Teaching Assistants and other students and opportunities for remote pair programming with other students. Group tutorial Q&A sessions will also be held and broadcast live through Google Hangouts and YouTube."

I presume both parts of the course will continue to be offered in the future. I would like to take part 2 at some point, but that depends on what time I can devote to it.
