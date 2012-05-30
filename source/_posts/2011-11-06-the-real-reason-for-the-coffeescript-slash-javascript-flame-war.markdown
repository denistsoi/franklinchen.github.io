---
layout: post
title: "The real reason for the CoffeeScript/JavaScript flame war"
date: 2011-11-06 20:07
comments: true
categories:
- CoffeeScript
- JavaScript
- programming
- syntax
- psychology
---
I have been slightly (but not entirely) surprised by the current flame war over the programming languages [CoffeeScript versus JavaScript](http://www.w2lessons.com/2011/11/coffeescript-means-giving-up-on.html). Michael Woloszynowicz finds the rise of [CoffeeScript](http://coffeescript.org/) "alarming". He gives possible reasons people are interested in CoffeeScript and possible pitfalls in choosing to use it rather than straight JavaScript.

I believe that all that is happening is simply a repeat of history, with a small twist.

<!--more-->

## C

Once upon a time, there was a guy named [Bjarne Stroustrup](http://www2.research.att.com/~bs/) who found himself frustrated with the C programming language. Not only were there various flaws in C (some small, some large), but also it was frustrating writing, in a standard way, object-oriented programs. To be sure, there were very well-known idioms for writing C programs in an object-oriented way. But repeatedly using idioms, manually, can get frustrating.

### C with Classes, then C++

Stroustrup created a compiler for an extension of C called "C with Classes". The compiler was called `cfront` and compiled the new language to C, which was then simply compiled with any suitable C compiler. Eventually, the extension of C was called C++.

Stroustrup took care to design the language so that syntactically, almost every valid C program was also a valid C++ program.

C++ became very popular, although to this day there are many programmers who have refused to use C++, for a variety of reasons. Many of those reasons are the reasons Woloszynowicz gives for being skeptical of CoffeeScript. For example, even though C++ is "higher level", in actuality you have to know the low-level aspects of C in order to really understand C++. Also, there are programmers who don't use C++ very well and are better off having stuck to C longer, to have mastered the C parts of C++ before going for all the advanced features of inheritance and templates and exceptions, etc.

### Example of C versus C++

To illustrate how C++ can be considered an extension of C, compare the handwritten implementation of inheritance in C with that provided by C++:

{% gist 1344060 %}

(For amusement, see how knowing the low levels of C can enable [doing abusive things in C++](/blog/2011/10/04/a-blast-from-the-past-c-plus-plus-abuse/).)

## JavaScript to CoffeeScript

The debate over JavaScript versus CoffeeScript has some similarities to the debate between C and C++. CoffeeScript does some things to "fix" issues in JavaScript:

- Like C++, CoffeeScript changes some matters in variable scoping from the original language.
- Like C++, CoffeeScript introduces "classes" and expands them to a very idiomatic pattern that one could have written out by hand in the original language (in the case of CoffeeScript, classes just implement one way to use JavaScript's prototypes).
- Like C++, CoffeeScript makes some changes with function definitions. C++ introduced a new syntax for parameters, while CoffeeScript is more radical and forces the programmer to define functions in lambda-style syntax.

## The power of syntax

However, I believe that the real reason for the uproar over JavaScript versus CoffeeScript is that CoffeeScript makes huge syntax changes to the original language.

C++ made as few syntax changes as possible (until rather recently, for this year's [C++11 standard](http://en.wikipedia.org/wiki/C%2B%2B11); but I believe C will borrow some syntax changes back, as it has done in the past, e.g., with ANSI function prototypes and `bool`). In fact, Stroustrup would have liked to change C's type declarator syntax, but didn't because of his mission to change C syntax as little as possible.

Ironically, semantically CoffeeScript is much more of a "preprocessor" to JavaScript than C++ is to C. I don't really consider CoffeeScript a new language, whereas I do consider C++ to be a new language.

I think the uneasiness some feel toward CoffeeScript, as well as the excitement others feel, comes from the *illusion* that CoffeeScript is something new and hip and radical.

Imagine if CoffeeScript had been designed to be maximally compatible syntactically with JavaScript. I don't think there would be as much of an uproar if CoffeeScript had the appearance of being a simple extension of JavaScript, keeping all the braces and parentheses and only introducing extra syntax that was unobtrusive. In fact, suppose the language were then called JavaScript++, with the promise that except for things like variable scope semantics, most valid JavaScript programs were also valid JavaScript++ programs.

I believe (from anecdotal praise I have heard from converts) that the excitement over syntax is responsible for much enthusiasm for CoffeeScript, and I suppose I do share Woloszynowicz's concern that those looking for shiny new syntax might miss that anyone who is a serious CoffeeScript programmer *must* master the underlying JavaScript and cannot consider CoffeeScript a standalone distinct higher-level language.

## Conclusion

I don't see any special reason to be alarmed by the rise of CoffeeScript. Some people will enjoy and use well the features of it, and others will botch it up. But there is no threat to JavaScript. If anything, because CoffeeScript has such an obvious translation into JavaScript, CoffeeScript can only solidify the JavaScript world by bringing in extra enthusiasm from those who use it effectively.
