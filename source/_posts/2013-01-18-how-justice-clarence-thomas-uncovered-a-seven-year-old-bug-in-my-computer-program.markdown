---
layout: post
title: "How Justice Clarence Thomas uncovered a seven-year-old bug in my computer program"
date: 2013-01-18T13:55:11-05:00
comments: true
external-url: 
categories: 
- programming
- Perl
- Java
- ANTLR
- testing
- Supreme Court
---
{% img http://www.supremecourt.gov/about/justice_pictures/CThomas.jpg Justice Clarence Thomas %}

Today, [Justice Clarence Thomas](http://en.wikipedia.org/wiki/Clarence_Thomas) of the [Supreme Court of the United States](http://www.supremecourt.gov/) uncovered a seven-year-old bug in a computer program I wrote years ago.

Here's what happened:

<!--more-->

## [Oral arguments of SCOTUS](http://www.supremecourt.gov/oral_arguments/oral_arguments.aspx)

Several years ago, as part of the [TalkBank](http://talkbank.org/) project, I wrote a suite of computer programs to clean up, correct, and transform [SCOTUS oral argument transcripts](http://www.supremecourt.gov/oral_arguments/argument_transcripts.aspx) into a particular text file format called [CHAT](http://childes.psy.cmu.edu/), to enable analysis and further transformation.

The CHAT transcripts are aligned (by humans), utterance by utterance, with the available audio files, in order to create a nice way to simultaneously read the text while listening, with the ability to pause, skip to a particular section, etc.

## Example: [Hamdan v. Rumsfeld](http://en.wikipedia.org/wiki/Hamdan_v._Rumsfeld)

### Text formats

SCOTUS provides an oral transcript in [PDF format](http://www.supremecourt.gov/oral_arguments/argument_transcripts/05-184.pdf).

At CMU we have made the [CHAT-formatted text](http://talkbank.org/data-orig/Meeting/SCOTUS/2005/05-184.cha) of each transcript available, as well as ZIP archives of [entire corpora](http://talkbank.org/data/Meeting/SCOTUS/2005.zip) and the [equivalent XML](http://talkbank.org/data-xml/Meeting/SCOTUS/2005.zip) converted automatically from CHAT.

### Media playback

The linked transcripts can be played back in several ways:

- Directly from the [CMU site](http://talkbank.org/browser/index.php?url=Meeting/SCOTUS/2005/05-184.cha).
- Downloading the [2005 corpus](http://talkbank.org/data/Meeting/SCOTUS/2005.zip) and running the [CLAN](http://childes.psy.cmu.edu/clan/) desktop application on a transcript.
- [Oyez](http://www.oyez.org/) provides their own interface, through transformation of the CHAT files, to an [entire site for each case](http://www.oyez.org/cases/2000-2009/2005/2005_05_184).

## What happened today

Today, as I have done on Thursdays or Fridays for years now when SCOTUS is in session, I have converted the oral argument transcripts for this week in order to hand off to the Oyez people for their use.

### The conversion software

The conversion happens in three steps.

#### Pre-processing

The conversion is not fully automatic, because there are always errors of some kind in the transcripts that I correct manually. I wrote a set of twenty-nine separate [Perl](http://www.perl.org/) scripts that do a lot of cleanup and checking of transcripts as a pre-processing step.

#### Parsing, validation, transformation

The main task of parsing and validation and transformation uses a program written in Java and using the [ANTLR](http://antlr.org/) parser generator framework.

Note: these programs were written several years ago, hence the use of ANTLR version 2 rather than ANTLR 3. Newer projects of mine have used ANTLR 3 ([ANTLR 4](http://antlr4.org/) is only now about to hit 4.0).

#### Post-processing

A post-processing Perl script is used after the initial CHAT generation, in order to convert numerical and other tokens into the desired spoken form; at the [Pittsburgh Perl Workshop 2010](http://pghpw.org/ppw2010/), I gave a little talk, [How do you pronounce "07-1191"?](http://pghpw.org/ppw2010/talk/3029), about this part of the project.

#### Reliable legacy software

No new development has been done on these programs for several years, since as far as can be determined, there have been no remaining bugs in the programs.

These programs have, to date, successfully generated 3,468 CHAT files that have been validated. In the first year or two, there were bugs quickly found and fixed, and then I don't remember the last time a bug was found.

**Until today**.

## The bug

The bug came today as I was processing this week's case [11-9953](http://www.supremecourt.gov/oral_arguments/argument_transcripts/11-9953.pdf).

I got an error message when my pre-processing phase exited after an error while running the script `find-bad-ids.pl`:

```
THOMAS not found
```

I was confused. I looked at the transcript and saw:

{% blockquote %}
JUSTICE SCALIA: And another of his counsel, Mr. Singer -- of the three that he had -- he was a graduate of Harvard law school, wasn't he?

MS. SIGLER: Yes, Your Honor.

JUSTICE SCALIA: Son of a gun.

JUSTICE THOMAS: Well -- he did not --

(Laughter.)

MS. SIGLER: I would refute that, Justice Thomas.

JUSTICE SOTOMAYOR: Counsel, do you want to define constitutionally adequate counsel? Is it anybody who's graduated from Harvard and Yale?

(Laughter.)
{% endblockquote %}

I was confused about why my script would not recognized Justice Thomas. I looked at the Perl source code, saw where I initialized a table of Justice names, and saw:

```
use String::Approx 'amatch';

$lastNames{REHNQUIST} = -1;
$lastNames{STEVENS} = -1;
# ... code omitted

    if (not exists $lastNames{$upperLastName}) {
      if (my @matches = amatch($upperLastName, @ids)) {
        warn "$path:$.: $lastName: guessing to be $matches[0]\n";
      }
      else {
        warn "$path:$.: $lastName not found\n";
      }
    }
```

I had simply forgotten seven years ago to put into the table initialization the following code:

```
$lastNames{THOMAS} = -1;
```

And this bug had lain undiscovered for seven years because [Justice Thomas has not spoken in seven years](http://www.washingtonpost.com/politics/clarence-thomas-breaks-long-silence-during-supreme-court-oral-arguments/2013/01/14/a7c6023c-5e7a-11e2-9940-6fc488f3fecd_story.html)!

### How the bug arose

Justice Thomas did speak in the following transcripts I successfully converted years ago:

- 1999/99-478
- 2000/99-1848
- 2000/99-1964
- 2001/00-1770
- 2001/01-631
- 2002/01-1107
- 2002/02-516
- 2004/03-1164
- 2005/04-1067
- 2005/04-1327
- 2005/04-52

What happened was that they were generated before I wrote the `find-bad-ids.pl` script. The main program in Java has its own table of justices. The purpose of the pre-processing Perl script is to catch errors earlier than handing off to the Java program. In particular, the use of approximate string matching enables easy correction of typos before ANTLR ever sees the text to parse. Before the pre-processing scripts, the text that arrived at ANTLR often had a lot of systematic errors that were annoying to fix, so I wrote in Perl both a cleanup pre-processing phase and a checking pre-processing phase. They include tests for all kinds of "suspicious" formatting and tokens and ambiguity that require manual judgment and correction.

## Conclusion

I still don't know why I forgot to put Justice Thomas into the table initialization code in my Perl script seven years ago, but it resulted in a bug that was not detected until today. The lesson: your computer program can have bugs if you didn't get test data that represented all possible situations, including that of Justice Thomas actually speaking during a SCOTUS oral argument!
