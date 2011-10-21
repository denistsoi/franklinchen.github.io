---
layout: post
title: "Improving navigation on my blog"
date: 2011-10-20 21:00
comments: true
categories:
- writing
---
Today I finally got down and dirty, and made some much-needed additions to my blog. I had delayed this work because my priority since starting the blog a month ago was to write content. I took time off today from writing content, in order to improve the navigation on my blog.

Here are the main improvements I have made:

<!--more-->

## Tags

I finally came up with a [tags page](http://franklinchen.com/tags/), and added it to the navigation bar.

[Octopress](http://octoopress.org) does not yet have a default plugin to create such a page, but I found and modified some [Ruby code](https://github.com/mattfoster/mattfoster.github.com/edit/master/Rakefile) for the `Rakefile` in order to generate my tags page. I hope this will be helpful to readers who may up till now have been confused because of the variety of topics I write about. I had made a decision up front to write about everything in this blog, rather than compartmentalize my life into different blogs.

An improvement I will add later: make it easy for readers to subscribe using RSS their chosen tag subsets of my blog, so that those only interested in, say, my posts about running, can subscribe to an RSS feed that only includes those posts.

## About me

For now, I compressed the "about me" aside, with the intention of eventually creating a detailed "about me" page linked off the navigation bar.

## Contact me

I created a [contact](http://franklinchen.com/contact/) page, and added links to it from the navigation bar and the "about me" aside.

## 404

I created a custom ["page not found"](http://franklinchen.com/404.html) page, since the default page was useless.
