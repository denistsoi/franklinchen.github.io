---
layout: post
title: "RIP, John McCarthy; but Lisp will never die"
date: 2011-10-25 00:14
comments: true
categories:
- programming
- Lisp 
- Scheme
- ML
- Haskell
- Scala
- C
- Research Science Institute
---
The legendary computer scientist [John McCarthy](http://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist\)) died yesterday. So there goes another guy without whom my life today would be unimaginably different: [Steve Jobs](http://franklinchen.com/blog/2011/10/05/i-cannot-imagine-my-life-without-the-influence-of-steve-jobs/) and [Dennis Ritchie](http://franklinchen.com/blog/2011/10/13/why-dennis-ritchie-is-important/) just left us this month!

In a way, more than Jobs, and more than Ritchie, McCarthy indirectly got me taking seriously the whole field of computing, and actually loving it.

Because I *never for a moment* enjoyed computer programming until I discovered [Lisp](http://en.wikipedia.org/wiki/Lisp_(programming_language\)), the programming language that McCarthy invented and what he will surely be most remembered for most, among his other contributions to computer science.

My story of love and hate in computer programming:

<!--more-->

## I hate programming

I had finished my junior year of high school and was away from home for the first time in my life, attending the [Research Science Institute](http://www.cee.org/programs/rsi)(RSI), a free summer science program. There, I encountered a lot of very smart and already accomplished peers.

A new friend I made at the science program was into artificial intelligence (AI) (a term coined by John McCarthy, in fact), and programming in Lisp and Prolog. He ended up doing his summer project on expert systems. He had the books on [AI](http://www.amazon.com/Artificial-Intelligence-Addison-Wesley-computer-science/dp/0201084546) and [Lisp](http://www.amazon.com/LISP-Patrick-Henry-Winston/dp/0201083728) by Patrick Winston, and he and others raved about a book by [Doug Hofstadter](http://en.wikipedia.org/wiki/Douglas_Hofstadter) called [*Gödel, Escher, Bach*](http://en.wikipedia.org/wiki/Gödel,_Escher,_Bach)(GEB). None of the books made any sense to me at the time, but I made a note to look them up after the summer.

Myself, I had gone to the program with vague ideas of doing something related to physics. I got assigned to work at the United States Geological Survey (USGS) under Allan Tanner. I was profoundly disappointed to find that I was assigned to write FORTRAN or something to control a plotter, because at this point in my life, I *hated* computer programming!! I asked to do something else, and ended up digging holes in the ground to measure radon availability. I didn't feel I accomplished anything really all summer, but was thanked in a paper he wrote later.

Wait, so I was interested in Lisp but hated programming? What was going on?

The science program had apparently thought I was interested in programming because I had just completed an Advanced Placement course in computer science in high school. It was a course based on Pascal. I left the course rather uninterested in programming. We learned about arrays, linked lists, hash tables, trees, searching, sorting, etc., and it was all very dry and abstract. The course was my least favorite of my junior year in high school. Before this course, I had been exposed to BASIC, COBOL, and FORTRAN, and these were even less appealing to me. So I had the picture of computing as drudgery for doing numerical calculations and generating reports.

Lisp seemed different. It didn't even seem like "programming" in the same sense. I saw my peers firing up the Golden Common Lisp REPL on PCs and *interacting* with data, creating lists, using atoms, doing *symbolic* computation easily. At the time, I could not even make the connection between this kind of programming and anything I had learned in my Pascal-based high school course. There, linked lists took a lot to implement, and we learned about `new` and `dispose` and pointers. The effort to learn all this low-level stuff resulted in my never seeing from the course what much higher-level applications could be built on top.

## Again, I still hate programming

Anyway, after I returned home, I started teaching myself Lisp, but didn't get very far because a new interest overrode all others. This despite my also new interest in Lisp and AI, reading GEB and even having Doug Hofstadter autograph my copy of [*Metamagical Themas*](http://en.wikipedia.org/wiki/Metamagical_Themas), which had cute Lisp interludes.

At the science program I had heard peers raving about the [Feynman Lectures on Physics](http://www.feynmanlectures.info/). To make a long story short, after returning home, I read as far as I could before my senior year in high school began, I fell in love with physics, took Advanced Placement physics, and ended up going to college majoring in physics.

Actually, freshman year in college, I considered taking the introductory computer science sequence, since a lot of my new friends (as well as friends I made at the Research Science Institute over a year earlier) did, but although the second semester involved cool-sounding Lisp projects, the first semester involved a language called [C](http://franklinchen.com/blog/2011/10/13/why-dennis-ritchie-is-important/). Taking a quick look at Kernighan and Ritchie's book, and the first homework assignment, I bailed out. The language looked like noise to me. It seemed worse than Pascal, far worse. As a result, I never took a computer science course as an undergraduate in college at all!

## I love programming

My physics journey ended in disaster. By my junior year, I was questioning the viability of my goal, in theoretical high energy physics, of working toward the "theory of everything". String theory was getting popular, but I had no faith in it as a viable research program. I finished out my degree, and continued on to grad school hoping to do something else, but by the time I arrived, I had actually lost all interest in physics already. So I left after a year.

What next?

I needed to learn something else and find a job. I thought back to computer programming, especially since I was very excited about what Macs could do.  A friend of mine who had attended MIT recommended that I pick up [*The Structure and Interpretation of Computer Programs*](http://mitpress.mit.edu/sicp/)(SICP) to really learn programming, before tackling C.  So I did.  This book used Lisp, or more precisely, MIT Scheme, a variant of Lisp. I got a used Mac SE/30, a free Scheme interpreter (Gambit, I think), and worked through the book.

Reading SICP was one of the most profound experiences of my entire life. A full review would require its own article. In any case, it made me love and understand programming, for the first time, really.

I can imagine books similar to SICP using more recent, sophisticated, statically typed languages such as ML, Haskell, or Scala, but the exposition would require more careful design, because Lisp's macros and its "pun" of using S-expression syntax to represent abstract syntax make a lot of things easier.

(I did then go learn C and C++ and find a job. Later discovering ML and Haskell and loving programming even more, and continuing on from there to the present is many more stories.)

## Conclusion

Lisp is a very old language, half a century old, and I happen not to use it much these days (because given a choice, I prefer static types, I prefer syntactic sugar, and I dislike parentheses), but I predict it will survive forever, because the core is so elegant and self-contained.

Thank you, John McCarthy!
