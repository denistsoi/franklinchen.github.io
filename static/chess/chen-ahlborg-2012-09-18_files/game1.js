var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
   0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,
   0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,
   0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,
   2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,
   2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
   1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,2,2,1,0,
   0,0,0,0,0,0,0,0,0,0);

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
   "S31",
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
   "S31",
   "S16",
   "S31",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S16",
   "S16",
   "S31",
   "S17",
   "S16",
   "S31",
   "S16",
   "S16",
   "S31",
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
   "S31",
   "S17",
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
   "S16",
   "S16",
   "S31",
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
   "S31",
   "S17",
   "S17",
   "S17",
   "S17",
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
   "S31",
   "S17",
   "S17",
   "S17",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S17",
   "S17",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
   "S18",
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
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S16",
   "S31",
   "S17",
   "S17",
   "S18",
   "S18",
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
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -",
   "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -",
   "rnbqkb1r/pppppppp/5n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq -",
   "rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -",
   "rnbqkb1r/pppppp1p/5np1/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -",
   "rnbqk2r/ppppppbp/5np1/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -",
   "rnbqk2r/ppppppbp/5np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq -",
   "rnbqk2r/pp1pppbp/5np1/2p5/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R w KQkq -",
   "rnbqk2r/ppp1ppbp/3p1np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R w KQkq -",
   "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq -",
   "rnbqk2r/pp1pppbp/5np1/2p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq -",
   "rnbqk2r/pp1pppbp/5np1/8/2PpP3/2N2N2/PP3PPP/R1BQKB1R w KQkq -",
   "rnbqk2r/pp1pppbp/5np1/8/2PNP3/2N5/PP3PPP/R1BQKB1R b KQkq -",
   "rnbqk2r/pp2ppbp/3p1np1/8/2PNP3/2N5/PP3PPP/R1BQKB1R w KQkq -",
   "rnbqk2r/pp2ppbp/3p1np1/8/2PNP3/2N5/PP2BPPP/R1BQK2R b KQkq -",
   "r1bqk2r/pp2ppbp/2np1np1/8/2PNP3/2N5/PP2BPPP/R1BQK2R w KQkq -",
   "r1bqk2r/pp2ppbp/2np1np1/8/2PNP3/2N1B3/PP2BPPP/R2QK2R b KQkq -",
   "r1bqk2r/pp2ppbp/3p1np1/8/2PnP3/2N1B3/PP2BPPP/R2QK2R w KQkq -",
   "r1bqk2r/pp2ppbp/3p1np1/8/2PBP3/2N5/PP2BPPP/R2QK2R b KQkq -",
   "r1bq1rk1/pp2ppbp/3p1np1/8/2PBP3/2N5/PP2BPPP/R2QK2R w KQ -",
   "r1bq1rk1/pp2ppbp/3p1np1/8/2PBP3/2N5/PP2BPPP/R2Q1RK1 b - -",
   "r2q1rk1/pp2ppbp/3pbnp1/8/2PBP3/2N5/PP2BPPP/R2Q1RK1 w - -",
   "r2q1rk1/pp2ppbp/3pbnp1/8/2PBPP2/2N5/PP2B1PP/R2Q1RK1 b - -",
   "r2q1rk1/pp2ppbp/3pbnp1/8/2PBP3/2N5/PP1QBPPP/R4RK1 b - -",
   "r1q2rk1/pp2ppbp/3pbnp1/8/2PBPP2/2N5/PP2B1PP/R2Q1RK1 w - -",
   "2rq1rk1/pp2ppbp/3pbnp1/8/2PBPP2/2N5/PP2B1PP/R2Q1RK1 w - -",
   "r1q2rk1/pp2ppbp/3pbnp1/3N4/2PBPP2/8/PP2B1PP/R2Q1RK1 b - -",
   "r1q2rk1/pp2ppbp/3p1np1/3b4/2PBPP2/8/PP2B1PP/R2Q1RK1 w - -",
   "r1q2rk1/pp2ppbp/3p1np1/3P4/2PB1P2/8/PP2B1PP/R2Q1RK1 b - -",
   "r1q2rk1/p3ppbp/3p1np1/1p1P4/2PB1P2/8/PP2B1PP/R2Q1RK1 w - -",
   "r1q2rk1/1p2ppbp/3p1np1/p2P4/2PB1P2/8/PP2B1PP/R2Q1RK1 w - -",
   "r1q2rk1/p3ppbp/3p1np1/1P1P4/3B1P2/8/PP2B1PP/R2Q1RK1 b - -",
   "r4rk1/pq2ppbp/3p1np1/1P1P4/3B1P2/8/PP2B1PP/R2Q1RK1 w - -",
   "r1q2rk1/p3ppbp/3p2p1/1P1n4/3B1P2/8/PP2B1PP/R2Q1RK1 w - -",
   "r1q2rk1/p3ppBp/3p2p1/1P1n4/5P2/8/PP2B1PP/R2Q1RK1 b - -",
   "r4rk1/pq2ppbp/3p1np1/1P1P4/2BB1P2/8/PP4PP/R2Q1RK1 b - -",
   "r4rk1/pq2ppbp/3p1np1/1P1P4/P2B1P2/8/1P2B1PP/R2Q1RK1 b - -",
   "r1r3k1/pq2ppbp/3p1np1/1P1P4/2BB1P2/8/PP4PP/R2Q1RK1 w - -",
   "r1r3k1/pq2ppbp/3p1np1/1P1P4/2BB1P2/3Q4/PP4PP/R4RK1 b - -",
   "r1r3k1/pq2ppbp/3p1np1/1P1P4/2BB1P2/1P6/P5PP/R2Q1RK1 b - -",
   "r1r3k1/pq2ppbp/3p2p1/1P1n4/2BB1P2/1P6/P5PP/R2Q1RK1 w - -",
   "r1r3k1/pq2ppBp/3p2p1/1P1n4/2B2P2/1P6/P5PP/R2Q1RK1 b - -",
   "r1r3k1/pq2ppBp/3p2p1/1P6/2B2P2/1P2n3/P5PP/R2Q1RK1 w - -",
   "r1r3k1/pq2ppBp/3p2p1/1P6/2B2P2/1P2n3/P3Q1PP/R4RK1 b - -",
   "r1r3k1/p3ppBp/1q1p2p1/1P6/2B2P2/1P2n3/P3Q1PP/R4RK1 w - -",
   "r1r3k1/pq2ppbp/3p2p1/1P1n4/2BB1P2/3Q4/PP4PP/R4RK1 w - -",
   "r1r3k1/pq2ppBp/3p2p1/1P1n4/2B2P2/3Q4/PP4PP/R4RK1 b - -",
   "r1r3k1/pq2ppBp/1n1p2p1/1P6/2B2P2/3Q4/PP4PP/R4RK1 w - -",
   "r1r3k1/pq2pBBp/1n1p2p1/1P6/5P2/3Q4/PP4PP/R4RK1 b - -",
   "r1r5/pq2pBkp/1n1p2p1/1P6/5P2/3Q4/PP4PP/R4RK1 w - -",
   "r1r5/pq2pkBp/1n1p2p1/1P6/5P2/3Q4/PP4PP/R4RK1 w - -",
   "r1r5/pq2pk1p/1n1p2p1/1P6/3B1P2/3Q4/PP4PP/R4RK1 b - -",
   "r1r5/pq2p1kp/1n1pB1p1/1P6/5P2/3Q4/PP4PP/R4RK1 b - -",
   "r4r2/pq2p1kp/1n1pB1p1/1P6/5P2/3Q4/PP4PP/R4RK1 w - -",
   "r4r2/pq2p1kp/1n1pB1p1/1P6/3Q1P2/8/PP4PP/R4RK1 b - -",
   "r7/pq2p1kp/1n1pBrp1/1P6/3Q1P2/8/PP4PP/R4RK1 w - -",
   "r7/pq2p1kp/1n1pBrp1/1P6/3Q1PP1/8/PP5P/R4RK1 b - -",
   "r4k2/pq2p2p/1n1pBrp1/1P6/3Q1PP1/8/PP5P/R4RK1 w - -",
   "r4k2/pq2p2p/1n1pBrp1/1P3P2/3Q2P1/8/PP5P/R4RK1 b - -",
   "r4k2/pq2p2p/1n1pBrp1/1P6/3Q1PP1/8/PP5P/4RRK1 b - -",
   "r4k2/pq2p2p/1n1pBr2/1P3Pp1/3Q2P1/8/PP5P/R4RK1 w - -",
   "r4k2/pq2p2p/1n1pBr2/1P3Pp1/3Q2PP/8/PP6/R4RK1 b - -",
   "r4k2/pq2p3/1n1pBr1p/1P3Pp1/3Q2PP/8/PP6/R4RK1 w - -",
   "r4k2/pq2p3/1n1pBr1p/1P3Pp1/P2Q2PP/8/1P6/R4RK1 b - -",
   "r4k2/pq2p3/1n1pBr1p/1P3PP1/3Q2P1/8/PP6/R4RK1 b - -",
   "r4k2/pq2p3/1n1pBr2/1P3Pp1/3Q2P1/8/PP6/R4RK1 w - -",
   "r4k2/pq2p3/1n1pBr2/1P3Pp1/3Q2P1/8/PP3R2/R5K1 b - -",
   "r4k2/pq2p3/1n1pB2r/1P3Pp1/3Q2P1/8/PP3R2/R5K1 w - -",
   "r4k2/pq2p3/1n1pB2r/1P3Pp1/3Q2P1/8/PP5R/R5K1 b - -",
   "1r3k2/pq2p3/1n1pBr1p/1P3Pp1/P2Q2PP/8/1P6/R4RK1 w - -",
   "1r3k2/pq2p3/1n1pBr1p/1P3PP1/P2Q2P1/8/1P6/R4RK1 b - -",
   "1r3k2/pq2p3/1n1pBr2/1P3Pp1/P2Q2P1/8/1P6/R4RK1 w - -",
   "1r3k2/pq2p3/1n1pBr2/1P3Pp1/P2Q2P1/R7/1P6/5RK1 b - -",
   "1r3k2/pq2p3/1n1pBr2/1P3Pp1/P2Q2P1/8/1P3R2/R5K1 b - -",
   "1r3k2/pq2p3/1n1pB2r/1P3Pp1/P2Q2P1/R7/1P6/5RK1 w - -",
   "1r3k2/pq2p3/1n1pB2r/1P3Pp1/P2Q2P1/5R2/1P6/5RK1 b - -",
   "1r3k2/pq2p3/1n1pB2r/1P3Pp1/P2Q2P1/R4R2/1P6/6K1 b - -",
   "1r3k2/pq1np3/3pB2r/1P3Pp1/P2Q2P1/5R2/1P6/5RK1 w - -",
   "1r3k2/pq1Bp3/3p3r/1P3Pp1/P2Q2P1/5R2/1P6/5RK1 b - -",
   "1r3k2/p2qp3/3p3r/1P3Pp1/P2Q2P1/5R2/1P6/5RK1 w - -",
   "1r3k2/p2qp3/3p3r/1P3Pp1/P5P1/4QR2/1P6/5RK1 b - -",
   "1r6/p2qpk2/3p3r/1P3Pp1/P5P1/4QR2/1P6/5RK1 w - -",
   "1r6/p2qpk2/3p3r/1P3PQ1/P5P1/5R2/1P6/5RK1 b - -",
   "1r6/p2qpk2/3p3r/1P3Pp1/P5P1/4Q2R/1P6/5RK1 b - -",
   "7r/p2qpk2/3p3r/1P3PQ1/P5P1/5R2/1P6/5RK1 w - -",
   "7r/p2qpk2/3p1P1r/1P4Q1/P5P1/5R2/1P6/5RK1 b - -",
   "7r/p2qpk2/3p1P2/1P4Q1/P5P1/5R2/1P6/5RKr w - -",
   "4k2r/p2qp3/3p1P1r/1P4Q1/P5P1/5R2/1P6/5RK1 w - -",
   "4k2r/p2qP3/3p3r/1P4Q1/P5P1/5R2/1P6/5RK1 b - -",
   "4k2r/p3q3/3p3r/1P4Q1/P5P1/5R2/1P6/5RK1 w - -",
   "4k2r/p3Q3/3p3r/1P6/P5P1/5R2/1P6/5RK1 b - -",
   "7r/p3k3/3p3r/1P6/P5P1/5R2/1P6/5RK1 w - -",
   "7r/p2qpk2/3p1P2/1P4Q1/P5P1/5R2/1P3K2/5R1r b - -",
   "8/p2qpk2/3p1P2/1P4Q1/P5P1/5R2/1P3K1r/5R1r w - -",
   "8/p2qpk2/3p1P2/1P4Q1/P5P1/5R2/1P5r/4KR1r b - -",
   "8/p2qpk2/3p1P2/1P4Q1/P5P1/4KR2/1P5r/5R1r b - -",
   "8/p3pk2/3pqP2/1P4Q1/P5P1/4KR2/1P5r/5R1r w - -",
   "8/p3pk2/3pqP2/1P4Q1/P2K2P1/5R2/1P5r/5R1r b - -",
   "8/p3pk2/3pqP2/1P4Q1/P5P1/5R2/1P5r/4KR1r w - -",
   "8/p3pk2/3pqP2/1P4Q1/P5P1/4R3/1P5r/4KR1r b - -",
   "8/p3pk2/3pqP2/1P4Q1/P5P1/4R3/1P5r/4Kr2 w - -",
   "8/p3pk2/3pqP2/1P4Q1/P5P1/4R3/1P5r/5K2 b - -",
   "8/p3pk2/3p1P2/1P4Q1/P1q3P1/4R3/1P5r/5K2 w - -",
   "8/p3pk2/3p1q2/1P4Q1/P5P1/4R3/1P5r/5K2 w - -",
   "8/p3pk2/3p1Q2/1P6/P5P1/4R3/1P5r/5K2 b - -",
   "8/p3p3/3p1k2/1P6/P5P1/4R3/1P5r/5K2 w - -",
   "8/p3p3/3p1k2/1P6/P5P1/1R6/1P5r/5K2 b - -",
   "8/p3p3/3p1k2/1P4P1/P7/4R3/1P5r/5K2 b - -",
   "8/p3p3/3p4/1P4k1/P7/4R3/1P5r/5K2 w - -",
   "8/p3R3/3p4/1P4k1/P7/8/1P5r/5K2 b - -",
   "8/p3R3/3p4/1P4k1/P7/8/1r6/5K2 w - -",
   "8/R7/3p4/1P4k1/P7/8/1r6/5K2 b - -",
   "8/R7/3p4/1P6/P4k2/8/1r6/5K2 w - -",
   "8/8/R2p4/1P6/P4k2/8/1r6/5K2 b - -",
   "8/8/R2p4/1P6/P7/5k2/1r6/5K2 w - -",
   "8/8/R2p4/1P6/P7/5k2/1r6/4K3 b - -",
   "8/8/R2p4/1P6/P7/4k3/1r6/4K3 w - -",
   "8/8/3R4/1P6/P7/4k3/1r6/4K3 b - -",
   "8/8/3R4/1P6/P7/4k3/8/1r2K3 w - -",
   "8/8/8/1P6/P7/4k3/8/1r1RK3 b - -",
   "8/8/8/1P6/Pr6/4k3/8/3RK3 w - -",
   "8/8/8/1P6/Pr6/4k3/8/R3K3 b - -",
   "8/8/8/1P6/Pr1k4/8/8/R3K3 w - -",
   "8/p3p3/3p1k2/1P6/P5P1/1R6/1P6/5K1r w - -",
   "8/p3p3/3p1k2/1P6/P5P1/1R6/1P3K2/7r b - -",
   "8/p3p3/3p1k2/1P6/P5P1/1R6/1P4K1/7r b - -",
   "8/p3p3/3p1k2/1P6/P5P1/1R6/1P4K1/r7 w - -",
   "8/p3p3/3p1k2/1P6/P5P1/R7/1P4K1/r7 b - -",
   "8/p3p3/3p1k2/1P6/P5P1/R7/1P4K1/1r6 w - -",
   "8/p3p3/3p1k2/1P6/P5P1/8/RP4K1/1r6 b - -",
   "8/p3p3/3p1k2/1P6/P5P1/8/RP4K1/2r5 w - -",
   "8/p3p3/3p1k2/PP6/6P1/8/RP4K1/2r5 b - -",
   "8/p3p3/3p1k2/PP6/2r3P1/8/RP4K1/8 w - -",
   "8/p3p3/3p1k2/PP6/2r3P1/5K2/RP6/8 b - -",
   "8/p3p3/3p1k2/PP6/1r4P1/5K2/RP6/8 w - -",
   "8/p3p3/1P1p1k2/P7/1r4P1/5K2/RP6/8 b - -",
   "8/4p3/pP1p1k2/P7/1r4P1/5K2/RP6/8 w - -",
   "8/p3p3/3p1k2/1P6/P5P1/1R6/1P3K2/r7 w - -",
   "8/p3p3/3p1k2/1P6/P5P1/R7/1P3K2/r7 b - -",
   "8/p3p3/3p1k2/1P6/P5P1/R7/1P3K2/7r w - -",
   "8/p3p3/3p1k2/PP6/6P1/R7/1P3K2/7r b - -",
   "8/p3p3/3p1k2/PP6/6P1/R7/1P3K1r/8 w - -",
   "8/p3p3/3p1k2/PP6/6P1/R3K3/1P5r/8 b - -",
   "8/p3p3/3p1k2/PP6/6P1/R3K3/1r6/8 w - -",
   "8/p3p3/1P1p1k2/P7/6P1/R3K3/1r6/8 b - -",
   "8/4p3/pP1p1k2/P7/6P1/R3K3/1r6/8 w - -",
   "8/4p3/pP1p1k2/P7/6P1/2R1K3/1r6/8 b - -",
   "8/8/pP1p1k2/P3p3/6P1/2R1K3/1r6/8 w - -",
   "2R5/8/pP1p1k2/P3p3/6P1/4K3/1r6/8 b - -",
   "2R5/8/pP1p1k2/P3p3/6P1/1r2K3/8/8 w - -",
   "2R5/8/pP1p1k2/P3p3/6P1/1r6/3K4/8 b - -",
   "2R5/8/pP1p1k2/P7/4p1P1/1r6/3K4/8 w - -",
   "2R5/8/pP1p1k2/P7/4p1P1/1r6/2K5/8 b - -",
   "2R5/8/pP1p1k2/P7/1r2p1P1/8/2K5/8 w - -",
   "R7/8/pP1p1k2/P7/1r2p1P1/8/2K5/8 b - -",
   "R7/8/pP1p1k2/P7/1r4P1/4p3/2K5/8 w - -",
   "8/8/RP1p1k2/P7/1r4P1/4p3/2K5/8 b - -",
   "8/8/RP1p1k2/P7/6P1/4p3/1rK5/8 w - -",
   "8/8/RP1p1k2/P7/6P1/4p3/1K6/8 b - -",
   "8/8/RP1p1k2/P7/6P1/8/1K2p3/8 w - -",
   "8/1P6/R2p1k2/P7/6P1/8/1K2p3/8 b - -",
   "8/1P6/R2p1k2/P7/6P1/8/1K6/4q3 w - -",
   "1Q6/8/R2p1k2/P7/6P1/8/1K6/4q3 b - -",
   "1Q6/8/R2p1k2/P7/6P1/8/1K2q3/8 w - -",
   "1Q6/8/R2p1k2/P7/6P1/K7/4q3/8 b - -",
   "1Q6/8/q2p1k2/P7/6P1/K7/8/8 w - -",
   "5Q2/8/q2p1k2/P7/6P1/K7/8/8 b - -",
   "5Q2/8/q2p4/P5k1/6P1/K7/8/8 w - -",
   "8/8/q2p4/P4Qk1/6P1/K7/8/8 b - -",
   "8/8/q2p4/P4Q2/6Pk/K7/8/8 w - -",
   "8/8/q2p4/P4QP1/7k/K7/8/8 b - -",
   "8/8/q2p4/P4QPk/8/K7/8/8 w - -",
   "8/8/q2p4/P2Q2Pk/8/K7/8/8 b - -",
   "8/8/3p4/P2Q2Pk/8/K7/8/5q2 w - -",
   "8/8/3p4/P2Q2Pk/1K6/8/8/5q2 b - -",
   "8/p3pk2/3p1P2/1P4Q1/P1q3P1/4R3/1P5r/6K1 b - -",
   "8/p4k2/3p1p2/1P4Q1/P1q3P1/4R3/1P5r/6K1 w - -",
   "8/p4k2/3p1p2/1P4Q1/P1q3P1/5R2/1P5r/6K1 b - -",
   "8/p4k2/3p1p2/1P3Q2/P1q3P1/4R3/1P5r/6K1 b - -",
   "8/p4k2/3p1p2/1P3Q2/P1q3Pr/4R3/1P6/6K1 w - -",
   "8/p4k2/3p1p2/1P4Q1/P1q3P1/5R2/1P4r1/6K1 w - -",
   "8/p4k2/3p1p2/1P4Q1/P1q3P1/5R2/1Pr5/6K1 w - -",
   "8/p4k2/3p1Q2/1P6/P1q3P1/5R2/1Pr5/6K1 b - -",
   "4k3/p7/3p1Q2/1P6/P1q3P1/5R2/1Pr5/6K1 w - -",
   "6k1/p7/3p1Q2/1P6/P1q3P1/5R2/1Pr5/6K1 w - -",
   "6k1/p7/3p4/1P4Q1/P1q3P1/5R2/1Pr5/6K1 b - -",
   "4k3/p7/3p1Q2/1P6/P1q3P1/4R3/1Pr5/6K1 b - -",
   "8/p4k2/3p1p2/1P4Q1/P1q3P1/5R2/1P4K1/8 b - -",
   "8/p4k2/3p1p2/1P4Q1/P5P1/5R2/1P2q1K1/8 w - -",
   "8/p4k2/3p1p2/1P4Q1/P5P1/8/1P2qRK1/8 b - -",
   "8/p4k2/3p1p2/1P4Q1/P5P1/8/1P3qK1/8 w - -",
   "8/p4k2/3p1p2/1P4Q1/P5P1/8/1P3K2/8 b - -",
   "8/p4k2/3p4/1P4p1/P5P1/8/1P3K2/8 w - -",
   "8/p4k2/3p4/PP4p1/6P1/8/1P3K2/8 b - -",
   "8/p3k3/3p4/PP4p1/6P1/8/1P3K2/8 w - -",
   "8/p3k3/1P1p4/P5p1/6P1/8/1P3K2/8 b - -",
   "8/4k3/1p1p4/P5p1/6P1/8/1P3K2/8 w - -",
   "8/4k3/Pp1p4/6p1/6P1/8/1P3K2/8 b - -");

var cmoves = new Array ( 
   "[*]",
   "1.Nf3",
   "1...Nf6",
   "2.c4",
   "2...g6",
   "3.Nc3",
   "3...Bg7",
   "4.e4",
   "4...c5",
   "4...d6",
   "5.d4",
   "5.d4",
   "5...cxd4",
   "6.Nxd4",
   "6...d6",
   "7.Be2",
   "7...Nc6",
   "8.Be3",
   "8...Nxd4",
   "9.Bxd4",
   "9...O-O",
   "10.O-O",
   "10...Be6",
   "11.f4",
   "11.Qd2",
   "11...Qc8",
   "11...Rc8",
   "12.Nd5",
   "12...Bxd5",
   "13.exd5",
   "13...b5",
   "13...a5",
   "14.cxb5",
   "14...Qb7",
   "14...Nxd5",
   "15.Bxg7",
   "15.Bc4",
   "15.a4",
   "15...Rfc8",
   "16.Qd3",
   "16.b3",
   "16...Nxd5",
   "17.Bxg7",
   "17...Ne3",
   "18.Qe2",
   "18...Qb6",
   "16...Nxd5",
   "17.Bxg7",
   "17...Nb6",
   "18.Bxf7",
   "18...Kxg7",
   "18...Kxf7",
   "19.Bd4",
   "19.Be6",
   "19...Rf8",
   "20.Qd4",
   "20...Rf6",
   "21.g4",
   "21...Kf8",
   "22.f5",
   "22.Rae1",
   "22...g5",
   "23.h4",
   "23...h6",
   "24.a4",
   "24.hxg5",
   "24...hxg5",
   "25.Rf2",
   "25...Rh6",
   "26.Rh2",
   "24...Rb8",
   "25.hxg5",
   "25...hxg5",
   "26.Ra3",
   "26.Rf2",
   "26...Rh6",
   "27.Raf3",
   "27.Rff3",
   "27...Nd7",
   "28.Bxd7",
   "28...Qxd7",
   "29.Qe3",
   "29...Kf7",
   "30.Qxg5",
   "30.Rh3",
   "30...Rbh8",
   "31.f6",
   "31...Rh1",
   "31...Ke8",
   "32.fxe7",
   "32...Qxe7",
   "33.Qxe7",
   "33...Kxe7",
   "32.Kf2",
   "32...R8h2",
   "33.Ke1",
   "33.Ke3",
   "33...Qe6",
   "34.Kd4",
   "33...Qe6",
   "34.Re3",
   "34...Rxf1",
   "35.Kxf1",
   "35...Qc4",
   "35...Qxf6",
   "36.Qxf6",
   "36...Kxf6",
   "37.Rb3",
   "37.g5",
   "37...Kxg5",
   "38.Rxe7",
   "38...Rxb2",
   "39.Rxa7",
   "39...Kf4",
   "40.Ra6",
   "40...Kf3",
   "41.Ke1",
   "41...Ke3",
   "42.Rxd6",
   "42...Rb1",
   "43.Rd1",
   "43...Rb4",
   "44.Ra1",
   "44...Kd4",
   "37...Rh1",
   "38.Kf2",
   "38.Kg2",
   "38...Ra1",
   "39.Ra3",
   "39...Rb1",
   "40.Ra2",
   "40...Rc1",
   "41.a5",
   "41...Rc4",
   "42.Kf3",
   "42...Rb4",
   "43.b6",
   "43...a6",
   "38...Ra1",
   "39.Ra3",
   "39...Rh1",
   "40.a5",
   "40...Rh2",
   "41.Ke3",
   "41...Rxb2",
   "42.b6",
   "42...a6",
   "43.Rc3",
   "43...e5",
   "44.Rc8",
   "44...Rb3",
   "45.Kd2",
   "45...e4",
   "46.Kc2",
   "46...Rb4",
   "47.Ra8",
   "47...e3",
   "48.Rxa6",
   "48...Rb2",
   "49.Kxb2",
   "49...e2",
   "50.b7",
   "50...e1=Q",
   "51.b8=Q",
   "51...Qe2",
   "52.Ka3",
   "52...Qxa6",
   "53.Qf8",
   "53...Kg5",
   "54.Qf5",
   "54...Kh4",
   "55.g5",
   "55...Kh5",
   "56.Qd5",
   "56...Qf1",
   "57.Kb4",
   "36.Kg1",
   "36...exf6",
   "37.Rf3",
   "37.Qf5",
   "37...Rh4",
   "37...Rg2",
   "37...Rc2",
   "38.Qxf6",
   "38...Ke8",
   "38...Kg8",
   "39.Qg5",
   "39.Re3",
   "38.Kxg2",
   "38...Qe2",
   "39.Rf2",
   "39...Qxf2",
   "40.Kxf2",
   "40...fxg5",
   "41.a5",
   "41...Ke7",
   "42.b6",
   "42...axb6",
   "43.a6");

