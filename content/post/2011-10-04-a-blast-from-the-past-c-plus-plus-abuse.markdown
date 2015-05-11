---
layout: post
title: "A Blast From the Past: C++ Abuse"
date: 2011-10-04T21:23:00
url: "blog/2011/10/04/a-blast-from-the-past-c-plus-plus-abuse/"
comments: true
categories:
- programming
- C++
- C
---
Lately I've been seeing a lot of mention of the online book ["Learn C the Hard Way"](http://c.learncodethehardway.org/), and how it quickly introduces and uses [Valgrind](http://valgrind.org/). That brought back memories of the 1990s when I programmed in C, and then C++, and [`SIGSEGV`](http://en.wikipedia.org/wiki/SIGSEGV) and `core` were part of my daily life, as well as [`dbx`](http://en.wikipedia.org/wiki/Dbx_\(debugger\)) and [`gdb`](http://www.gnu.org/s/gdb/).

My most important tool, however, was Purify of [Pure Software](http://en.wikipedia.org/wiki/Pure_Software). We were such good customers of Pure Software, using also Quantify, Pure Link, and Pure Coverage, that we got sent mugs, of which I still have one and drink water from daily!

{{< figure src="/images/pure-software-mug.jpg" title="Pure Software mug" >}}

In the spirit of reminiscence about C and C++ programming, I hereby share my first code excerpt of this blog.

<!--more-->

{{% gist 1263372 %}}

I wrote up with this monstrosity (in less obfuscated form, admittedly) while learning C++ coming from a background of C (in conjunction with assembly language) and inspecting the output of `Cfront`(http://en.wikipedia.org/wiki/Cfront)-based compilers we used (especially when the compilers failed with internal fatal errors or generated incorrect code, which sometimes happened).

If you are a seasoned C++ programmer, you can determine what this code does and why. Also, if you are a truly passionate C++ programmer, you may have wisdom about on which platforms this code actually works, and on which platforms it does not, etc. I welcome all clarifications and refutations!

If this code doesn't make any sense to you, no matter: we are living in the age of Java, Python, Perl, Ruby, JavaScript, Clojure, Haskell, OCaml, Erlang, PHP, C#, and a hundred other languages in which you never have to deal with this kind of code.

I have to admit, though, that there was something cool about knowing how to do this kind of tinkering, just as it was useful to me once to know how to mess around with bit fields, little-endian versus big-endian, etc. Surely, if the world collapsed, [Duff's device](http://en.wikipedia.org/wiki/Duff's_device) would still be a thing of beauty.

## Postscript

According to the book's [section on Valgrind](http://c.learncodethehardway.org/book/learn-c-the-hard-waych5.html#x10-290005]), "As of Sep 4, 2011 there's this bug in Valgrind on OSX Lion. It might take a little while for them to fix it, so be patient."

So, if I were a beginner to C and wanted to work through this book, and used Mac OS, I would be stuck now! That reminds me of what life was like on a daily basis back in the day when I had to develop applications that were to run on ULTRIX, SunOS, Solaris, HP-UX, AIX, and VMS. Something somewhere was always broken at any given time and needed a workaround!
