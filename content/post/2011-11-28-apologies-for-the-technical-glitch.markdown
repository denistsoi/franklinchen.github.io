---
layout: post
title: "Apologies for the technical glitch"
date: 2011-11-28T21:43:00
comments: true
categories:
---
My apologies for the technical glitch I introduced eight days ago that resulted in my web site's entire sidebar being blank! For a moment I felt angry and sad that for eight days any visitors to my site saw a strangely incomplete site, and nobody informed me, but mistakes happen. My regular readers who use my [RSS feed](http://feeds.feedburner.com/FranklinChen) never saw the glitch.

I mistakenly thought that by using an HTML comment in a [Markdown](http://daringfireball.net/projects/markdown/) source file, all the right things would happen, but it turns out that the blog software I use, [Octopress](http://octopress.org/), extracted the begin-comment into the blog's main index page but not the end-comment, so that, of course, thanks to the leniency of HTML parsing, the entire rest of the HTML was treated as a comment.

It is my own fault that I did not preview my blog carefully during the past week to verify that the sidebar and all other parts of the site were correct.
