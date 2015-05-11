---
layout: post
title: "Why flatten a tree when you can just traverse it?"
date: 2013-02-15T15:11:08-05:00
comments: true
external-url: 
categories: 
- programming
- Ruby
- recursion
---
[Michael Feathers](http://michaelfeathers.typepad.com/michael_feathers_blog/) wrote a blog post about [avoiding explicitly traversing a tree recursively](http://michaelfeathers.typepad.com/michael_feathers_blog/2013/02/sub-tree-selection-with-flattenselect.html) by taking advantage of its representation as nested arrays and using array operations to flatten.

I was unhappy about this solution because

- it creates a bunch of intermediate arrays
- it concatenates arrays repeatedly, which is expensive for a very large tree
- the recursive solution seems more simple, clear, and efficient

So I wrote up the recursive solution. Some features of the solution:

- it uses Ruby's idiomatic `yield` construct
- for convenience, it creates an `Enumerable` so that you can do whatever you want while iterating through the tree

Here's the code:

{{% gist 4963218 %}}
