---
layout: post
title: "World Chess Championship 2013 round 10: Magnus Carlsen is the new world champion"
date: 2013-11-22T18:17:34-05:00
comments: true
external-url: 
categories: 
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Sicilian Defense
- Maróczy Bind
- Hedgehog Defense
---
In my continuing coverage of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), today I cover round ten, in which a draw gave 22-year-old Magnus Carlsen the FIDE World Chess Champion title. Congratulations to Carlsen, and thank you, Anand, for showing your fighting spirit by playing the Sicilian Defense today!

Game and notes below:

<!--more-->

## My opening predictions for today

I announced my opening predictions the night before today's game.

My primary prediction was that Carlsen would play `1 e4` and Anand would play `c5` for an aggressive Najdorf Sicilian, and that Carlsen would play a `Be2/Nf3` line in response. My secondary prediction was that if Carlsen played something other than `1 e4`, then Anand would try a King's Indian as Black.

## Summary of the game

It turns out that I was partially right in my prediction. There was a Sicilian Defense, and Anand did try entering a Najdorf. I was very happy to see this, because there was some discussion among my chess friends yesterday about whether Anand would simply play for a safe, quick draw, rather than try to fight back in the match for a win. Anand did try to fight back after all, playing the riskiest variation even against Carlsen's avoidance of the Najdorf with the drawish Moscow Variation.

Objectively the middlegame was very equal for some time, as Anand set up a [Hedgehog](http://en.wikipedia.org/wiki/Hedgehog_%28chess%29) position against Carlsen's Maróczy Bind setup. In fact, Anand implicitly offered a draw by shuffling his King back and forth. Carlsen decided to play on for a win, advancing on the Queenside with `a4`.

Shortly after that, Anand started slipping a bit, allowing Carlsen to improve White's position, and at one critical point Anand made a big blunder that should have lost the game, hanging the important `d6` Pawn to White's capture by the `e5` Pawn. But Carlsen prematurely captured the Pawn too early, allowing Anand to regain it and simplify into a Knight and Pawn ending that should be a draw.

However, White had chances because of the Queen side majority and more active King. Anand found very sharp counterplay that caused Carlson to decide to stop playing for a possible win, and shut the game down for a draw.

### The state of the match

Carlsen is the new world champion!

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
    SetInitialGame(10);
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
