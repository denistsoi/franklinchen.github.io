---
layout: post
title: "Pittsburgh Python: distribute and other Python community controversies"
date: 2013-02-27T22:12:03-05:00
comments: true
external-url: 
categories: 
- programming
- Pittsburgh
- Python
- Perl
- Ruby
- Java
- Scala
- packaging
- convention
- community
- TOOWTDI
- TIMTOWTDI
- testing
---
I was very interested to attend this month's [Pittsburgh Python User Group](http://www.meetup.com/pghpython/) [meeting](http://www.meetup.com/pghpython/events/95504432/) because Nick Sloan was going to give a talk about packaging with [`distribute`](http://pythonhosted.org/distribute/): packaging in Python has been a *huge source of confusion* to me, both as a user and as a developer.

Since my use of Python at work or for personal purposes has not been very large scale, I have limped along with settling on a clean setup to use for packaging my code. This is in stark contrast to my management of libraries in Perl, Ruby, and Java, where I think there has been more of a consensus in adoption of certain tools and conventions.

Also, Joe Esposito sent around some links to interesting discussions and news in the global Python community, so I looked forward to hearing what everyone thought.

<!--more-->

## The problem with Python packaging

OK, so the big problem I faced when trying to nicely set up packaging for a personal project a while ago was that there are many options. The [paradox of choice](http://en.wikipedia.org/wiki/The_Paradox_of_Choice:_Why_More_Is_Less) is insidious, and it is surprising to me in the Python community, which has generally prided itself on a general consensus on a philosophy of ["There's Only One Way To Do It"](http://wiki.python.org/moin/TOOWTDI), in sharp and deliberate contrast to the Perl community's philosophy of ["There's More Than One Way To Do It"](http://en.wikipedia.org/wiki/There's_more_than_one_way_to_do_it) (TIMTOWTDI).

## Nick Sloan on packaging with [`distribute`](http://pythonhosted.org/distribute/)

Nick summarized the situation of existing packaging systems for Python:

- [`distutils`](http://docs.python.org/2/distutils/) is lacking in features
- [`setuptools`](https://pythonhosted.org/setuptools/index.html) is stagnant
- [`distribute`](http://pythonhosted.org/distribute/) is a fork of `setuptools` and aims to replace it

He then illustrated the basics of packaging with writing `setup.py`, referencing [Kenneth Reitz's recommendations on repository structure](https://medium.com/kr-projects/b8388ba7c1a), based on `distribute`.

### Kenneth Reitz's recommendations on repository structure

The most interesting thing about Kenneth Reitz's recommendations was that he advocated separating out *tests* from the code of a module, to reduce dependencies for the installer and user of the module. I definitely prefer to have a separate directory tree for tests, as is standard by *convention* when I write tests for projects in many other languages. For example:

- Perl: `t/`
- Ruby: `spec/` when using RSpec
- Java: `src/test/` when using JUnit
- Scala: `src/test/` when using Specs2 and ScalaCheck

I don't really like his `tests/context.py` system of imports, as it is too dynamic in chasing down imports, and therefore may not play well by default with standard tools:

``` python
import os
import sys
sys.path.insert(0, os.path.abspath(‘..’))

import sample
```

``` python
from .context import sample
```

That said, I decided to give his recommendations a shot.

### Another twist

Meanwhile, Nick noted that there is also a [`distutils2`](http://pythonhosted.org/Distutils2/) project now, to improve `distutils`, and that nobody is working on `distribute` any more. This sounds like a crazy soap opera in the Python world.

## Python community debates and news

Joe opened up the discussion on Python community news.

### "Start Writing More Classes"?

In the Python community, there has always been some controversy over whether to go all-out object-oriented with classes or write in a more functional style. The language supports both styles, although classes were a fairly late addition to the language.

#### "Stop Writing Classes"?
Last year, at PyCon 2012, there was a talk, "Stop Writing Classes", that made waves:

<iframe width="420" height="315" src="//www.youtube.com/embed/o9pEzgHorH0" frameborder="0" allowfullscreen></iframe>

I thought it was a good talk, because it exposed how many things done with classes are superfluous, creating code bloat and deeply nested hierarchies: often you can just use a functional style with data that is not all wrapped into classes.

#### A rebuttal

Just two weeks ago, someone wrote a post on how [Python programmers should be writing more classes, not less](http://lucumr.pocoo.org/2013/2/13/moar-classes/).

I was not happy about this post because it set up a straw man. Really, he was simply arguing for modular code vs. monolithic code, and observing that some people who don't use classes end up writing monolithic code. He even states as much at the end of his post. So the title of his post is misleading.

### Other news

There were various other smaller topics discussed, but `distribute` and classes dominated this evening.

## (Updates after the meetup)

After I went home, I updated [one of my sample Python projects](https://github.com/FranklinChen/project-euler-python) to adhere to Kenneth Reitz's guidelines.

Also, some weeks later, I noticed an [announcement that `setuptools` and `distribute` were going to merge efforts](http://mail.python.org/pipermail/distutils-sig/2013-March/020126.html). Hooray!
