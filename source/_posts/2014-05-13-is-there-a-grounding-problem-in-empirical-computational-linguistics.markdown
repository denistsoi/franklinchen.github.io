---
layout: post
title: "Is there a grounding problem in empirical computational linguistics?"
date: 2014-05-13T20:28:29-04:00
comments: true
external-url: 
categories: 
- philosophy
- empiricism
- grounding
- computational linguistics
- machine translation
- machine learning
- Carnegie Mellon University
---
I saw an announcement for a lunch talk at CMU with the intriguing title "Theoretical and Practical Grounding in Empirical Computational Linguistics", by [Stefan Riezler](http://www.cl.uni-heidelberg.de/~riezler/) of Heidelberg University.

Abstract: **Philosophy of science has pointed out a circularity problem in empirical sciences that arises if all known measuring procedures for a quantity of a theory presuppose the validity of this theory. We discuss how this problem relates to empirical computational linguistics, and define a criterion of T-non-theoretical grounding as guidance to avoid such circularities. We exemplify how this criterion can be met by crowdsourcing, task-related data annotation, or data in the wild. In particular, we illustrate the benefits of grounded learning in the area of statistical machine translation, e.g., by grounding machine translation in semantic parsing and in cross-lingual information retrieval.**

{% img /images/nlp-2014-05-13/presentation.jpg %}

I attended the talk because of my long-standing interest in the philosophy of science, a subject I spent a lot of time studying in college (although my degree was in physics). 

<!--more-->

## The problem

When using machine learning, there is a fundamental issue of whether one can run around in circles during feature discovery. For example, if you have labeled data, and you train a system, and then claim to find useful features which are actually just equivalent to what you were given, then there is a problem. Your system may not generalize to unseen data.

Riezler opened with a simple example of the circularity problem of grounding in science involving Archimedean statics. Suppose you measure mass through use of a balance scale. Then how do you evaluate an empirical claim about the theory of Archimedean statics? If you use a balance scale, there is a circularity in the use of [theoretical terms](http://plato.stanford.edu/entries/theoretical-terms-science/). Is there a way out? Yes, there is: use a different theory to *ground* your terms: make a distinction, for a theory T, between T-theoretical and T-non-theoretical terms, and make a correspondence (some kind of "transfer"), so that non-circular progress can actually be made.

In his talk, Riezler presented methods of learning for machine translation that he claimed to be free of the circularity problem. One method is "naive" coders (rather than expert coders) and crowdsourcing. Another is semantic parsing in which evaluation is based on a real-world task, getting the right answer according to a gold standard.

## Questions

Some interesting questions were posed by the audience.

### "Isn't circularity only a problem for science, but not for engineering systems?"

Answer: a system that fails to generalize is a problem.

### "How can we know if we are doing it wrong?"

Answer: talk to a social scientist!

## Cookies

Cookies were available as part of lunch. In accordance with my promise, here are photos of two I ate:

{% img /images/nlp-2014-05-13/cookie1.jpg %}
{% img /images/nlp-2014-05-13/cookie2.jpg %}

They were big. I should probably have eaten just the first one.

## Conclusion

I'm not a working computational linguist, and it's been over a decade since the only course I've taken in computational linguistics at CMU (in 2003), so I can't pretend that I entirely followed the presentation, but I found interesting his attempt to apply philosophical considerations toward generating new ways to tackle empirical computational linguistics, and hope more people take philosophy seriously in the field of machine learning in general. I have an impression that some practitioners just sling data and numbers around, but may not be aware of the pitfalls of the grounding problem.
