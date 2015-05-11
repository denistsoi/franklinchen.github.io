---
layout: post
title: "Experiment in learning: completing Stanford online course: Machine Learning"
disqus_identifier: "http://franklinchen.com/blog/2012/01/12/experiment-in-learning-completing-stanford-online-course-machine-learning/"
disqus_url: "http://franklinchen.com/blog/2012/01/12/experiment-in-learning-completing-stanford-online-course-machine-learning/"
date: 2012-01-12T23:54:00
comments: true
categories:
- learning
- education
- machine learning
- Stanford University
- Carnegie Mellon University
- Octave
- MOOC
---
Yesterday I wrote about my experience with completing, in fall 2011, the free online Stanford course [Introduction to Databases](/blog/2012/01/11/experiment-in-learning-completing-stanford-online-course-introduction-to-databases/). Today I am writing about my experience with completing [Machine Learning](http://www.ml-class.org/).

This course was different in many important ways from the databases course.

<!--more-->

## Why did I take this online course?

I have been quite interested in machine learning for a long time now. Years ago, I started taking a course in machine learning at Carnegie Mellon but had to drop it because I was overbooked with too many other things to do. The closest I have ever come to machine learning was completing a course years ago in ["language technologies"] at Carnegie Mellon. That was a survey course running through the topics of information retrieval, parsing, machine translation, etc.

For the same reasons that I mentioned in my post yesterday, I did not expect to try to take a traditional formal-classroom machine learning course again: I don't find that to be an efficient route to learning given my time constraints involving work and personal projects outside of work.

Self-study has always been an option, and I have several machine learning textbooks, some of which are clearer than others, and elegantly explain the theoretical basis, but at this stage of my life I'm more interested in *application* than in getting deep into theory.

## Completion of the course

In December 2011, I did complete the machine learning course, having done all the in-lecture quizzes, the review questions, and the programming exercises. There were no exams.

Although we were not required to, I did all the optional sections of the programming exercises.

I received my "statement of accomplishment" recently, and had a perfect score in the course. (That is not say much, and I'll explain why.)

## My strategy

As with the databases class, I tried to be efficient. In the end, I think I spent about five hours a week on the course.

### Textbooks

I did not use any textbooks during the course. The course was self-contained, with the lectures covering all the concepts and explanations and equations and algorithms necessary to complete the programming assignments.

Once I did try to look up an algorithm to get more theoretical insight about it, but immediately encountered an annoying problem: everyone seems to use slightly different mathematical notation.

### Lectures and demos

The lectures were the core of the course. I watched them, taking notes for myself as I felt the need, and made sure to get the in-lecture quizzes right before moving on to the next lecture segment or lecture.

Professor Andrew Ng obviously put a great deal of care into the video lectures. These were some of the most lucid and attention-maintaining lectures I have ever seen in my entire life, either live or in person. His calm and upbeat tone and pacing, along with useful demos and annotations on the slides, and humility while offering practical advice on the work flow of solving problems using machine learning, were what made this course really enjoyable and memorable!

In "real life" lectures, there are a lot of opportunities for wasted time. I think video lectures solve many of the problems because demo setup, false starts, administrative reminders can be omitted or edited out. On the other hand, student questions in real life can also potentially not be useful to every student in attendance, but can also potentially be very useful. I think that in a video lecture, the instructor must be more aware of potential confusions and questions, in order to anticipate them rather then relegate them to online forum discussions. The in-lecture quizzes go a bit of the way toward filling in gaps, I think.

### Review exercises

I did the review exercises after watching the relevant lectures and completing their embedded quizzes.

### Online discussion forum

I did not really use the online discussion forum, except when I was encountering bugs in Octave on Mac OS, and looked to see if other people had problems, and yes, they did.

### Programming exercises

I started the programming exercise for the week only after completing all the other material. We used the Octave programming language and environment in the course.

## Difficulty of the course

Overall, the course was not very difficult. And that was fine, given my goal of efficient mastery of practical basics, such that I could continue deeper learning and use in the future.

That said, the hungry theorist within me felt a little left out by the relentlessly practical nature of the course.

Also, the programming exercises could have been more involved.

## Benefits of the course format

### Time flexibility and efficiency

As mentioned in my post about databases, I appreciated that I could work through lectures at any time, and without having to go to a classroom somewhere. There was also the option of speeding up the video, but I have to confess that just made things eerie, and I only tried that once before returning to normal speed.

### In-lecture quizzes

In-lecture quizzes are a vital part of this whole learning experience. (In fact, I wish there had been more!)

## Flaws in the online course format

### Lecture slides were late

The lecture slides tended to arrive late in a week, well after I had already watched the lectures. If lecture slides had been provided as soon as the videos were posted, that would have made note-taking much more efficient. I ended up basically taking my own notes during the lectures before the slides appeared.

### Less depth

I enjoyed that there was a focus on practical application at the expense of theory, but I would have liked to see optional lectures and/or handouts covering theoretical proofs as relevant to what we were applying.

There was no opportunity to work on an open-ended project for assessment and feedback.

### Programming exercises were too easy

The biggest flaw in the course was that the programming exercises were too easy.

The level of hand-holding in the exercise descriptions was really extreme, with equations and algorithms given and even a lot of Octave code hints that sometimes practically gave away what needed to be done (which often was just a few lines of code). I would not have minded not having any of those hints. It is not so hard to consult the slides for the algorithms discussed, and some of the specific Octave hints could have been extracted into a more general machine-learning-independent discussion of common Octave computational techniques (such as tricks to express vectorization in the face of bias units).

The hand-holding extended to the use of a pre-written monolithic driver program for each exercise. Obviously, the student would have done best to study the entire driver program's code, but it was easy to get by without doing so. There should have been at least one assignment in which the student wrote an entire Octave program, including the driver (given sufficient hints). I don't like the idea that many of us who completed this course might be going out in the world just copying and pasting from driver programs to get stuff done. And that brings me to another matter of concern.

The code given to us was monolithic, not modular. Out of laziness, I did little to remedy the situation, although in a real project rather than a programming exercise to complete quickly and get over with. When I was writing code for the exercises, and testing and running my code, I would just comment code out of the driver programs that I wasn't using at the time. It would have been better if we had been given a modular driver so that we could test different parts of the exercise more independently. The code we were given simply did not adhere to the good programming practices I would expect if were programming in Java or C++ or something like that. Just because it's Octave doesn't mean we should be programming sloppily.

So I would advise providing more modular and test-encouraging starter code for the programming exercises.

### Octave glitches

There was a bug in the Mac OS version of Octave we were told to download. This wasted a good amount of my time when doing one of the programming exercises, until I discovered on the online forum that other people had encountered the same bug. I think that in an online course, making sure up front that everything works on the all the platforms should be of high priority.

## Conclusion

I felt it was worthwhile completing the Stanford online machine learning course. The broad practical survey gives me sufficient confidence that I could immediately use machine learning to solve some real problems today, as well as confidence that I could deepen my understanding by continuing more theoretical study.

I am grateful to Professor Andrew Ng and his team for making this course run as smoothly as it did.
