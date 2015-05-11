---
layout: post
title: "World Chess Championship 2013, round 5: Carlsen wins in a tense positional battle when Anand blunders!"
date: 2013-11-15T20:27:57-05:00
comments: true
external-url: 
categories:
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Semi-Slav
---
In my continuing coverage of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), today I cover round five, a subtle positional battle in which Carlsen won in the ending. This was the first win by either player in the match!

Game and notes below:

<!--more-->

## Summary

Carlsen as White gave up on Nf3 and played c4 instead, a very smart choice, as it prevents Black from immediately playing d5. Anand used the Triangle System to try to transpose to a [Semi-Slav](http://en.wikipedia.org/wiki/Semi-Slav_Defense), an opening that he has shown fantastic preparation for as Black in the past, including a [recent brilliancy](/blog/2013/01/18/modern-chess-computers-shutting-down-opening-theory-part-2).

Carlsen sidestepped the Semi-Slav by playing the Marshall Gambit, but cleverly without the gambit, choosing a quiet line instead. After a Queen trade, Carlsen maintained some pressure, and eventually Anand pressed hard for counterplay in an ending in which he stood slightly worse the whole time. Unfortunately, at the critical moment, he mysteriously blundered just as he could have bailed out with a draw, lost the wrong Pawns, and allowed White to simplify into an easy win.

I found this game quite interesting because of the themes of bad Bishops, weak Pawns, and weak squares. Precise calculation is necessary to hold off or create invasions for either side.

### The state of the match

Although Anand showed creativity in his attempt at Queen side counterplay, and in theory he could have held the draw, Carlsen clearly had the more comfortable and safe advantage for much of the game. Finally winning a game is a huge deal, of course. And Anand cannot be happy that he suddenly cracked during the game and lost. But it was not a one-sided game all the way through: it was only at the final moment when Anand made the losing move.

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
    SetInitialGame(5);
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
