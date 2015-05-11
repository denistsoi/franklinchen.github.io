---
layout: post
title: "World Chess Championship 2013, round 3: a fighting game worth studying"
date: 2013-11-12T22:47:56-05:00
comments: true
external-url: 
categories:
- chess
- World Chess Championship
- Magnus Carlsen
- Viswanathan Anand
- Réti Opening
- Grünfeld Defense
- Sicilian Defense
- Maróczy Bind
---
In my continuing coverage of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), today I cover round three, an exciting fighting game well worth studying.

Game and notes below:

<!--more-->

## Summary

If you were bored by the [first round](/blog/2013/11/09/world-chess-championship-2013/) and the [second round](/blog/2013/11/10/world-chess-championship-2013-round-2-declining-the-sacrifice/) games, because the play in both games involved no major errors and therefore ended quickly in a draw, study this third round game, even though it too ended in a draw!

Carlsen opened with the unambitious [Réti Opening](http://en.wikipedia.org/wiki/R%C3%A9ti_Opening) yet again, and Anand was happy to repeat the [Grünfeld Defense](http://en.wikipedia.org/wiki/Gr%C3%BCnfeld_Defence) setup of round 1. Carlsen varied by a very quick c4 thrust against Anand's d5 Pawn, but Anand played the most aggressive continuation, taking the Pawn, guaranteeing an asymmetrical Pawn structure and therefore a chance at fighting chess.

### The ambitious Maróczy Bind

In fact, Anand aggressively adopted a reverse [Dragon Sicilian Defense](http://en.wikipedia.org/wiki/Sicilian_Defence,_Dragon_Variation) setup, with good long-term positional prospects as Black. Furthermore, he also quickly chose a plan to try to transform the position into a deadly reverse [Maróczy Bind](http://en.wikipedia.org/wiki/Mar%C3%B3czy_Bind) structure to squeeze Carlsen to death. Carlsen played inaccurately and in fact allowed Anand to adopt this structure.

If you are not familiar with the Maróczy Bind setup, check out a couple of my games in which I won using it, so you can see what can happen against weak defense:

- [as White](/blog/2012/09/19/round-3-of-pittsburgh-chess-club-tournament-another-approach-against-the-sicilian-squeezing-with-the-bind/)
- [in reverse as Black](http://chessimprover.com/the-value-of-thematic-complete-games-against-a-weaker-opponent/)

### Carlsen's defense

Carlsen decided that instead of risking being squeezed to death, he would lash out and sacrifice a Pawn to get some open lines and possibly get chances against Anand's King in order to simplify to a draw. I'm not sure whether it was sound, and Anand may have been able to play more challengingly to win (I have not done the intensive computer analysis to draw a conclusion), but in the end Anand wound up allowing simplification and losing back the won Pawn with a dead drawn ending.

### The state of the match: Carlsen under real pressure

This is now the *third game in a row in which Anand acquired an advantage out of the opening*. And in each game, his advantage in the game has only grown. This trend is not at all good for Carlsen. He has been completely neutralized as Anand has consistently gained superior space and piece play. Carlsen had to fight hard for a draw in this game. As White in two games now, he has been playing the opening poorly, which one does not need to be a world class player to see. Is this rope-a-dope or what?

But what about Anand? Why did he keep on taking the safe way out to a draw in three games when he could have avoided *simplification* each time in an attempt to win? If Anand plays cautiously when he has the advantage, what might happen if Carlsen starts playing differently and gets Anand's back against the wall in a game?

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
    SetInitialGame(3);
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
