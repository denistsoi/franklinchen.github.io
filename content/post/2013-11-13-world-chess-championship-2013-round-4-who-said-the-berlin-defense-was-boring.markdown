---
layout: post
title: "World Chess Championship 2013, round 4: who said the Berlin Defense was boring?"
date: 2013-11-13T21:49:28-05:00
comments: true
external-url: 
categories: 
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Berlin Defense
---
In my continuing coverage of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), today I cover round four, the most exciting and longest game of the match so far! Things are really heating up!

Game and notes below:

<!--more-->

## Summary

The game featured Carlsen as Black defending against Anand as White using the "infamous" Berlin Defense. I saw a bit more about the Berlin Defense in [a companion post](/blog/2013/11/13/the-exact-moment-i-fell-in-love-with-the-berlin-defense-for-black-in-chess/). Let's just say that it has had a reputation as a "boring" defensive opening for Black.

But this game was hardly boring. Anand seemed to falter in the opening as White, embarking on time-consuming Knight maneuvers that seemed to give Carlsen time to neutralize any attacking ideas. But then Anand provocatively offered a Pawn sacrifice, which Carlsen did not actually need to accept, but did. Then Anand pushed Carlsen's Bishop and Knight all the way back, in an attempt to just run him over with a thematic King side majority Pawn storm. The computer says this was not really sound, but it was *exciting* to see an aggressive, risk-taking Anand for the first time in the match, after his cautious play in the first three rounds.

Carlsen came up with good counterplay, but in very complex positions, began faltering, and could not refute Anand's play, even as Anand was fighting for his life. Anand sacrificed a second Pawn to continue the attack. That was an amazing idea to find! Carlsen finally faltered enough to allow Anand to achieve a drawn position. What an amazing game!

Warning: analyzing the game with a computer might give the wrong idea about whether Anand was lost or not during the game, because the positions are so complex that no human could have been expected under the circumstances (the game went for hours and hours) to calculate everything perfectly. From a practical point of view, Anand's attacking ideas were definitely difficult to counter, and it is to both Carlsen's credit and Anand's that they played out this game to a fighting draw.

### The state of the match

I think the situation is about even now for both players. Anand has proved in this round that he is in fact able and willing to fight, and Carlsen has continued his tenacity.

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
    SetInitialGame(4);
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
