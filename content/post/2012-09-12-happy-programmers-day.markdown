---
layout: post
title: "Happy Programmers' Day!"
date: 2012-09-12T21:56:00
comments: true
categories:
- programming
- Ruby
---
Happy [Programmers' Day](http://en.wikipedia.org/wiki/Programmers'_Day)!

I only by accident found out that today was Programmers' Day. It is apparently observed the 256th day of each year. This is my first year of "observing" the day.

Since the day is almost over, I hurriedly came up with this little piece of code. Guess what it does?

{% codeblock Mystery Ruby lang:ruby http://github.com/FranklinChen/programmers-day/blob/master/ruby/mystery.rb %}
require_relative 'utils'

class Mystery
  attr_reader :mysterious
end
{% endcodeblock %}

<!--more-->

The trick, of course, lies in what we have in `utils.rb`:

{% codeblock Utilities lang:ruby http://github.com/FranklinChen/programmers-day/blob/master/ruby/utils.rb %}
class Class
  alias orig_attr_reader attr_reader

  def attr_reader(*args)
    args.each do |arg|
      if arg == :mysterious
        puts "Happy Programmers' Day!"
      end
    end

    orig_attr_reader(*args)
  end
end
{% endcodeblock %}

Very simple, nothing fancy, but perverse enough for a bit of Programmers' Day fun.
