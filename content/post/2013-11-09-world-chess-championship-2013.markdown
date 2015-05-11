---
layout: post
title: "World Chess Championship 2013 Round 1: how to understand the short 16-move Carlsen-Anand draw"
date: 2013-11-09T12:00:33-05:00
disqus_identifier: "http://franklinchen.com/blog/2013/11/09/world-chess-championship-2013/"
disqus_url: "http://franklinchen.com/blog/2013/11/09/world-chess-championship-2013/"
url: "blog/2013/11/09/world-chess-championship-2013/"
comments: true
external-url: 
categories:
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Réti Opening
- Grünfeld Defense
---
In the much-anticipated first round of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), the game ended in a very quick 16-move draw.

In accordance with [my own advice on ways to follow the match to maximize learning](/blog/2013/11/07/the-chess-improver-how-to-watch-the-anand-carlsen-world-chess-championship-to-improve-your-own-game/), today I saw the match result, downloaded a PGN file of the game score, and then walked through it *without* a computer engine running, analyzing the game with my own mind as I replayed the game. Then I double-checked my thoughts with a chess engine. I still have not bothered to read or watch any coverage of this first-round game; I will do that later.

Game and notes below:

<!--more-->

## Disappointment in a short draw?

I'm sure a lot of people were disappointed by this short draw. But one has to realized exactly what happened.

Carlsen played the unambitious [Réti Opening](http://en.wikipedia.org/wiki/R%C3%A9ti_Opening) as White, presumably hoping to avoid special preparation by Anand. Anand neutralized the opening early on with simple development using a [Grünfeld Defense](http://en.wikipedia.org/wiki/Gr%C3%BCnfeld_Defence) setup. Carlsen attempted to place his remaining undeveloped piece, the Queen Knight, on a more active square than the more "natural" square that would have overprotected the c4 Pawn, but Anand punished this by immediately attacking the c4 Pawn, resulting in Carlsen basically having to play moves that enabled Anand to choose to repeat the position for a draw.

Carlsen had no choice but to take the draw or stand clearly worse, so he bailed out. The question then is, should Anand tried to continue playing for a win, since it was his choice to take the draw or not?

In a match situation at this level, typically the player as Black is quite happy to take a draw, so it made sense for Anand to do so. It was possible for Anand to not force the draw, at the cost of loosening up his own Queen side, but why play in this risky way, as defending champion?

## The game

Below is the game with annotations. My task was made easy in this case because it was such a short and clear game, without much complexity. I hope it will be harder in subsequent games in the match!

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
    SetInitialGame(1);
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
