---
layout: post
title: "World Chess Championship 2013, round 6: Carlsen wins the second game in a row when Anand blunders again in a drawn ending"
date: 2013-11-16T23:51:36-05:00
comments: true
external-url: 
categories: 
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Berlin Defense
---
In my continuing coverage of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), today I cover round six, in which Carlsen won the second game in a row.

Game and notes below:

<!--more-->

## Summary

### Psychology already at move 4

As White, Anand played e4 again, as in [round 4](/blog/2013-11-13-world-chess-championship-2013-round-4-who-said-the-berlin-defense-was-boring/), and Carlsen again used the Berlin Defense. Anand deviated by refusing to go into the Berlin ending that had gone badly for him in round 4, and chose with d3 to transpose into a line of the Closed [Ruy Lopez](http://en.wikipedia.org/wiki/Ruy_Lopez) that is considered to be not so challenging for Black because of the lack of a White d4.

Personally, I think this was a psychological error on Anand's part, playing like Carlsen, avoiding the main aggressive opening lines. As we have seen in the match so far (and in Carlsen's whole career), Carlsen is good at holding his own when the opening is harmless or even worse for him. By giving up the fight for an opening advantage, I think Anand gave up one of his advantages, that of superior opening preparation.

### Accumulating small weaknesses

Anand did not play the middlegame well. As in round 4, he used time-consuming Knight maneuvers that ended up simply allowing Carlsen to complete piece development with a harmonious setup. The result was a simplified position that looked like it should be a draw.

To my surprise, however, Anand kept on voluntarily accepting small weaknesses in his positions, first in the form of doubled e Pawns and then even isolated doubled e Pawns, when the most "natural" moves blocking up the position seemed safe and effective to hold for a draw.

### Blundering a Pawn away

On the 38th move, Anand mysteriously blundered away a Pawn for no good reason whatsoever, in a position that seemed like it should be an easy blocked-up draw. This was a total shock to me. It made no sense whatsoever to me.

### Still a draw, but Carlsen set a trap

In the Rook and Pawn ending, it looked like the ending should still be a draw, but Carlsen kept playing and making progress on the King side. In fact, he abandoned his Queen side in order to attempt to win on the King side. It was a great winning try.

I will confess that while playing over the score at this point in the ending, I lost all confidence in my ability to really understand what was going on without computer aid. I turned on the chess engine to analyze the ending, and it's really quite tricky. Even at a critical moment when the ending was still drawable by White, there is a large number of forcing lines that must be examined. In any case, what happened was that Anand fell into a trap in which Carlsen had a fine deflecting and clearance sacrifice that forced a win. Wow.

### The state of the match

Anand is in terrible, terrible trouble. It's just that he has lost two games in a row, and almost certainly will not be able to make up the deficit in the remaining six games in the match. It's the way he's been losing: playing poorly in the middlegame in both rounds 5 and 6, then finally cracking and falling into difficult endings in which he failed to find the draws. He did in each game defend actively and resourcefully in the endings, with plans that should have worked, but each time he eventually blundered.

I hope Anand comes back to play well, regardless of the final outcome of the match, but right now, it looks like Carlsen is the one who has not made any blunders yet of the magnitude of Anand's.

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
    SetInitialGame(6);
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
