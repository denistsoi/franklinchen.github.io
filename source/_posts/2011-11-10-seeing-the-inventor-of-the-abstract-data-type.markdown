---
layout: post
title: "Seeing the inventor of the abstract data type"
date: 2011-11-10 18:54
comments: true
categories:
- Carnegie Mellon University
- programming
- Barbara Liskov
- abstract data type
- CLU
- Java
- Lisp
---
{% img /images/liskov/power-of-abstraction.jpg Barbara Liskov accepting Katayanagi Prize at CMU %}

[Today at CMU](http://events.web.cmu.edu/ecal/event/131972213534041859), I finally had the opportunity to see a living legend, [Barbara Liskov](http://en.wikipedia.org/wiki/Barbara_Liskov), computer science professor at MIT and winner of the [Turing Award](http://en.wikipedia.org/wiki/Turing_Award) in 2008. She won it largely for her invention of the [abstract data type](http://en.wikipedia.org/wiki/Abstract_data_type), a concept that is so foundational in modern software development that a programmer ignorant of history is likely to react, "What, she got a Turing Award for something so obvious?"

But that's the beauty of computer science: it is such a young field that many of the ideas we take for granted now were *not* so obvious decades ago, and had to be discovered and codified and explained.

I had to leave Liskov's talk right after she was done (it had already run over time), so I missed the question-and-answer session, unfortunately. I had been considering asking some questions, but since I lost that opportunity, I will pose them here instead.

<!--more-->

## The invention of the abstract data type

Basically, Liskov formalized the notion of the abstract data type (ADT) while at MIT in the early 1970s, and with some graduate students implemented ADTs as a fundamental construct in an actual programming language, [CLU](http://en.wikipedia.org/wiki/CLU_(programming_language\)).

Most of you probably haven't heard of CLU, unless you went to [MIT](http://www.pmg.csail.mit.edu/CLU.html) where it's been used for ages in courses. I only know about CLU because a long time ago, I had an MIT friend who mentioned CLU when I was asking him [what to learn to become a programmer](/blog/2011/10/25/rip-john-mccarthy-but-lisp-will-never-die/). I never actually wrote or ran a program in CLU, although I did take a look at the language. Some features of CLU (recall that it was developed in the early 1970s):

- modules (called "clusters")
- information hiding
- static typing, including what are now called generics
- iterators (what we now usually call [generators](http://en.wikipedia.org/wiki/Generator_%28computer_science%29))
- exception handling
- garbage collection

Think about it. Java, developed *two decades* after CLU, didn't even have generics. And it does not have true iterators.

### A tangent on technology adoption

If you are in industry, a lesson to take away is that there is probably computer science research in academia *right now* that is useful but you won't be using for twenty or thirty years.

If you are in academia, you might want to consider helping get good technology out the door before industry wastes two or three decades flailing around using inferior or broken ideas. (In fact, Liskov in her talk today noted that she had considered commercializing CLU.)

### Influence on other languages

Liskov chose in her initial work to focus on data abstraction, rather than unify that with object-orientation, which had begun being implemented in the 1960s by [Simula](http://en.wikipedia.org/wiki/Simula), but later contributed to the understanding of [subtyping](http://en.wikipedia.org/wiki/Liskov_substitution_principle) in object-oriented languages.

C++ took templates and exceptions from CLU. (Java, of course, took them from C++.)

Python, Ruby and other newer languages include iterators. To clarify: C++ and Java have "iterators" of a much different variety, which are just ordinary objects that have been implemented in often a convoluted way to maintain state for iterating through another object. The "real" iterators operate in conjunction with a special language construct usually called `yield`.

## Questions I have

The world is globalized and connected now much more than it was back in the 1970s. So sometimes I wonder, what if it had been more connected in the past?

### The C world

[C](http://en.wikipedia.org/wiki/C_(programming_language\)) was developed between 1969 and 1973.  [Dennis Ritchie](/blog/2011/10/13/why-dennis-ritchie-is-important/) wrote a little article, ["The Development of the C Language"](http://cm.bell-labs.com/cm/cs/who/dmr/chist.html), in which he acknowledged the debt to Fortran and Algol. However, its goal as a low-level language for implementing Unix meant that it cut various corners. I wonder if the history of computing would have been different had there been more attention paid, even in the constrained context of Unix implementation, to interesting academic work. I don't know what Ritchie and Thompson and others knew, if anything, about the work on modularity, types, etc. Maybe they knew, but didn't care because they were building something just for themselves and they were such good programmers they didn't need any help writing great code. It would be interesting, as a matter of historical record, to know who knew what and thought what, when.

### The functional programming world

Absent from Liskov's talk was any mention of the functional programming world.  [ML](http://en.wikipedia.org/wiki/ML_programming_language) came on the scene also in the 1970s. Later, [Standard ML](http://en.wikipedia.org/wiki/Standard_ML) came along. I don't know the details of the exact chronology, but Standard ML had polymorphism and exceptions right off the bat, and a module system added on top of that.

## Conclusion

Liskov's talk involved a lot of tracing of the history of ideas that led to her contributions.

I am very curious about what influenced what, in the entire space of the history of programming languages. Obviously, a lot of ideas were floating around in the 1960s, 1970s, and 1980s, so it's possible that many programming language features were invented independently from the same pool of rough ideas.

Sometimes I wonder whether continual reinvention could be minimized, by more sharing and awareness. Even today there is a proliferation of languages, many of which were or are invented by some individual who is not aware of the full history or rigorous achievements in the area of programming language semantics or design, and therefore perpetuate problems that for decades already we have known to avoid. I wonder if this situation is really inevitable.

Of course, the question might be moot, because it is always possible that human beings will simply make radically different choices, even when they are fully aware of all the ideas that are around at any given time.

What's the next step? What will we using doing twenty years from now that is currently already brewing in a university or other research lab *right now*? From my point of view, the most interesting work being done right now is that focused on going beyond the currently most powerful statically typed languages (such as ML, Haskell, Scala) to [dependently typed languages](http://en.wikipedia.org/wiki/Dependent_type).
