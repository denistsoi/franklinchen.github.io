var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,2,2,1,0,
   0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
   1,0,1,1,2,2,1,1,1,1,1,0,0,0,0,0,0,1,1,2,2,1,0,0,1,1,1,
   0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,
   0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,
   1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,
   0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

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
   "S31",
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
   "S18",
   "S18",
   "S17",
   "S16",
   "S16",
   "S31",
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
   "S31",
   "S17",
   "S17",
   "S17",
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
   "S17",
   "S17",
   "S16",
   "S31",
   "S17",
   "S18",
   "S18",
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
   "S31",
   "S17",
   "S18",
   "S18",
   "S17",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S16",
   "S31",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S31",
   "S16",
   "S31",
   "S17",
   "S17",
   "S17",
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
   "S31",
   "S17",
   "S17",
   "S17",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
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
   "S16",
   "S16",
   "S31",
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
   "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq -",
   "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/3B4/PPP2PPP/RNBQK1NR w KQkq -",
   "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/2PB4/PP3PPP/RNBQK1NR b KQkq -",
   "rnbqk2r/ppp1bppp/3p1n2/4p3/3PP3/2PB4/PP3PPP/RNBQK1NR w KQkq -",
   "rnbqk2r/ppp1bppp/3p1n2/4p3/3PP3/2PB1N2/PP3PPP/RNBQK2R b KQkq -",
   "rn1qk2r/ppp1bppp/3p1n2/4p3/3PP1b1/2PB1N2/PP3PPP/RNBQK2R w KQkq -",
   "rn1qk2r/ppp1bppp/3p1n2/4p3/3PP1b1/2PB1N2/PP3PPP/RNBQ1RK1 b kq -",
   "rn1qk2r/ppp1bppp/3p1n2/4p3/3PP1b1/2PB1N1P/PP3PP1/RNBQK2R b KQkq -",
   "rn1qk2r/ppp1bppp/3p1n2/4p2b/3PP3/2PB1N1P/PP3PP1/RNBQK2R w KQkq -",
   "rn1qk2r/ppp1bppp/3p1n2/4p2b/3PP3/2PBBN1P/PP3PP1/RN1QK2R b KQkq -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p2b/3PP3/2PBBN1P/PP3PP1/RN1QK2R w KQ -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p2b/3PP3/2PBBN1P/PP1N1PP1/R2QK2R b KQ -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p3/3PP1b1/2PB1N2/PP3PPP/RNBQ1RK1 w - -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p3/3PP1b1/2PB1N1P/PP3PP1/RNBQ1RK1 b - -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p2b/3PP3/2PB1N1P/PP3PP1/RNBQ1RK1 w - -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p2b/3PP3/2PB1N1P/PP1N1PP1/R1BQ1RK1 b - -",
   "rn1q1rk1/ppp1bppp/3p1n2/4p2b/3PP3/2PBBN1P/PP3PP1/RN1Q1RK1 b - -",
   "rn1q1rk1/pp2bppp/3p1n2/2p1p2b/3PP3/2PBBN1P/PP3PP1/RN1Q1RK1 w - -",
   "r2q1rk1/pppnbppp/3p1n2/4p2b/3PP3/2PBBN1P/PP3PP1/RN1Q1RK1 w - -",
   "r2q1rk1/pppnbppp/3p1n2/4p2b/3PP3/2PBBN1P/PP1N1PP1/R2Q1RK1 b - -",
   "rn1q1rk1/pp2bppp/3p1n2/2p1p2b/3PP3/2PBBN1P/PP1N1PP1/R2Q1RK1 b - -",
   "rn1q1rk1/pp2bppp/2pp1n2/4p2b/3PP3/2PB1N1P/PP1N1PP1/R1BQ1RK1 w - -",
   "rn1q1rk1/pp2bppp/2pp1n2/4p2b/3PP3/2PB1N1P/PP1N1PP1/R1BQR1K1 b - -",
   "rn1q1rk1/pp2bppp/2pp1n2/4p2b/3PP1P1/2PB1N1P/PP1N1P2/R1BQ1RK1 b - -",
   "r2q1rk1/pp1nbppp/2pp1n2/4p2b/3PP3/2PB1N1P/PP1N1PP1/R1BQR1K1 w - -",
   "r2q1rk1/pp1nbppp/2pp1n2/4p2b/3PP3/2PB1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2p2n2/3pp2b/3PP3/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2pp1n2/7b/3pP3/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2pp1n2/7b/3PP3/3B1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2p2n2/3p3b/3PP3/3B1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2p2n2/3pP2b/3P4/3B1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2p5/3pP2b/3Pn3/3B1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2p2n2/3Pp2b/3P4/2PB1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2p2n2/3P3b/3Pp3/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2p2n2/3P3b/3p4/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2P2n2/7b/3p4/2PB1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/p2nbppp/2p2n2/7b/3p4/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/p2nbppp/2p2n2/7b/3P4/3B1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2p5/3np2b/3P4/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2p5/3nP2b/8/2PB1N1P/PP3PP1/R1BQRNK1 b - -",
   "r4rk1/ppqnbppp/2p5/3nP2b/8/2PB1N1P/PP3PP1/R1BQRNK1 w - -",
   "r4rk1/ppqnbppp/2p5/3nP2b/8/2PBNN1P/PP3PP1/R1BQR1K1 b - -",
   "r4rk1/ppqnbppp/2p5/4P2b/8/2PBnN1P/PP3PP1/R1BQR1K1 w - -",
   "r4rk1/ppqnbppp/2p5/4P2b/8/2PBBN1P/PP3PP1/R2QR1K1 b - -",
   "r4rk1/ppqnbppp/2p5/4P3/8/2PBBb1P/PP3PP1/R2QR1K1 w - -",
   "r4rk1/ppqnbppp/2p5/4P3/8/2PBBQ1P/PP3PP1/R3R1K1 b - -",
   "r4rk1/ppq1bppp/2p5/4n3/8/2PBBQ1P/PP3PP1/R3R1K1 w - -",
   "r4rk1/ppq1bppp/2p5/4n3/5Q2/2PBB2P/PP3PP1/R3R1K1 b - -",
   "r4rk1/ppq2ppp/2pb4/4n3/5Q2/2PBB2P/PP3PP1/R3R1K1 w - -",
   "r4rk1/ppq2ppp/2pb4/4n3/5Q2/2P1B2P/PPB2PP1/R3R1K1 b - -",
   "r2q1rk1/pp1nbppp/2p2n2/3P3b/3PB3/2P2N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2P2n2/7b/3Pp3/2PB1N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2P2n2/8/3Pp3/2PB1b1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2P2n2/7b/3P4/2PB1p1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2P2n2/7b/3P2P1/2PB1p1P/PP3P2/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2P2n2/8/3Pp3/2PB1P1P/PP3P2/R1BQRNK1 b - -",
   "r2q1rk1/pp1nbppp/2P2n2/8/3P4/2Pp1P1P/PP3P2/R1BQRNK1 w - -",
   "r2q1rk1/pp1Pbppp/5n2/8/3P4/2Pp1P1P/PP3P2/R1BQRNK1 b - -",
   "r4rk1/pp1qbppp/5n2/8/3P4/2Pp1P1P/PP3P2/R1BQRNK1 w - -",
   "r4rk1/pp1qbppp/5n2/8/3P4/2PQ1P1P/PP3P2/R1B1RNK1 b - -",
   "r2q1rk1/pp1nbppp/2p5/3P3b/3Pn3/2P2N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1nbppp/2p5/3P3b/3PR3/2P2N1P/PP3PP1/R1BQ1NK1 b - -",
   "r2q1rk1/pp1nbppp/8/3p3b/3PR3/2P2N1P/PP3PP1/R1BQ1NK1 w - -",
   "r2q1rk1/pp1nbppp/8/3p3b/3P4/2P2N1P/PP3PP1/R1BQRNK1 b - -",
   "r2q1rk1/pp1n1ppp/3b4/3p3b/3P4/2P2N1P/PP3PP1/R1BQRNK1 w - -",
   "r2q1rk1/pp1n1ppp/3b4/3p3b/3P2P1/2P2N1P/PP3P2/R1BQRNK1 b - -",
   "r2q1rk1/pp1n1ppp/3b4/3p3b/3P4/2P1NN1P/PP3PP1/R1BQR1K1 b - -",
   "r2q1rk1/pp3ppp/1n1b4/3p3b/3P4/2P1NN1P/PP3PP1/R1BQR1K1 w - -",
   "r2q1rk1/pp3ppp/3b1n2/3p3b/3P4/2P1NN1P/PP3PP1/R1BQR1K1 w - -",
   "r2q1rk1/pp3ppp/3b1n2/3p1N1b/3P4/2P2N1P/PP3PP1/R1BQR1K1 b - -",
   "r2q1rk1/pp3ppp/1n1b4/3p1N1b/3P4/2P2N1P/PP3PP1/R1BQR1K1 b - -",
   "r2q1rk1/pp1n1ppp/3b2b1/3p4/3P2P1/2P2N1P/PP3P2/R1BQRNK1 w - -",
   "r2q1rk1/pp1n1ppp/3b2b1/3pN3/3P2P1/2P4P/PP3P2/R1BQRNK1 b - -",
   "r2q1rk1/pp1n1ppp/3b2b1/3p2B1/3P2P1/2P2N1P/PP3P2/R2QRNK1 b - -",
   "r2q1rk1/pp1n2pp/3b1pb1/3p2B1/3P2P1/2P2N1P/PP3P2/R2QRNK1 w - -",
   "r2q1rk1/pp1n2pp/3b1pb1/3p4/3P2PB/2P2N1P/PP3P2/R2QRNK1 b - -",
   "r2q1rk1/pp3ppp/3b2b1/3pn3/3P2P1/2P4P/PP3P2/R1BQRNK1 w - -",
   "r2q1rk1/pp1n1ppp/6b1/3pb3/3P2P1/2P4P/PP3P2/R1BQRNK1 w - -",
   "r2q1rk1/pp1n1ppp/6b1/3pP3/6P1/2P4P/PP3P2/R1BQRNK1 b - -",
   "r2q1rk1/pp3ppp/6b1/2npP3/6P1/2P4P/PP3P2/R1BQRNK1 w - -",
   "r2q1rk1/pp3ppp/3b2b1/3pP3/6P1/2P4P/PP3P2/R1BQRNK1 b - -",
   "r2q1rk1/ppb2ppp/6b1/3pP3/6P1/2P4P/PP3P2/R1BQRNK1 w - -",
   "r2q1rk1/ppb2ppp/6b1/3pP3/5BP1/2P4P/PP3P2/R2QRNK1 b - -",
   "r2q1rk1/ppb2ppp/6b1/3pP3/6P1/2P1N2P/PP3P2/R1BQR1K1 b - -",
   "r2qr1k1/ppb2ppp/6b1/3pP3/5BP1/2P4P/PP3P2/R2QRNK1 w - -",
   "r4rk1/ppbq1ppp/6b1/3pP3/5BP1/2P4P/PP3P2/R2QRNK1 w - -",
   "r4rk1/ppbq1ppp/6b1/3pP3/5BP1/2P3NP/PP3P2/R2QR1K1 b - -",
   "3r1rk1/ppbq1ppp/6b1/3pP3/5BP1/2P3NP/PP3P2/R2QR1K1 w - -",
   "3r1rk1/ppbq1ppp/6b1/3pP3/5BP1/1QP3NP/PP3P2/R3R1K1 b - -",
   "r2qr1k1/ppb2ppp/6b1/3pP3/5BP1/2P1N2P/PP3P2/R2QR1K1 b - -",
   "r2qr1k1/ppb2ppp/6b1/3pP3/6P1/2P3BP/PP3P2/R2QRNK1 b - -",
   "r2qr1k1/pp3ppp/1b4b1/3pP3/6P1/2P3BP/PP3P2/R2QRNK1 w - -",
   "r2qr1k1/pp3ppp/1b4b1/3pP3/6P1/2P1N1BP/PP3P2/R2QR1K1 b - -",
   "r2qr1k1/pp3ppp/1b4b1/4P3/3p2P1/2P1N1BP/PP3P2/R2QR1K1 w - -",
   "r2qr1k1/pp3ppp/1b4b1/4P3/3P2P1/4N1BP/PP3P2/R2QR1K1 b - -",
   "r2qr1k1/pp3ppp/6b1/4P3/3b2P1/4N1BP/PP3P2/R2QR1K1 w - -",
   "r2qr1k1/pp3ppp/6b1/4P3/3b2P1/1Q2N1BP/PP3P2/R3R1K1 b - -",
   "r2qr1k1/pp3ppp/6b1/3pb3/5BP1/2P1N2P/PP3P2/R2QR1K1 w - -",
   "r2qr1k1/pp3ppp/6b1/3Nb3/5BP1/2P4P/PP3P2/R2QR1K1 b - -",
   "r2qr1k1/pp3ppp/6b1/3N4/5bP1/2P4P/PP3P2/R2QR1K1 w - -",
   "r2qr1k1/pp3ppp/6b1/8/5NP1/2P4P/PP3P2/R2QR1K1 b - -",
   "r2qr1k1/pp3ppp/8/8/4bNP1/2P4P/PP3P2/R2QR1K1 w - -",
   "r2Qr1k1/pp3ppp/8/8/4bNP1/2P4P/PP3P2/R3R1K1 b - -",
   "3rr1k1/pp3ppp/8/8/4bNP1/2P4P/PP3P2/R3R1K1 w - -",
   "3rr1k1/pp3ppp/8/8/4bNP1/2P1R2P/PP3P2/R5K1 b - -",
   "3rr1k1/pp3ppp/8/8/4bNP1/2P4P/PP3P2/3RR1K1 b - -",
   "3rr1k1/pp3ppp/2b5/8/5NP1/2P4P/PP3P2/3RR1K1 w - -",
   "3rR1k1/pp3ppp/2b5/8/5NP1/2P4P/PP3P2/3R2K1 b - -",
   "4r1k1/pp3ppp/2b5/8/5NP1/2P4P/PP3P2/3R2K1 w - -",
   "3rr1k1/pp3ppp/2b5/8/5NP1/2P1R2P/PP3P2/R5K1 w - -",
   "3rr1k1/pp3ppp/2b5/8/5NP1/2P1R2P/PP3P2/4R1K1 b - -",
   "3rR1k1/pp3ppp/2b5/8/5NP1/2P4P/PP3P2/R5K1 b - -",
   "4r1k1/pp3ppp/2b5/8/5NP1/2P4P/PP3P2/R5K1 w - -",
   "4r1k1/pp3ppp/2b5/8/5NP1/2P4P/PP3P2/3R2K1 b - -",
   "3r2k1/pp3ppp/2b5/8/5NP1/2P1r2P/PP3P2/4R1K1 w - -",
   "3r2k1/pp3ppp/2b5/8/5NP1/2P1P2P/PP6/4R1K1 b - -",
   "3r2k1/pp3ppp/2b5/8/5NP1/2P1R2P/PP3P2/6K1 b - -",
   "6k1/pp3ppp/2b5/8/5NP1/2P1R2P/PP3P2/3r2K1 w - -",
   "6k1/pp3ppp/2b5/8/5NP1/2P1R2P/PP3P1K/3r4 b - -",
   "6k1/pp3ppp/2b5/8/5NP1/2P1R2P/PP3P1K/7r w - -",
   "6k1/pp3ppp/2b5/8/5NP1/2P1R1KP/PP3P2/7r b - -",
   "6k1/pp3ppp/2b5/8/5NP1/2P1R1KP/PP3P2/6r1 w - -",
   "6k1/pp3ppp/2b5/8/5NPK/2P1R2P/PP3P2/6r1 b - -",
   "6k1/pp4pp/2b2p2/8/5NPK/2P1R2P/PP3P2/6r1 w - -",
   "3r2k1/pp3p1p/2b5/6p1/5NP1/2P1P2P/PP6/4R1K1 w - -",
   "3r2k1/pp3p1p/2b5/6pN/6P1/2P1P2P/PP6/4R1K1 b - -",
   "6k1/pp3p1p/2b5/6pN/6P1/2P1P2P/PP1r4/4R1K1 w - -",
   "6k1/pp3p1p/2b5/6pN/4P1P1/2P4P/PP1r4/4R1K1 b - -",
   "6k1/pp3p1p/2b5/6pN/1P4P1/2P1P2P/P2r4/4R1K1 b - -",
   "6k1/pp3p1p/2b5/6pN/1P4P1/2P1P2P/P5r1/4R1K1 w - -",
   "6k1/pp3p1p/2b5/6pN/1P4P1/2P1P2P/P5r1/4RK2 b - -",
   "6k1/pp3p1p/2b5/6pN/4P1P1/2P4P/Pr6/4R1K1 w - -",
   "6k1/pp3p1p/2b5/6pN/4P1P1/2P4P/Pr6/3R2K1 b - -",
   "5k2/pp3p1p/2b5/6pN/4P1P1/2P4P/Pr6/3R2K1 w - -",
   "5k2/pp3p1p/2b2N2/6p1/4P1P1/2P4P/Pr6/3R2K1 b - -",
   "5k2/pp3p2/2b2N1p/6p1/4P1P1/2P4P/Pr6/3R2K1 w - -",
   "5k2/pp3p2/2b4p/3N2p1/4P1P1/2P4P/Pr6/3R2K1 b - -",
   "5k2/1p3p2/2b4p/p2N2p1/4P1P1/2P4P/Pr6/3R2K1 w - -",
   "5k2/1p3p2/2b4p/p2NP1p1/6P1/2P4P/Pr6/3R2K1 b - -",
   "5k2/1p3p2/2b4p/p2NP1p1/6P1/2P4P/r7/3R2K1 w - -",
   "5k2/1p3p2/2b4p/p3P1p1/6P1/2P1N2P/r7/3R2K1 b - -",
   "5k2/1p3p2/2b4p/p3P1p1/6P1/2P1N2P/4r3/3R2K1 w - -",
   "5k2/1p3p2/2b4p/4P1p1/p5P1/2P1N2P/r7/3R2K1 w - -",
   "5k2/1p3p2/2b4p/p3PNp1/6P1/2P4P/4r3/3R2K1 b - -",
   "5k2/1p3p2/2b4p/p3rNp1/6P1/2P4P/8/3R2K1 w - -",
   "5k2/1p3p2/2b4N/p3r1p1/6P1/2P4P/8/3R2K1 b - -",
   "5k2/1p3p2/7N/p3r1p1/4b1P1/2P4P/8/3R2K1 w - -",
   "5k2/1p3p2/7N/p3r1p1/4b1P1/2P4P/8/5RK1 b - -",
   "5k2/1p3p2/6bN/p3r1p1/6P1/2P4P/8/5RK1 w - -",
   "5k2/1p3p2/6bN/p3r1p1/6P1/2P4P/6K1/5R2 b - -",
   "8/1p3pk1/6bN/p3r1p1/6P1/2P4P/6K1/5R2 w - -",
   "8/1p3pk1/6b1/p3rNp1/6P1/2P4P/6K1/5R2 b - -",
   "8/1p3pk1/8/p3rbp1/6P1/2P4P/6K1/5R2 w - -",
   "8/1p3pk1/8/p3rPp1/8/2P4P/6K1/5R2 b - -",
   "8/1p3p2/5k2/p3rPp1/8/2P4P/6K1/5R2 w - -",
   "8/1p3pk1/8/4rPp1/p7/2P4P/6K1/5R2 w - -",
   "8/1p3p2/5k2/p3rPp1/2P5/7P/6K1/5R2 b - -",
   "8/5p2/5k2/pp2rPp1/2P5/7P/6K1/5R2 w - -",
   "8/1p3p2/5k2/4rPp1/p1P5/7P/6K1/5R2 w - -",
   "8/5p2/5k2/pP2rPp1/8/7P/6K1/5R2 b - -",
   "8/5p2/5k2/pr3Pp1/8/7P/6K1/5R2 w - -",
   "8/5p2/5k2/pr3Pp1/8/7P/6K1/R7 b - -",
   "8/5p2/5k2/p4rp1/8/7P/6K1/R7 w - -",
   "8/5p2/5k2/p4rp1/R7/7P/6K1/8 b - -",
   "8/5p2/4k3/p4rp1/R7/7P/6K1/8 w - -",
   "8/5p2/4k3/p4rp1/R7/6KP/8/8 b - -",
   "8/5p2/3k4/p4rp1/R7/6KP/8/8 w - -",
   "8/5p2/3k4/p4rp1/8/6KP/8/R7 b - -",
   "8/8/3k1p2/p4rp1/8/6KP/8/R7 w - -",
   "8/8/3k1p2/p4rp1/7P/6K1/8/R7 b - -",
   "8/8/3k1p2/p4r2/7p/6K1/8/R7 w - -",
   "8/8/3k1p2/p4r2/7K/8/8/R7 b - -",
   "8/8/2k2p2/p4r2/7K/8/8/R7 w - -",
   "8/8/2k2p2/p4r2/6K1/8/8/R7 b - -",
   "8/8/2k2p2/p1r5/6K1/8/8/R7 w - -",
   "8/8/2k2p2/p1r5/8/5K2/8/R7 b - -",
   "8/8/2k2p2/p7/8/2r2K2/8/R7 w - -",
   "8/8/2k2p2/p7/4K3/2r5/8/R7 b - -",
   "8/8/5p2/pk6/4K3/2r5/8/R7 w - -",
   "8/8/5p2/pk6/3K4/2r5/8/R7 b - -",
   "8/8/5p2/pk6/2rK4/8/8/R7 w - -",
   "8/8/5p2/pk1K4/2r5/8/8/R7 b - -",
   "8/8/5p2/pk6/2r5/3K4/8/R7 b - -",
   "8/8/5p2/1k1K4/p1r5/8/8/R7 w - -",
   "8/8/5p2/1k1K4/p1r5/8/8/5R2 b - -",
   "8/8/8/1k1K1p2/p1r5/8/8/5R2 w - -",
   "8/8/8/1k1K1p2/p1r5/5R2/8/8 b - -",
   "8/8/8/3K1p2/pkr5/5R2/8/8 w - -",
   "8/8/8/3K1p2/pkr5/7R/8/8 b - -",
   "8/8/8/3K1p2/pk6/2r4R/8/8 w - -",
   "7R/8/8/3K1p2/pk6/2r5/8/8 b - -",
   "7R/8/8/3K1p2/p7/1kr5/8/8 w - -",
   "7R/8/8/5p2/p2K4/1kr5/8/8 b - -",
   "7R/8/8/5p2/3K4/pkr5/8/8 w - -",
   "1R6/8/8/5p2/3K4/pkr5/8/8 b - -",
   "1R6/8/8/5p2/3K4/p1r5/2k5/8 w - -",
   "R7/8/8/5p2/3K4/p1r5/2k5/8 b - -",
   "R7/8/8/8/3K1p2/p1r5/2k5/8 w - -",
   "5R2/8/8/8/3K1p2/p1r5/2k5/8 b - -",
   "5R2/8/8/8/3K4/p1r2p2/2k5/8 w - -",
   "R7/8/8/8/3K4/p1r2p2/2k5/8 b - -",
   "R7/8/8/8/3K4/p1r2p2/1k6/8 w - -",
   "7R/8/8/8/3K4/p1r2p2/1k6/8 b - -",
   "7R/8/8/8/3K4/2r2p2/pk6/8 w - -",
   "8/8/8/8/3K4/2r2p2/pk5R/8 b - -",
   "8/8/8/8/3K4/5p2/pkr4R/8 w - -");

var cmoves = new Array ( 
   "[*]",
   "1.d4",
   "1...d6",
   "2.e4",
   "2...Nf6",
   "3.Bd3",
   "3...e5",
   "4.c3",
   "4...Be7",
   "5.Nf3",
   "5...Bg4",
   "6.O-O",
   "6.h3",
   "6...Bh5",
   "7.Be3",
   "7...O-O",
   "8.Nbd2",
   "6...O-O",
   "7.h3",
   "7...Bh5",
   "8.Nbd2",
   "8.Be3",
   "8...c5",
   "8...Nbd7",
   "9.Nbd2",
   "9.Nbd2",
   "8...c6",
   "9.Re1",
   "9.g4",
   "9...Nbd7",
   "10.Nf1",
   "10...d5",
   "10...exd4",
   "11.cxd4",
   "11...d5",
   "12.e5",
   "12...Ne4",
   "11.exd5",
   "11...e4",
   "11...exd4",
   "12.dxc6",
   "12...bxc6",
   "13.cxd4",
   "11...Nxd5",
   "12.dxe5",
   "12...Qc7",
   "13.Ne3",
   "13...Nxe3",
   "14.Bxe3",
   "14...Bxf3",
   "15.Qxf3",
   "15...Nxe5",
   "16.Qf4",
   "16...Bd6",
   "17.Bc2",
   "12.Bxe4",
   "12.dxc6",
   "12...Bxf3",
   "12...exf3",
   "13.g4",
   "13.gxf3",
   "13...exd3",
   "14.cxd7",
   "14...Qxd7",
   "15.Qxd3",
   "12...Nxe4",
   "13.Rxe4",
   "13...cxd5",
   "14.Re1",
   "14...Bd6",
   "15.g4",
   "15.Ne3",
   "15...Nb6",
   "15...Nf6",
   "16.Nf5",
   "16.Nf5",
   "15...Bg6",
   "16.Ne5",
   "16.Bg5",
   "16...f6",
   "17.Bh4",
   "16...Nxe5",
   "16...Bxe5",
   "17.dxe5",
   "17...Nc5",
   "17.dxe5",
   "17...Bc7",
   "18.Bf4",
   "18.Ne3",
   "18...Re8",
   "18...Qd7",
   "19.Ng3",
   "19...Rad8",
   "20.Qb3",
   "19.Ne3",
   "19.Bg3",
   "19...Bb6",
   "20.Ne3",
   "20...d4",
   "21.cxd4",
   "21...Bxd4",
   "22.Qb3",
   "19...Bxe5",
   "20.Nxd5",
   "20...Bxf4",
   "21.Nxf4",
   "21...Be4",
   "22.Qxd8",
   "22...Raxd8",
   "23.Re3",
   "23.Rad1",
   "23...Bc6",
   "24.Rxe8",
   "24...Rxe8",
   "23...Bc6",
   "24.Rae1",
   "24.Rxe8",
   "24...Rxe8",
   "25.Rd1",
   "24...Rxe3",
   "25.fxe3",
   "25.Rxe3",
   "25...Rd1",
   "26.Kh2",
   "26...Rh1",
   "27.Kg3",
   "27...Rg1",
   "28.Kh4",
   "28...f6",
   "25...g5",
   "26.Nh5",
   "26...Rd2",
   "27.e4",
   "27.b4",
   "27...Rg2",
   "28.Kf1",
   "27...Rxb2",
   "28.Rd1",
   "28...Kf8",
   "29.Nf6",
   "29...h6",
   "30.Nd5",
   "30...a5",
   "31.e5",
   "31...Rxa2",
   "32.Ne3",
   "32...Re2",
   "32...a4",
   "33.Nf5",
   "33...Rxe5",
   "34.Nxh6",
   "34...Be4",
   "35.Rf1",
   "35...Bg6",
   "36.Kg2",
   "36...Kg7",
   "37.Nf5",
   "37...Bxf5",
   "38.gxf5",
   "38...Kf6",
   "38...a4",
   "39.c4",
   "39...b5",
   "39...a4",
   "40.cxb5",
   "40...Rxb5",
   "41.Ra1",
   "41...Rxf5",
   "42.Ra4",
   "42...Ke6",
   "43.Kg3",
   "43...Kd6",
   "44.Ra1",
   "44...f6",
   "45.h4",
   "45...gxh4",
   "46.Kxh4",
   "46...Kc6",
   "47.Kg4",
   "47...Rc5",
   "48.Kf3",
   "48...Rc3",
   "49.Ke4",
   "49...Kb5",
   "50.Kd4",
   "50...Rc4",
   "51.Kd5",
   "51.Kd3",
   "51...a4",
   "52.Rf1",
   "52...f5",
   "53.Rf3",
   "53...Kb4",
   "54.Rh3",
   "54...Rc3",
   "55.Rh8",
   "55...Kb3",
   "56.Kd4",
   "56...a3",
   "57.Rb8",
   "57...Kc2",
   "58.Ra8",
   "58...f4",
   "59.Rf8",
   "59...f3",
   "60.Ra8",
   "60...Kb2",
   "61.Rh8",
   "61...a2",
   "62.Rh2",
   "62...Rc2");

