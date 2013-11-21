---
layout: post
title: "World Chess Championship 2013 round 9: I correctly predicted Anand's aggressively opening choice but he blundered horribly again to lose"
date: 2013-11-21T08:59:36-05:00
comments: true
external-url: 
categories: 
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Nimzo-Indian Defense
- Queen's Indian Defense
---
In my continuing coverage of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), today I cover round nine, in which Anand finally went for the big win, but blundered horribly and lost instead.

Also, I have to admit to being proud of myself for having correctly predicting the opening that both players would willingly enter in today's game! I had been thinking about this even before the match, but apparently Anand didn't pull out his weapon until just now. Today, I explain my reasoning.

Game and notes below:

<!--more-->

## My correct opening prediction

### `1 d4`

I concluded weeks ago that Anand would have to play `1 d4` for the win against Carlsen, as he did against Kramnik in 2008 and Topalov in 2010. I know this is a topic for a post in itself, but I think `1 e4` is dead at an elite match level if Black is willing to play `1... e5` in response. Alternatively, even in his successful defense of his title against Gelfand in 2012, Anand's `1 e4` was neutralized by Gelfand's use of the Sicilian `1... c5`.

### Nimzo-Indian

I predicted that Carlsen would play the [Nimzo-Indian](http://en.wikipedia.org/wiki/Nimzo-Indian_Defence)/[Queen's Indian Defense](http://en.wikipedia.org/wiki/Queen%27s_Indian_Defense) opening complex in response to `1 d4`. Very solid, dynamic opening choice for Black.

I believe the Queen's Indian Defense is mostly dead at the elite level, thanks to computer-aided analysis of some of the most important lines that lead to forced draws. Therefore, for Anand to play for the big win would require accepting the Nimzo-Indian challenge, creating positional asymmetries.

### White against the Nimzo-Indian

There are many ways to play White against the Nimzo-Indian. As White I have tried many of them. The question is, what is the most aggressive way to play against the Nimzo-Indian? I think the answer is clear: `f3` aiming for an eventual `e4` and King side attack, involving `f4` and `e5` and `f5` trying to checkmate Black's King!

Some years ago, a nice book by Yuri Yakovich came out, ["Play the 4 f3 Nimzo-Indian"](http://www.gambitbooks.com/books/Play_the_4_f3_Nimzo-Indian.html) which covers the ideas behind this way of playing for White. There are, of course, reasons why this is not played so often at top levels. Basically, the plan is risky, because White risks getting a weak `c3` Pawn, being underdeveloped, or overextended, while Black gets counterplay on the Queen side. But in a must-win situation, I expected Anand to pull out this opening variation as a weapon eventually.

He has done this before. In his [2008 match against Kramnik](http://www.chessgames.com/perl/chess.pl?tid=65865), he played against the Nimzo-Indian using this `f3` variation in [Round 2](http://www.chessgames.com/perl/chessgame?gid=1510259). Kramnik drew, but White had a good game.

## Summary of the game

Carlsen characteristically avoided the most popular "main line" against the `f3` Nimzo-Indian, and in fact even transposed into a line of the Saemisch Variation that for a long time, since Botvinnik's famous winning games in it, had been considered bad for Black.

But we have computers now that correct a lot of old assumptions. As a result, Carlsen played the most aggressive counterattacking plan right off the bat, going straight for Queen side counterplay before White even began developing the King side! Both players proceeded completely thematically and predictably after that, launching Pawns forward on opposite sides of the board. The question was whether Anand could break through on the King side first.

Carlsen cold-bloodedly assumed not, and played aggressively with `b3` creating a possibly dangerous passed Pawn, even as Anand prepared `f6` trapping Carlsen's King.

Probably objectively the position is defensible for Black. But Anand thought he saw a checkmate coming, and let Carlsen Queen the `b` Pawn while lifting his Rook up to deliver a checkmate threat. Alas, he completely missed that `Qe1` stops the checkmate and White is dead lost, and had to resign. (It turns out that at the last moment, Anand could easily have forced a draw with `Bf1`.)

In this game, it is possible that if Anand had played a slower, less "objectively correct" line of attack, the game could have gotten interesting, in case Carlsen faltered. But unfortunately, we did not see that more interesting development of the game.

### The state of the match

Carlsen has basically won the match. Carlsen already has 6 out of 12 points. He needs only one draw in the next 3 rounds in order to claim the title of FIDE World Chess Champion.

It's up to Anand to continue doing the best he can regardless of the inevitable result. It will be tough, especially since he just blundered *horrifically* again in a position that should have been a draw.

## The game

<link href="/chess/pgn4web/template.css" type="text/css" rel="stylesheet"></link>

<style type="text/css">
  #GameLastComment {
    font-style: italic
  }
</style>

<script src="/chess/pgn4web/pgn4web.js" type="text/javascript"></script>

<script type="text/javascript">
    "use strict";

    SetPgnUrl("/chess/anand-carlsen.pgn");
    SetImagePath("/chess/pgn4web/images");
    SetHighlightOption(true);
    SetCommentsIntoMoveText(true);
    SetCommentsOnSeparateLines(true);
    SetInitialGame(9);
    SetShortcutKeysEnabled(true);
</script>

<table>
    <tr valign="top">
      <td>
        <div id="GameBoard"></div>
        <div id="GameButtons"></div>
        <span class="label">Move comment:</span><br><span id="GameLastComment"></span>
      </td>

      <td>
        <span class="label">Event:</span> <span id="GameEvent"></span>
        <br/>
        <span class="label">Site:</span> <span id="GameSite"></span>
        <br/>
        <span class="label">Round:</span> <span id="GameRound"></span>
        <br/>
        <span class="label">Date:</span> <span id="GameDate"></span>
        <br/>
        <span class="label">White:</span> <span id="GameWhite"></span>
        <br/>
        <span class="label">Black:</span> <span id="GameBlack"></span>
        <br/>
        <span class="label">Result:</span> <span id="GameResult"></span>
        <br/>
        <br/>
        <span class="label">Side to move:</span> <span id="GameSideToMove"></span>
        <br/>
        <br/>
        <span class="label">Last move:</span> <span id="GameLastMove"></span>&nbsp; <span class="label">variations:</span> <span id="GameLastVariations"></span>
        <br/>
        <span class="label">Next move:</span> <span id="GameNextMove"></span>&nbsp; <span class="label">variations:</span> <span id="GameNextVariations"></span>
      </td>
    </tr>
</table>

<hr/>

<div id="GameText"></div>

