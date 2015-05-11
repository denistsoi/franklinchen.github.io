---
layout: post
title: "Review of Coursera's Fall 2012 \"Functional Programming Principles in Scala\""
date: 2012-11-15T21:27:00
comments: true
external-url: 
categories: 
- Scala
- programming
- functional programming
- Coursera
- MOOC
- SBT
- Java
---
{% img http://www.scala-lang.org/sites/default/files/newsflash_logo.png %}

In fall of 2012, I completed the initial offering, through [Coursera](http://www.coursera.org/), of [Martin Odersky](http://lampwww.epfl.ch/~odersky/)'s ["Functional Programming Principles in Scala" online course](http://www.coursera.org/course/progfun), which was held from September 18 through November.

This is a review of the course, which is planned to be offered again (so those of you who missed it the first time can sign up for the second iteration when it is available).

Also check out the [instructor report](http://docs.scala-lang.org/news/functional-programming-principles-in-scala-impressions-and-statistics.html).

<!--more-->

## The purpose of the course

I have noticed very often that people learning to program or to perform some task that involves programming are very fixated on the question of "what computer language should I use?" or "what computer language is the course/project going to use?" This is a mistake because what is important in learning programming or getting better at it is not trivial questions of syntax, but matters of *understanding* what things mean and having a correct mental model of what is going on. In the end, one has to go back to fundamentals.

So although this course has "Scala" in its title, it is really a brief introduction to functional programming, using [Scala](http://www.scala-lang.org/) as one of many possible languages in which to express it.

## My background in computer science and functional programming

I am a college graduate with a physics degree who *never took a single computer science or programming course in college*, because I found programming to be strange, difficult, and scary, based on [my experiences before college](/blog/2012/01/16/how-school-made-me-hate-computer-science-and-programming/). I did not take up programming seriously until after college, when I found myself wanting a career change, and took a second look at computer programming.

As I have mentioned earlier, a [turning point in my life](/blog/2011/10/25/rip-john-mccarthy-but-lisp-will-never-die/) was when a friend recommended to me that I focus not on "learning" some arbitrary computer language, but on learning the *principles* of programming first, after which any specific language could be understood quickly in light of the principles.

So I learned functional programming through working through [The Structure and Interpretation of Computer Programs](http://mitpress.mit.edu/sicp/), coding up my solutions to the exercises using [Gambit Scheme](http://gambitscheme.org/) on a [Macintosh Classic](http://en.wikipedia.org/wiki/Macintosh_Classic). I then learned C and C++ and got my first job as a software engineer.

The next big jump for me came when I encountered my first statically typed functional languages in around 1995: [Caml Light](http://caml.inria.fr/caml-light/index.en.html) and [Standard ML](http://www.smlnj.org/) and [Haskell](http://www.haskell.org/) through [Gofer/Hugs](http://www.haskell.org/hugs/). I was so inspired by the possibilities of *improving the programming experience* that I decided to leave my job and apply for graduate school in computer science.

I was in the [Carnegie Mellon University CS PhD program](http://www.csd.cs.cmu.edu/education/phd/) for two years before leaving after 1999. I left for a combination of different reasons, but I am definitely still a believer in the original mission I had before going to graduate school: improving the experience of practical software development by every means necessary.

## My plan: overcome resistance to Scala

Ironically, what I planned to get out of the course is *not* what I expect most students in the course would or *should* get out of it! I treated the course as a way to get myself to force myself to use and really learn the Scala language (since I did not need an introduction to functional programming), by solving programming exercises that I probably had done in the past in other languages.

Scala had been around for years, but I had resisted doing much with it because it seemed very complex and changing all the time and because the tool ecosystem seemed to be immature and not usable for me. That led me to my not investing in the effort to truly read up on it and experiment to use at work.

I am happy to report that Scala is actually usable now and all my concerns about it are no longer relevant. 2012 seems to me to be the year when Scala became truly usable for general production. (I will report later on my current plans in motion to migrate from Java to Scala at work.)

## Observations about the course

### Installation of software

There were initially some glitches when setting up [Eclipse](http://eclipse.org/) and [SBT](http://www.scala-sbt.org/), but eventually, an Eclipse distribution made specifically for the class was made available and solved my problems.

That said, I preferred to use Emacs and SBT for writing code for the course.

### Theoretical material

Martin Odersky's lectures were entirely as one would expect in a basic academic course on programming language principles: laying the fundamental mathematical groundwork: operational semantics, structural induction, etc.

This material can be very dry and abstract, and I have to wonder how many students encountering it for the first time slog through long lectures of this kind of content. Personally, if I were teaching these ideas, I would use less of the typical "mathematical" kind of example when illustrating them.

### Lecture format

I was surprised by the scarcity of within-lecture quizzes as checkpoints for the student, because I have completed several Coursera courses in which they were much more frequent (and in my mind useful). I think the course would benefit from breaking up lectures into smaller chunks with more quizzes.

### Programming assignments

The programming assignments involved filling in code skeletons in otherwise complete programs that solved some task. Again, the tasks involved seemed typically mathematical and "classic" in nature, such as anagram solving, Huffman coding and decoding, although there was also an assignment on tweet analysis.

### Testing

I appreciated that the assignments were distributed as self-contained SBT projects, along with rudimentary [JUnit](http://junit.org/)-style test suites, run through [ScalaTest](http://www.scalatest.org/) that one could add to. I get the impression that many courses on programming do not address the issue of testing at all, with the result that students flail while copying and pasting code in some IDE or REPL instead of adopting an automated testing discipline that not only decreases frustration but will prove to be a real-life practice to be used in their studies and careers.

It was great to have these programming assignments distributed as complete deploy able projects. I actually looked at the non-assignment-relevant code and configurations in order to learn more about real-life SBT and Scala use for my own plans to migrate from Java to Scala at work.

### Scala the language

Scala is introduced at first as a kind of standard functional language (even though in reality Scala's functions are actually objects). Algebraic data types are introduced through Scala's object encoding as `case class` in a hierarchy. I think the instructor did a good job in illustrating through example how Scala manages to blend the traditional functional and object worlds in a single language, while emphasizing the functional aspects.

### Most interesting

For me, the most interesting aspect of the course and assignments was the focus on using Scala's "for comprehension" syntactic sugar to write very concise and clear code. An entire week of lectures was focused on collections and explained how the syntactic sugar is translated into `map`, `flatMap`, and `filter`. With the popularity of comprehension or similar syntax in many languages these days, I think it is very important to make sure that everyone knows that it is not just magic, but is just syntactic sugar for the important concepts that underlie it. I think the course did a good job in illustrating how comprehensions can be used not only for lists, but for many other types as well, and types that one can define oneself (Scala's comprehension syntax is meant for any [monad](http://en.wikipedia.org/wiki/Monad_\(functional_programming\)).

#### (Update of 2013-02-27)

I just saw a good recent expository example of [the use of comprehension syntax to simplify the look of code that involves writing your own monad](http://tmorris.net/posts/memoisation-with-state-using-scala/index.html).

## Conclusion

I strongly recommend Martin Odersky's "Functional Programming Principles in Scala" course to all who are interested in understanding the basics behind programming language semantics and how to apply this knowledge in writing and reasoning about clear, elegant programs to solve problems. A course like this could be taught using any number of languages as a vehicle, but I think Scala works particularly well because it is a JVM-based language that interoperates seamlessly with Java and Java's entire tool chain, so anything you learn here, you can apply immediately in real-life work if you already operate in the JVM-based programming world. Scala is not a toy language, but is used at [Twitter](http://twitter.github.com/scala_school/) and many other enterprises that require reliability, performance, scalability while solving very complex problems.

A final reminder: if you missed this free course the first time around, by all means check it out when it is offered again!
