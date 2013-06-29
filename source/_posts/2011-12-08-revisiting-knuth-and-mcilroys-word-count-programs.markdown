---
layout: post
title: "Revisiting Knuth and McIlroy's word count programs"
date: 2011-12-08 21:46
comments: true
categories:
- programming
- literate programming
- Unix
- Donald Knuth
- Doug McIlroy
- Haskell
- functional programming
- C
- C++
- Awk
- Perl
---
Today I came across a [blog post](http://www.leancrew.com/all-this/2011/12/more-shell-less-egg/) revisiting [Jon Bentley](http://en.wikipedia.org/wiki/Jon_Bentley)'s challenge in 1986 to [Donald Knuth](http://www-cs-staff.stanford.edu/~uno/) to write a [literate program](http://en.wikipedia.org/wiki/Literate_programming) to solve a sample task and have [Doug McIlroy](http://www.cs.dartmouth.edu/~doug/) critique it.

The task:

{% blockquote %}
Read a file of text, determine the n most frequently used words, and print out a sorted list of those words along with their frequencies.
{% endblockquote %}

Knuth came up with a typically clever, lengthy, low-level implementation (unfortunately, I could not find the source code online, although I remember reading it years ago; I would be delighted if someone knows where it is and can tell me). McIlroy then somewhat perversely wrote a six-line shell script that did the job, basically changing the subject away from literate programming and toward a [critique of Knuth's doing something low-level and complicated when unnecessary](http://www.princeton.edu/~hos/mike/transcripts/mcilroy.htm).

I decided to bring the discussion here a quarter of a century (25 years!) to the present. How would we solve the problem now?

## (Update of 2013-06-29)

I have changed my mind about many things I said here, and also have more clarifications and new arguments to make, which I will eventually post on my new programming blog, [The Conscientious Programmer](http://ConscientiousProgrammer.com/).

<!--more-->

## Salient points of McIlroy's solution

First, let's look at McIlroy's solution, which despite the passing of time is still a beautifully elegant illustration of why [Unix is timeless](/blog/2011/10/13/why-dennis-ritchie-is-important/). (By the way, [Knuth is a C and Linux user to this day](http://www.informit.com/articles/article.aspx?p=1193856)).

{% codeblock McIlroy's shell script lang:bash %}
tr -cs A-Za-z '\n' |
tr A-Z a-z |
sort |
uniq -c |
sort -rn |
sed ${1}q
{% endcodeblock %}

The code is self-explanatory if you are familiar with basic Unix command-line tools. The pipeline just transforms data starting from standard input until the desired result is computed.

What is beautiful about the code is that it decomposes the solution to intuitively and does not require any mutable state. McIlroy's program is a [purely functional](http://en.wikipedia.org/wiki/Purely_functional) program.

## Using a general-purpose programming language instead

I thought to myself, how would I write the program today? Especially if I thought I would need to modify it, add new features? The shell script does the job for the problem as stated, but would clearly be hard to extend. Indeed, historically, "scripting languages" such as [Awk](http://en.wikipedia.org/wiki/AWK) were invented in order to do more than simple shell scripts were suitable for, and [Perl](http://www.perl.org/) was Larry Wall's response to Awk, to create a truly general-purpose language.

Nowadays, in 2011, languages and libraries are at a sufficiently high level that a program almost as concise as McIlroy's could be written in Perl, Ruby, Python, or even the latest versions of Java, C#, etc. I'll leave that as an exercise for you (feel free to post your solutions as comments below).

### Haskell

I present a simple program in [Haskell](http://www.haskell.org/) that I feel is closest to McIlroy's both in spirit and in letter.

Here is my Haskell program, in two variants. The first is a standard source code file, while the second uses Haskell's built-in support for its own notion of "literate programming".

{% gist 1448622 %}

I used [GHC](http://www.haskell.org/ghc/) to compile and run the program.  Sample output:

``` console
$ ghc -O6 --make WordCount
$ ./WordCount 10 < WordCount.lhs 
35 the
16 a
11 list
10 of
9 text
9 for
8 n
8 map
8 count
7 string
```

Apart from missing leading spaces, this is the same output as from McIlroy's shell script.

The literate program above explains each step of the Haskell "pipeline" I constructed.

## Why I don't do literate programming

I don't currently use "literate programming" systems.

I experimented with programming in C and C++ and [Standard ML](http://en.wikipedia.org/wiki/Standard_ML) using [noweb](http://www.cs.tufts.edu/~nr/noweb/) over a decade ago, but found that for myself, it was not really beneficial.

There was little benefit in being able to rearrange code fragments at will. Furthermore, spreading code out interspersed with a lot of prose made it harder for me to actually [chunk](http://en.wikipedia.org/wiki/Chunking_(psychology\)) meaning out of a spatial portion of text in my editor window.

Also, modern languages and programming styles make it much easier to express things concisely and less monolithically, such that I find that using ordinary comments suffices for my needs.

I find that literate programming in the Knuth style amounts to a macro system that distorts the layout of code.

Finally, literate programming interacts badly with editors and IDEs that are built specifically to operate on pure source code.

What do you think? Which of the variants of the same Haskell code above would you prefer to write, read, or maintain? The non-literate one or the literate one? 

## An alternative to literate programming

I should note that in practice, I would write suitable comments in a non-literate program primarily before the function definition. Also, I would not use such a large pipeline of expressions either: I would break out almost every line of the pipeline into its own little function, with its own comment. That is how I would actually write a nontrivial Haskell program, writing one or two line functions and testing each of them, before trying to hook them all up into a big pipeline.

I "cheated" in this case because McIlroy's program already existed, so I simply translated it into a Haskell equivalent without real thought and testing.

## Comparison between the shell script and the Haskell program

The shell script operates on raw text and everything is just strings being parsed and reparsed by the respective Unix utility programs.

The Haskell program is *statically typed*. It is type-checked by the compiler, which generates native code. The program uses standard libraries and data types, such as lists and hash maps.

Also, the Haskell program could be refined, extended, optimized in various ways. The most important optimizations I can think of off the top of my head:

- Using a better representation of strings than the default built-in "string as list of characters". Easily accessible advice can be found on [Stack Overflow](http://stackoverflow.com/questions/576213/efficient-string-implementation-in-haskell) and browsing through Haskell library documentation, such as for the [text](http://hackage.haskell.org/cgi-bin/hackage-scripts/package/text) package.
- Loop fusion, [deforestation](http://en.wikipedia.org/wiki/Deforestation_(computer_science\)) can be applied to deal with the *apparent* allocation of lots of new lists in the pipeline. One of the selling points of using a language like Haskell is the opportunity for the compiler to perform radical optimizations that are impossible for languages that have side effects.

I don't write many `bash` scripts these days. General-purpose programming languages can do a decent job munging data without difficulty. The situation was different decades ago when there was C, and few standard high-level libraries for the C world.

## Conclusion

- I am skeptical of literate programming.
- McIlroy was ahead of his time, but that time has passed; we should take his contributions as inspiration to move further forward already, using advanced general-purpose programming languages.
