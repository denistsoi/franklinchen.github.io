var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,2,2,2,2,1,
   1,0,0,0,1,1,1,1,0,1,1,1,2,2,2,2,1,0,0,0,1,1,1,1,1,1,1,
   1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,
   0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

var cmovestyles = new Array (
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S16",
   "S16",
   "S31",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S18",
   "S18",
   "S18",
   "S18",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S17",
   "S16",
   "S31",
   "S17",
   "S17",
   "S18",
   "S18",
   "S18",
   "S18",
   "S17",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16",
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -",
   "rnbqkbnr/ppp1pppp/3p4/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -",
   "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -",
   "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -",
   "r1bqkb1r/pppnpppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -",
   "r1bqkb1r/pppnpppp/3p1n2/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq -",
   "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq -",
   "r1bqkb1r/pppn1ppp/3p1n2/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq -",
   "r1bqk2r/pppnbppp/3p1n2/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R w KQkq -",
   "r1bqk2r/pppnbppp/3p1n2/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 b kq -",
   "r1bq1rk1/pppnbppp/3p1n2/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 w - -",
   "r1bq1rk1/pppnbppp/3p1n2/4p3/P1BPP3/2N2N2/1PP2PPP/R1BQ1RK1 b - -",
   "r1bq1rk1/pp1nbppp/2pp1n2/4p3/P1BPP3/2N2N2/1PP2PPP/R1BQ1RK1 w - -",
   "r1bq1rk1/pp1nbppp/2pp1n2/4p3/P1BPP3/2N2N2/1PP2PPP/R1BQR1K1 b - -",
   "r1bq1rk1/pp1nbppp/2pp1n2/8/P1BpP3/2N2N2/1PP2PPP/R1BQR1K1 w - -",
   "r1bq1rk1/pp1nbppp/2pp1n2/8/P1BNP3/2N5/1PP2PPP/R1BQR1K1 b - -",
   "r1bq1rk1/pp2bppp/2pp1n2/4n3/P1BNP3/2N5/1PP2PPP/R1BQR1K1 w - -",
   "r1bq1rk1/pp2bppp/2pp1n2/4n3/P2NP3/2N5/BPP2PPP/R1BQR1K1 b - -",
   "r1bqnrk1/pp2bppp/2pp4/4n3/P2NP3/2N5/BPP2PPP/R1BQR1K1 w - -",
   "r1bqnrk1/pp2bppp/2pp4/4n3/P2NPP2/2N5/BPP3PP/R1BQR1K1 b - -",
   "r1bqnrk1/pp2bppp/2pp2n1/8/P2NPP2/2N5/BPP3PP/R1BQR1K1 w - -",
   "r1bqnrk1/pp2bppp/2pp2n1/8/P2NPP2/2N1B3/BPP3PP/R2QR1K1 b - -",
   "r1bq1rk1/ppn1bppp/2pp2n1/8/P2NPP2/2N1B3/BPP3PP/R2QR1K1 w - -",
   "r1bq1rk1/ppn1bppp/2pp2n1/7Q/P2NPP2/2N1B3/BPP3PP/R3R1K1 b - -",
   "r1bq1rk1/ppn2ppp/2pp1bn1/7Q/P2NPP2/2N1B3/BPP3PP/R3R1K1 w - -",
   "r1bq1rk1/ppn2ppp/2pp1bn1/7Q/P2NPP2/2N1B3/BPP3PP/3RR1K1 b - -",
   "r1bq1rk1/ppn2ppp/2pp2n1/7Q/P2bPP2/2N1B3/BPP3PP/3RR1K1 w - -",
   "r1bq1rk1/ppn2ppp/2pp2n1/7Q/P2RPP2/2N1B3/BPP3PP/4R1K1 b - -",
   "r2q1rk1/ppn2ppp/2ppb1n1/7Q/P2RPP2/2N1B3/BPP3PP/4R1K1 w - -",
   "r2q1rk1/ppn2ppp/2ppb1n1/7Q/P2RPP2/2N1B3/BPP3PP/3R2K1 b - -",
   "r2q1rk1/ppn2ppp/2ppb1n1/7Q/P2RPP2/2N1B3/1PP3PP/1B2R1K1 b - -",
   "r2q1rk1/ppn2ppp/2pp2n1/7Q/P2RPP2/2N1B3/bPP3PP/3R2K1 w - -",
   "r2q1rk1/ppn2ppp/2pR2n1/7Q/P3PP2/2N1B3/bPP3PP/3R2K1 b - -",
   "r2q1rk1/ppn2ppp/2pp2n1/7Q/P2RPP2/4B3/NPP3PP/3R2K1 b - -",
   "r3qrk1/ppn2ppp/2pR2n1/7Q/P3PP2/2N1B3/bPP3PP/3R2K1 w - -",
   "r3qrk1/ppn2ppp/2pR2n1/5P1Q/P3P3/2N1B3/bPP3PP/3R2K1 b - -",
   "r3qrk1/ppn2ppp/2pR2n1/8/P3PP2/2N1B3/bPP1Q1PP/3R2K1 b - -",
   "r3qrk1/ppn2ppp/2pRb1n1/8/P3PP2/2N1B3/1PP1Q1PP/3R2K1 w - -",
   "r3qrk1/ppn2ppp/2pRb1n1/5P2/P3P3/2N1B3/1PP1Q1PP/3R2K1 b - -",
   "r3qrk1/pp3ppp/2pR2n1/3n1P1Q/P3P3/2N1B3/bPP3PP/3R2K1 w - -",
   "r3qrk1/pp3ppp/2pR2n1/3N1P1Q/P3P3/4B3/bPP3PP/3R2K1 b - -",
   "r3qrk1/pp3ppp/2pR2n1/3b1P1Q/P3P3/4B3/1PP3PP/3R2K1 w - -",
   "r3qrk1/pp3ppp/2pR2P1/3b3Q/P3P3/4B3/1PP3PP/3R2K1 b - -",
   "r3qrk1/pp3pp1/2pR2p1/3b3Q/P3P3/4B3/1PP3PP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/3b4/P3P3/4BQ2/1PP3PP/3R2K1 b - -",
   "r3qrk1/pp3pp1/2pR2p1/3b4/P3P2Q/4B3/1PP3PP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/3b4/P3q2Q/4B3/1PP3PP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/8/P3b2Q/4B3/1PP3PP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/8/P3b2Q/4B3/1PP3PP/4R1K1 b - -",
   "r3qrk1/pp4p1/2pR2p1/5p2/P3b2Q/4B3/1PP3PP/4R1K1 w - -",
   "r3qrk1/pp4p1/2pR2p1/5p2/P3b2Q/2P1B3/1P4PP/4R1K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/3b4/P3Q3/4B3/1PP3PP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/8/P3b3/4B3/1PP3PP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/8/P3b3/4BQ2/1PP3PP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/8/P3b3/4B3/1PP2QPP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/4q3/P3b3/4B3/1PP2QPP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/8/P7/4B3/1Pb2QPP/3R2K1 w - -",
   "r3qrk1/pp3pp1/2pR2p1/8/P7/4B3/1Pb2QPP/4R1K1 b - -",
   "r3qrk1/pp3pp1/2pR2p1/5b2/P7/4B3/1P3QPP/4R1K1 w - -",
   "r3qrk1/Bp3pp1/2pR2p1/5b2/P7/8/1P3QPP/4R1K1 b - -",
   "r4rk1/pp3pp1/2p3p1/4q3/P3b3/4B3/1PPR1QPP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/4q3/P3b3/2P1B3/1P3QPP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/3bq3/P7/2P1B3/1P3QPP/3R2K1 w - -",
   "r4rk1/pp1R1pp1/2p3p1/3bq3/P7/2P1B3/1P3QPP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/3bq3/P4B2/2P5/1P3QPP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/3b4/P3qB2/2P5/1P3QPP/3R2K1 w - -",
   "r4rk1/pp3pp1/2pR2p1/P2b4/4qB2/2P5/1P3QPP/3R2K1 b - -",
   "r4rk1/pp3pp1/2pR2p1/P2b4/q4B2/2P5/1P3QPP/3R2K1 w - -",
   "r4rk1/p2R1pp1/1pp3p1/3bq3/P7/2P1B3/1P3QPP/3R2K1 w - -",
   "r4rk1/pp3pp1/2p3p1/8/P3b3/4B3/1qPR1QPP/3R2K1 w - -",
   "r4rk1/Bp3pp1/2p3p1/8/P3b3/8/1qPR1QPP/3R2K1 b - -",
   "r4rk1/Bp3pp1/2p3p1/5b2/P7/8/1qPR1QPP/3R2K1 w - -",
   "r4rk1/Bp3pp1/2p3p1/8/P3b3/8/q1PR1QPP/3R2K1 w - -",
   "r4rk1/Bp1R1pp1/2p3p1/8/P3b3/8/q1P2QPP/3R2K1 b - -",
   "r4rk1/Bp1R1pp1/2p3p1/8/P3b3/8/2q2QPP/3R2K1 w - -",
   "r4rk1/Bp1R1pp1/2p3p1/8/P3b3/8/2Q3PP/3R2K1 b - -",
   "r4rk1/Bp1R1pp1/2p3p1/8/P7/8/2b3PP/3R2K1 w - -",
   "r4rk1/Bp1R1pp1/2p3p1/8/P7/8/2bR2PP/6K1 b - -",
   "5rk1/rp1R1pp1/2p3p1/8/P7/8/2bR2PP/6K1 w - -",
   "5rk1/rp1R1pp1/2p3p1/8/P7/8/2R3PP/6K1 b - -",
   "r5k1/rp1R1pp1/2p3p1/8/P7/8/2R3PP/6K1 w - -",
   "r4rk1/Bp3pp1/2p3p1/5b2/P7/7P/1qPR1QP1/3R2K1 b - -",
   "r4rk1/Bp3pp1/2p3p1/5b2/P7/7P/q1PR1QP1/3R2K1 w - -",
   "r4rk1/Bp3pp1/2p3p1/5b2/P2Q4/7P/q1PR2P1/3R2K1 b - -",
   "r3r1k1/Bp3pp1/2p3p1/5b2/P2Q4/7P/q1PR2P1/3R2K1 w - -",
   "r2r2k1/Bp3pp1/2p3p1/5b2/P2Q4/7P/q1PR2P1/3R2K1 w - -",
   "r2Q2k1/Bp3pp1/2p3p1/5b2/P7/7P/q1PR2P1/3R2K1 b - -",
   "3r2k1/Bp3pp1/2p3p1/5b2/P7/7P/q1PR2P1/3R2K1 w - -",
   "3R2k1/Bp3pp1/2p3p1/5b2/P7/7P/q1P3P1/3R2K1 b - -",
   "3R4/Bp3ppk/2p3p1/5b2/P7/7P/q1P3P1/3R2K1 w - -",
   "r3r1k1/Bp3pp1/2p3p1/5b2/P2Q4/7P/q1PR2P1/R5K1 b - -",
   "r3r1k1/Bp3pp1/2p1q1p1/5b2/P2Q4/7P/2PR2P1/R5K1 w - -",
   "r3r1k1/1p3pp1/1Bp1q1p1/5b2/P2Q4/7P/2PR2P1/R5K1 b - -",
   "r3r1k1/1p3pp1/1Bp3p1/5b2/P2Qq3/7P/2PR2P1/R5K1 w - -",
   "r3r1k1/1p3pp1/1Bp3p1/5b2/P2Qq3/2P4P/3R2P1/R5K1 b - -",
   "r3r1k1/1p3pp1/1Bp3p1/5b2/P3Q3/7P/2PR2P1/R5K1 b - -",
   "r5k1/1p3pp1/1Bp3p1/5b2/P3r3/7P/2PR2P1/R5K1 w - -",
   "r5k1/1p3pp1/1Bp3p1/P4b2/4r3/7P/2PR2P1/R5K1 b - -",
   "r3r1k1/1p2qpp1/1Bp3p1/5b2/P2Q4/2P4P/3R2P1/R5K1 w - -",
   "r3r1k1/1p2qpp1/1Bp3p1/P4b2/3Q4/2P4P/3R2P1/R5K1 b - -",
   "r3r1k1/1p3pp1/1Bp3p1/P4bq1/3Q4/2P4P/3R2P1/R5K1 w - -",
   "r3r1k1/1p3pp1/1Bp3p1/P4bq1/3Q4/2P4P/3R2PK/R7 b - -",
   "r5k1/1p3pp1/1Bp3p1/P4bq1/3Qr3/2P4P/3R2PK/R7 w - -",
   "r5k1/1p3pp1/1Bp3p1/P4bq1/4r3/2P4P/3R1QPK/R7 b - -",
   "r5k1/1p3pp1/1Bp1b1p1/P5q1/4r3/2P4P/3R1QPK/R7 w - -",
   "r5k1/1p3pp1/1Bp1b1p1/P5q1/3Rr3/2P4P/5QPK/R7 b - -",
   "r5k1/1p3pp1/1Bp1b1p1/P3r1q1/3R4/2P4P/5QPK/R7 w - -",
   "r5k1/1p3pp1/1Bp1b1p1/P3q3/3Rr3/2P4P/5QPK/R7 w - -",
   "r5k1/1p3pp1/1Bp1b1p1/P3r1q1/3R4/2P4P/5QPK/3R4 b - -",
   "4r1k1/1p3pp1/1Bp1b1p1/P3r1q1/3R4/2P4P/5QPK/3R4 w - -",
   "4r1k1/1p3pp1/1Bp1b1p1/P3r1q1/3R4/2P4P/3R1QPK/8 b - -",
   "4r1k1/1p3pp1/1Bp3p1/P2br1q1/3R4/2P4P/3R1QPK/8 w - -",
   "4r1k1/1p3pp1/1Bp3p1/P2br1q1/3R3Q/2P4P/3R2PK/8 b - -",
   "4r1k1/1p3pp1/1Bp3p1/P2br1q1/2PR4/7P/3R1QPK/8 b - -",
   "4r1k1/1p3pp1/1Bp1b1p1/P3r1q1/2PR4/7P/3R1QPK/8 w - -",
   "4r1k1/1pB2pp1/2p1b1p1/P3r1q1/2PR4/7P/3R1QPK/8 b - -",
   "4r1k1/1pB2pp1/2p1b1p1/P4rq1/2PR4/7P/3R1QPK/8 w - -",
   "4r1k1/1pB2pp1/2p1b1p1/P4rq1/2PR4/6QP/3R2PK/8 b - -",
   "4r1k1/1pB2pp1/2p1b1p1/P4r2/2PR4/6qP/3R2PK/8 w - -",
   "4r1k1/1pB2pp1/2p1b1p1/P4r2/2PR4/6KP/3R2P1/8 b - -",
   "4r1k1/1p3pp1/1Bp3p1/P2br3/3R3q/2P4P/3R2PK/8 w - -",
   "4r1k1/1p3pp1/1Bp3p1/P2br3/7R/2P4P/3R2PK/8 b - -",
   "4r1k1/1p3pp1/1Bp3p1/P2b4/7R/2P4P/3Rr1PK/8 w - -",
   "4r1k1/1p3pp1/1Bp3p1/P2b4/7R/2P4P/4R1PK/8 b - -",
   "6k1/1p3pp1/1Bp3p1/P2b4/7R/2P4P/4r1PK/8 w - -",
   "6k1/1p3pp1/1Bp3p1/P2b4/6R1/2P4P/4r1PK/8 b - -",
   "6k1/1p3pp1/1Bp3p1/P7/4b1R1/2P4P/4r1PK/8 w - -",
   "6k1/1p3pp1/1Bp3p1/P7/4b1R1/2P4P/4r1P1/6K1 b - -",
   "6k1/1p3pp1/1Bp3p1/P7/6R1/2Pb3P/4r1P1/6K1 w - -",
   "6k1/1p3pp1/1Bp3p1/P7/3R4/2Pb3P/4r1P1/6K1 b - -",
   "6k1/1p3pp1/bBp3p1/P7/3R4/2P4P/4r1P1/6K1 w - -",
   "6k1/1p3pp1/bBp3p1/P7/2PR4/7P/4r1P1/6K1 b - -",
   "6k1/1p3pp1/bBp3p1/P7/2PR4/7P/2r3P1/6K1 w - -",
   "6k1/1p3pp1/bBp3p1/P1P5/3R4/7P/2r3P1/6K1 b - -",
   "3R2k1/1p3pp1/bBp3p1/P7/2P5/7P/2r3P1/6K1 b - -",
   "3R4/1p3ppk/bBp3p1/P7/2P5/7P/2r3P1/6K1 w - -",
   "8/1p1R1ppk/bBp3p1/P7/2P5/7P/2r3P1/6K1 b - -",
   "8/1p1R2pk/bBp2pp1/P7/2P5/7P/2r3P1/6K1 w - -",
   "8/1p1R2pk/b1p2pp1/P1B5/2P5/7P/2r3P1/6K1 b - -",
   "8/1p1R2pk/b1p2pp1/P1B5/2r5/7P/6P1/6K1 w - -",
   "5B2/1p1R2pk/b1p2pp1/P7/2r5/7P/6P1/6K1 b - -",
   "5Bk1/1p1R2p1/b1p2pp1/P7/2r5/7P/6P1/6K1 w - -",
   "6k1/1p1R2B1/b1p2pp1/P7/2r5/7P/6P1/6K1 b - -",
   "6k1/1p1R2B1/b1p3p1/P4p2/2r5/7P/6P1/6K1 w - -",
   "6k1/1p3pp1/bBp3p1/P1P5/3R4/7P/4r1P1/6K1 w - -",
   "6k1/1p3pp1/bBp3p1/P1P5/3R4/7P/4r1PK/8 b - -",
   "6k1/1p3pp1/bBp3p1/P1P5/3R4/7P/2r3PK/8 w - -",
   "6k1/1p3pp1/bBp3p1/P1P5/3R4/7P/2r3P1/6K1 b - -",
   "6k1/1p4p1/bBp2pp1/P1P5/3R4/7P/2r3P1/6K1 w - -",
   "6k1/1p4p1/bBp2pp1/P1P5/3R3P/8/2r3P1/6K1 b - -",
   "6k1/1p4p1/bBp2pp1/P1P5/3R3P/8/4r1P1/6K1 w - -",
   "6k1/1p4p1/bBp2pp1/P1P5/3R3P/8/4r1PK/8 b - -",
   "6k1/1p4p1/bBp2pp1/P1P5/3R3P/4r3/6PK/8 w - -",
   "6k1/1p1R2p1/bBp2pp1/P1P5/7P/4r3/6PK/8 b - -",
   "8/1p1R2pk/bBp2pp1/P1P5/7P/4r3/6PK/8 w - -",
   "8/1p1R2pk/bBp2pp1/P1P5/7P/4r1P1/7K/8 b - -",
   "8/1p1R2pk/bBp2pp1/P1P5/7P/6P1/4r2K/8 w - -",
   "8/1p1R2pk/bBp2pp1/P1P5/7P/6P1/4r3/6K1 b - -",
   "8/1p1R2p1/bBp2ppk/P1P5/7P/6P1/4r3/6K1 w - -",
   "8/1p4p1/bBp2ppk/P1P5/3R3P/6P1/4r3/6K1 b - -",
   "8/1p4p1/bBp2p1k/P1P3p1/3R3P/6P1/4r3/6K1 w - -",
   "8/1pB3p1/b1p2p1k/P1P3p1/3R3P/6P1/4r3/6K1 b - -",
   "8/1pB3p1/b1p2p1k/P1P5/3R3p/6P1/4r3/6K1 w - -",
   "8/1pB3p1/b1p2p1k/P1P5/7R/6P1/4r3/6K1 b - -",
   "8/1pB3p1/b1p2pk1/P1P5/7R/6P1/4r3/6K1 w - -",
   "8/1pB3p1/b1p2pk1/P1P5/3R4/6P1/4r3/6K1 b - -",
   "8/1pB3p1/b1p2p2/P1P2k2/3R4/6P1/4r3/6K1 w - -",
   "3B4/1p4p1/b1p2p2/P1P2k2/3R4/6P1/4r3/6K1 b - -",
   "3Br3/1p4p1/b1p2p2/P1P2k2/3R4/6P1/8/6K1 w - -",
   "3Br3/1p4p1/b1p2p2/P1P2k2/3R4/6P1/5K2/8 b - -",
   "3Br3/1p6/b1p2p2/P1P2kp1/3R4/6P1/5K2/8 w - -",
   "3Br3/1p6/b1p2p2/P1P2kp1/3R2P1/8/5K2/8 b - -",
   "3Br3/1p6/b1p2pk1/P1P3p1/3R2P1/8/5K2/8 w - -",
   "3Br3/1p6/b1pR1pk1/P1P3p1/6P1/8/5K2/8 b - -",
   "3B1r2/1p6/b1pR1pk1/P1P3p1/6P1/8/5K2/8 w - -",
   "3B1r2/1p6/b1pR1pk1/P1P3p1/6P1/6K1/8/8 b - -",
   "3B4/1p3r2/b1pR1pk1/P1P3p1/6P1/6K1/8/8 w - -",
   "3B4/1p3r2/b1pR1pk1/P1P3p1/6P1/7K/8/8 b - -",
   "3B4/1p3r2/2pR1pk1/P1P3p1/6P1/7K/4b3/8 w - -",
   "3B4/1p3r2/2pR1pk1/P1P3p1/6P1/6K1/4b3/8 b - -",
   "3B4/1p3r2/2pR1pk1/P1P3p1/2b3P1/6K1/8/8 w - -",
   "3B4/1p3r2/2pR1pk1/P1P3p1/2b3P1/7K/8/8 b - -",
   "3B4/1p3r2/2pR1pk1/P1P3p1/6P1/7K/4b3/8 w - -");

var cmoves = new Array ( 
   "[*]",
   "1.d4",
   "1...d6",
   "2.e4",
   "2...Nf6",
   "3.Nc3",
   "3...Nbd7",
   "4.Nf3",
   "4...e5",
   "5.Bc4",
   "5...Be7",
   "6.O-O",
   "6...O-O",
   "7.a4",
   "7...c6",
   "8.Re1",
   "8...exd4",
   "9.Nxd4",
   "9...Ne5",
   "10.Ba2",
   "10...Ne8",
   "11.f4",
   "11...Ng6",
   "12.Be3",
   "12...Nc7",
   "13.Qh5",
   "13...Bf6",
   "14.Rad1",
   "14...Bxd4",
   "15.Rxd4",
   "15...Be6",
   "16.Red1",
   "16.Bb1",
   "16...Bxa2",
   "17.Rxd6",
   "17.Nxa2",
   "17...Qe8",
   "18.f5",
   "18.Qe2",
   "18...Be6",
   "19.f5",
   "18...Nd5",
   "19.Nxd5",
   "19...Bxd5",
   "20.fxg6",
   "20...hxg6",
   "21.Qf3",
   "21.Qh4",
   "21...Qxe4",
   "21...Bxe4",
   "22.Re1",
   "22...f5",
   "23.c3",
   "22.Qxe4",
   "22...Bxe4",
   "21...Bxe4",
   "22.Qf2",
   "22...Qe5",
   "22...Bxc2",
   "23.Re1",
   "23...Bf5",
   "24.Bxa7",
   "23.R6d2",
   "23.c3",
   "23...Bd5",
   "24.Rd7",
   "24.Bf4",
   "24...Qe4",
   "25.a5",
   "25...Qa4",
   "24...b6",
   "23...Qxb2",
   "24.Bxa7",
   "24...Bf5",
   "24...Qa2",
   "25.Rd7",
   "25...Qxc2",
   "26.Qxc2",
   "26...Bxc2",
   "27.R1d2",
   "27...Rxa7",
   "28.Rxc2",
   "28...Rfa8",
   "25.h3",
   "25...Qa2",
   "26.Qd4",
   "26...Rfe8",
   "26...Rfd8",
   "27.Qxd8",
   "27...Rxd8",
   "28.Rxd8",
   "28...Kh7",
   "27.Ra1",
   "27...Qe6",
   "28.Bb6",
   "28...Qe4",
   "29.c3",
   "29.Qxe4",
   "29...Rxe4",
   "30.a5",
   "29...Qe7",
   "30.a5",
   "30...Qg5",
   "31.Kh2",
   "31...Re4",
   "32.Qf2",
   "32...Be6",
   "33.Rd4",
   "33...Re5",
   "33...Qe5",
   "34.Rad1",
   "34...Re8",
   "35.R1d2",
   "35...Bd5",
   "36.Qh4",
   "36.c4",
   "36...Be6",
   "37.Bc7",
   "37...Rf5",
   "38.Qg3",
   "38...Qxg3",
   "39.Kxg3",
   "36...Qxh4",
   "37.Rxh4",
   "37...Re2",
   "38.Rxe2",
   "38...Rxe2",
   "39.Rg4",
   "39...Be4",
   "40.Kg1",
   "40...Bd3",
   "41.Rd4",
   "41...Ba6",
   "42.c4",
   "42...Rc2",
   "43.c5",
   "43.Rd8",
   "43...Kh7",
   "44.Rd7",
   "44...f6",
   "45.Bc5",
   "45...Rxc4",
   "46.Bf8",
   "46...Kg8",
   "47.Bxg7",
   "47...f5",
   "43...Re2",
   "44.Kh2",
   "44...Rc2",
   "45.Kg1",
   "45...f6",
   "46.h4",
   "46...Re2",
   "47.Kh2",
   "47...Re3",
   "48.Rd7",
   "48...Kh7",
   "49.g3",
   "49...Re2",
   "50.Kg1",
   "50...Kh6",
   "51.Rd4",
   "51...g5",
   "52.Bc7",
   "52...gxh4",
   "53.Rxh4",
   "53...Kg6",
   "54.Rd4",
   "54...Kf5",
   "55.Bd8",
   "55...Re8",
   "56.Kf2",
   "56...g5",
   "57.g4",
   "57...Kg6",
   "58.Rd6",
   "58...Rf8",
   "59.Kg3",
   "59...Rf7",
   "60.Kh3",
   "60...Be2",
   "61.Kg3",
   "61...Bc4",
   "62.Kh3",
   "62...Be2");

