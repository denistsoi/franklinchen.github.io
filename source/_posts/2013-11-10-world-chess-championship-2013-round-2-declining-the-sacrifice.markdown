---
layout: post
title: "World Chess Championship 2013, Round 2: declining the sacrifice"
date: 2013-11-10T13:09:00-05:00
comments: true
external-url: 
categories:
- chess
- Magnus Carlsen
- Viswanathan Anand
---
[Yesterday, I covered the first round](/blog/2013/11/09/world-chess-championship-2013/) of the [World Chess Championship between Anand and Carlsen](http://chennai2013.fide.com/), which ended in a quick draw.

Today, in the second round, the colors were reversed, with Anand as White and Carlsen as Black. The game also ended in a draw, but featured much more interesting positions and possibilities.

## Summary

Anand played an interesting attacking idea in the opening that featured maintaining a strong Knight on the e5 square to hamper Black's development. This idea inherently involved offering a sacrifice of his h4 Pawn.

If Carlsen had accepted the sacrifice, I believe Anand would have had good winning chances. It was a positional sacrifice, with no immediate punishment in sight if Black had taken the Pawn, but there would have been long-term compensation for White. Carlsen wisely declined to take the Pawn, but in doing so deprived spectators of a fierce attacking game!

Unfortunately, after Anand offered a trade of a Knight, the result was that all the Knights were traded off, and then Carlsen offered to trade Queens. Anand could have held out and refused, but for some reason decided to trade, which meant a resulting position that was clearly drawn, and sure enough, a draw was agreed shortly thereafter.

Carlsen can be happy about the outcome of the game. Anand seemed too quick to trade off pieces when it was not necessary, even if White's spatial advantage and head start on the King side attack was only small, and there was always the danger that allowing Black to start a counterattack on the Queen side would create complications.

This is now the second game in a row in which Anand had some advantage but rejected opportunities to maintain complexity in search of a win.

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
    SetInitialGame(2);
    SetShortcutKeysEnabled(true);
</script>

<table>
    <tr valign="top">
      <td>
        <div id="GameBoard"></div>
        <div id="GameButtons"></div>
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
        <br/>
        <br/>
        <span class="label">Move comment:</span><br><span id="GameLastComment"></span>
      </td>
    </tr>
</table>

<hr/>

<div id="GameText"></div>
