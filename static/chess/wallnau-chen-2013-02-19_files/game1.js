var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,
   1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,
   0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,
   1,0,1,1,1,1,1,1,0,0,0,0,0,0,0);

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
   "S31",
   "S16",
   "S31",
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
   "S16",
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/2p5/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/2p5/8/5NP1/PPPPPPBP/RNBQK2R b KQkq -",
   "r1bqkbnr/pp1p1ppp/2n5/2p1p3/8/5NP1/PPPPPPBP/RNBQK2R w KQkq -",
   "r1bqkbnr/pp1p1ppp/2n5/2p1p3/8/3P1NP1/PPP1PPBP/RNBQK2R b KQkq -",
   "r1bqkbnr/pp3ppp/2n5/2ppp3/8/3P1NP1/PPP1PPBP/RNBQK2R w KQkq -",
   "r1bqkbnr/pp3ppp/2n5/2ppp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 b kq -",
   "r1bqk1nr/pp2bppp/2n5/2ppp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq -",
   "r1bqk1nr/pp2bppp/2n5/2ppp3/8/P2P1NP1/1PP1PPBP/RNBQ1RK1 b kq -",
   "r1bqk1nr/pp2bp1p/2n5/2ppp1p1/8/P2P1NP1/1PP1PPBP/RNBQ1RK1 w kq -",
   "r1bqk1nr/pp2bp1p/2n5/2ppp1p1/2P5/P2P1NP1/1P2PPBP/RNBQ1RK1 b kq -",
   "r1bqk1nr/pp2bp1p/2n5/2p1p1p1/2Pp4/P2P1NP1/1P2PPBP/RNBQ1RK1 w kq -",
   "r1bqk1nr/pp2bp1p/2n5/2p1p1p1/1PPp4/P2P1NP1/4PPBP/RNBQ1RK1 b kq -",
   "r1bqk1nr/pp2bp1p/2n5/2p1p3/1PPp2p1/P2P1NP1/4PPBP/RNBQ1RK1 w kq -",
   "r1bqk1nr/pp2bp1p/2n5/2p1p3/1PPp2p1/P2P2P1/4PPBP/RNBQNRK1 b kq -",
   "r1bqk1nr/pp2bp1p/2n5/4p3/1pPp2p1/P2P2P1/4PPBP/RNBQNRK1 w kq -",
   "r1bqk1nr/pp2bp1p/2n5/4p3/1PPp2p1/3P2P1/4PPBP/RNBQNRK1 b kq -",
   "r1bqk1nr/pp2bp1p/8/4p3/1nPp2p1/3P2P1/4PPBP/RNBQNRK1 w kq -",
   "r1bqk1nr/pp2bp1p/8/4p3/1nPp2p1/1Q1P2P1/4PPBP/RNB1NRK1 b kq -",
   "r1bqk1nr/pp2bp2/8/4p2p/1nPp2p1/1Q1P2P1/4PPBP/RNB1NRK1 w kq -",
   "r1bqk2r/pp2bp1p/5n2/4p3/1nPp2p1/1Q1P2P1/4PPBP/RNB1NRK1 w kq -",
   "r1bqk1nr/pp2bp2/8/4p2p/1nPp2p1/1Q1PP1P1/5PBP/RNB1NRK1 b kq -",
   "r1bqk1nr/pp2bp2/8/4p2p/1nPp1Pp1/1Q1P2P1/4P1BP/RNB1NRK1 b kq f3",
   "r1bqk2r/pp2bp2/7n/4p2p/1nPp2p1/1Q1PP1P1/5PBP/RNB1NRK1 w kq -",
   "r1bqk1nr/pp2bp2/8/4p3/1nPp2pp/1Q1PP1P1/5PBP/RNB1NRK1 w kq -",
   "r1bqk1nr/pp2bp2/8/4p3/1nPP2pp/1Q1P2P1/5PBP/RNB1NRK1 b kq -",
   "r1bqk1nr/pp2bp2/8/4p3/1nPP2p1/1Q1P2p1/5PBP/RNB1NRK1 w kq -",
   "r1bqk1nr/pp2bp2/8/4p3/1nPP2p1/1Q1P2P1/5PB1/RNB1NRK1 b kq -",
   "r1b1k1nr/pp2bp2/8/4p3/1nPq2p1/1Q1P2P1/5PB1/RNB1NRK1 w kq -",
   "r1bqk2r/pp2bp2/7n/4p2p/1nPP2p1/1Q1P2P1/5PBP/RNB1NRK1 b kq -",
   "r1bqk2r/pp2bp2/7n/7p/1nPp2p1/1Q1P2P1/5PBP/RNB1NRK1 w kq -",
   "r1bqk2r/pp2bp2/7n/7p/1nPp2p1/1Q1P2P1/2N2PBP/RNB2RK1 b kq -",
   "r1bqk2r/1p2bp2/7n/p6p/1nPp2p1/1Q1P2P1/2N2PBP/RNB2RK1 w kq -",
   "r1bqk2r/1p2bp2/7n/p6p/1nPp2p1/1Q1P2P1/2N2PBP/RNB1R1K1 b kq -",
   "r1bqk2r/1p2bp2/7n/p6p/2Pp2p1/1Q1P2P1/2n2PBP/RNB1R1K1 w kq -",
   "r1bqk2r/1p2bp2/7n/p6p/2Pp2p1/3P2P1/2Q2PBP/RNB1R1K1 b kq -",
   "2bqk2r/1p2bp2/r6n/p6p/2Pp2p1/3P2P1/2Q2PBP/RNB1R1K1 w k -",
   "2bqk2r/1p2bp2/r6n/p2B3p/2Pp2p1/3P2P1/2Q2P1P/RNB1R1K1 b k -",
   "2bqk2r/1p2bp2/r6n/p6p/2Pp2p1/N2P2P1/2Q2PBP/R1B1R1K1 b k -",
   "2bqk2r/1p2bp2/4r2n/p6p/2Pp2p1/N2P2P1/2Q2PBP/R1B1R1K1 w k -",
   "2bqk2r/1p2bp2/4r2n/p6p/2Pp1Bp1/N2P2P1/2Q2PBP/R3R1K1 b k -",
   "2bqk2r/1p2bp2/r7/p2B1n1p/2Pp2p1/3P2P1/2Q2P1P/RNB1R1K1 w k -",
   "2bqk2r/1p2bp2/r7/p2B1n1p/2Pp2p1/N2P2P1/2Q2P1P/R1B1R1K1 b k -",
   "2bq1rk1/1p2bp2/r7/p2B1n1p/2Pp2p1/N2P2P1/2Q2P1P/R1B1R1K1 w - -",
   "2bq1rk1/1p2bp2/r7/pN1B1n1p/2Pp2p1/3P2P1/2Q2P1P/R1B1R1K1 b - -",
   "2bq1rk1/1p2bp2/6r1/pN1B1n1p/2Pp2p1/3P2P1/2Q2P1P/R1B1R1K1 w - -",
   "2bq1rk1/1p2bp2/6r1/pN1B1n1p/2Pp1Bp1/3P2P1/2Q2P1P/R3R1K1 b - -",
   "2bq1rk1/4bp2/1p4r1/pN1B1n1p/2Pp1Bp1/3P2P1/2Q2P1P/R3R1K1 w - -",
   "2bq1rk1/4bp2/1p4r1/pN1BRn1p/2Pp1Bp1/3P2P1/2Q2P1P/R5K1 b - -",
   "2bq1rk1/5p2/1p3br1/pN1BRn1p/2Pp1Bp1/3P2P1/2Q2P1P/R5K1 w - -",
   "2bq1rk1/5p2/1p3br1/pN1B1n1p/2Pp1Bp1/3P2P1/2Q1RP1P/R5K1 b - -",
   "2bq1rk1/5pb1/1p4r1/pN1B1n1p/2Pp1Bp1/3P2P1/2Q1RP1P/R5K1 w - -",
   "2bq1rk1/2B2pb1/1p4r1/pN1B1n1p/2Pp2p1/3P2P1/2Q1RP1P/R5K1 b - -",
   "2b2rk1/2Bq1pb1/1p4r1/pN1B1n1p/2Pp2p1/3P2P1/2Q1RP1P/R5K1 w - -",
   "2b2rk1/2Bq1pb1/1p4r1/pN1B1n1p/2Pp2p1/3P2P1/2Q1RP1P/1R4K1 b - -",
   "5rk1/2Bq1pb1/bp4r1/pN1B1n1p/2Pp2p1/3P2P1/2Q1RP1P/1R4K1 w - -",
   "5rk1/3q1pb1/bp4r1/pN1BBn1p/2Pp2p1/3P2P1/2Q1RP1P/1R4K1 b - -",
   "2r3k1/3q1pb1/bp4r1/pN1BBn1p/2Pp2p1/3P2P1/2Q1RP1P/1R4K1 w - -",
   "2r3k1/3q1pb1/bp4r1/pN1BBn1p/2Pp2p1/3P2P1/3QRP1P/1R4K1 b - -",
   "6k1/3q1pb1/bp4r1/pNrBBn1p/2Pp2p1/3P2P1/3QRP1P/1R4K1 w - -",
   "6k1/3q1pb1/bp4r1/pNrBBn1p/2Pp2p1/3P2P1/Q3RP1P/1R4K1 b - -",
   "6k1/3q1pB1/bp4r1/pNrB1n1p/2Pp2p1/3P2P1/3QRP1P/1R4K1 b - -",
   "8/3q1pk1/bp4r1/pNrB1n1p/2Pp2p1/3P2P1/3QRP1P/1R4K1 w - -",
   "8/3q1pk1/bp4r1/pNrB1n1p/2Pp1Qp1/3P2P1/4RP1P/1R4K1 b - -",
   "8/3q1pk1/bp4r1/pN1r1n1p/2Pp1Qp1/3P2P1/4RP1P/1R4K1 w - -",
   "8/3q1pk1/bp4r1/pN1P1n1p/3p1Qp1/3P2P1/4RP1P/1R4K1 b - -",
   "8/3q1pk1/1p4r1/pb1P1n1p/3p1Qp1/3P2P1/4RP1P/1R4K1 w - -",
   "8/3q1pk1/1p4r1/pR1P1n1p/3p1Qp1/3P2P1/4RP1P/6K1 b - -",
   "8/5pk1/1p4r1/pq1P1n1p/3p1Qp1/3P2P1/4RP1P/6K1 w - -",
   "8/5pk1/1p4r1/pq1P1Q1p/3p2p1/3P2P1/4RP1P/6K1 b - -",
   "6k1/3q1pb1/bp4r1/pN1rBn1p/2Pp2p1/3P2P1/Q3RP1P/1R4K1 w - -",
   "6k1/3q1pb1/bp4r1/pN1PBn1p/3p2p1/3P2P1/Q3RP1P/1R4K1 b - -",
   "6k1/3q1pb1/1p4r1/pb1PBn1p/3p2p1/3P2P1/Q3RP1P/1R4K1 w - -",
   "6k1/3q1pB1/1p4r1/pb1P1n1p/3p2p1/3P2P1/Q3RP1P/1R4K1 b - -",
   "8/3q1pk1/1p4r1/pb1P1n1p/3p2p1/3P2P1/Q3RP1P/1R4K1 w - -",
   "8/3q1pk1/1p4r1/pb1PRn1p/3p2p1/3P2P1/Q4P1P/1R4K1 b - -",
   "8/3q1pk1/1p4r1/p2PRn1p/3p2p1/3b2P1/Q4P1P/1R4K1 w - -",
   "8/3q1pk1/1p4r1/p2PRn1p/3p2p1/3b2P1/Q4P1P/4R1K1 b - -",
   "8/3q1pk1/bp4r1/p2PRn1p/3p2p1/6P1/Q4P1P/4R1K1 w - -",
   "8/2q2pk1/1p4r1/p2PRn1p/3p2p1/3b2P1/Q4P1P/4R1K1 w - -",
   "8/3q1pk1/bp4r1/p2PRn1p/3p2p1/Q5P1/5P1P/4R1K1 b - -",
   "8/1b1q1pk1/1p4r1/p2PRn1p/3p2p1/Q5P1/5P1P/4R1K1 w - -",
   "8/3q1pk1/1p4r1/p2PRn1p/2bp2p1/Q5P1/5P1P/4R1K1 w - -",
   "8/1b1q1pk1/1p4r1/p2PRn1p/3p2p1/3Q2P1/5P1P/4R1K1 b - -",
   "8/1b1q1pk1/1p3r2/p2PRn1p/3p2p1/3Q2P1/5P1P/4R1K1 w - -",
   "8/1b1q1pk1/1p6/p2PRnrp/3p2p1/3Q2P1/5P1P/4R1K1 w - -",
   "8/1b1q1pk1/1p3r2/p2PRn1p/3pQ1p1/6P1/5P1P/4R1K1 b - -",
   "8/1b1q1p2/1p3rk1/p2PRn1p/3pQ1p1/6P1/5P1P/4R1K1 w - -",
   "8/1b1q1pk1/5r2/pp1PRn1p/3pQ1p1/6P1/5P1P/4R1K1 w - -",
   "8/1b1q1pk1/5r2/pp1PRn1p/3p1Qp1/6P1/5P1P/4R1K1 b - -",
   "8/1b1q1p2/5rk1/pp1PRn1p/3p1Qp1/6P1/5P1P/4R1K1 w - -",
   "8/1b1q1p2/5rk1/pp1PRn1p/3p1QpP/6P1/5P2/4R1K1 b - h3",
   "8/1b1q1p2/5rk1/pp1PRn1p/3p1Q2/6Pp/5P2/4R1K1 w - -",
   "8/1b1q1p2/5rk1/pp1PRn1p/3p1Q2/5PPp/8/4R1K1 b - -",
   "8/3q1p2/5rk1/pp1bRn1p/3p1Q2/5PPp/8/4R1K1 w - -",
   "8/3q1p2/5rk1/pp1bRn1p/3p1QP1/5P1p/8/4R1K1 b - -",
   "8/3q1p2/5rk1/pp1bRn1p/5QP1/3p1P1p/8/4R1K1 w - -",
   "8/1b1q1p2/1p3rk1/p2PRn1p/3pQ1pP/6P1/5P2/4R1K1 b - h3",
   "8/1b1q1p2/1p1r2k1/p2PRn1p/3pQ1pP/6P1/5P2/4R1K1 w - -",
   "8/1b1q1p2/1p1r2k1/p2PRn1p/3p1QpP/6P1/5P2/4R1K1 b - -",
   "8/1b1q4/1p1r1pk1/p2PRn1p/3p1QpP/6P1/5P2/4R1K1 w - -",
   "8/1b1q1p2/1p4k1/p2rRn1p/3p1QpP/6P1/5P2/4R1K1 w - -",
   "8/1b1q1p2/1p4k1/p2rRnQp/3p2pP/6P1/5P2/4R1K1 b - -",
   "8/1b1q1p1k/1p6/p2rRnQp/3p2pP/6P1/5P2/4R1K1 w - -",
   "8/1b1q1p1k/1p6/p2rRn1Q/3p2pP/6P1/5P2/4R1K1 b - -",
   "8/1b1q1p1k/1p5n/p2rR2Q/3p2pP/6P1/5P2/4R1K1 w - -",
   "8/1b1q4/1p1rRpk1/p2P1n1p/3p1QpP/6P1/5P2/4R1K1 b - -",
   "8/1b1q4/1p1r1pk1/p2P1R1p/3p1QpP/6P1/5P2/4R1K1 b - -",
   "8/1b6/1p1r1pk1/p2P1q1p/3p1QpP/6P1/5P2/4R1K1 w - -",
   "8/1b6/1p1Q1pk1/p2P1q1p/3p2pP/6P1/5P2/4R1K1 b - -",
   "8/1b6/1p1Q1pk1/p2q3p/3p2pP/6P1/5P2/4R1K1 w - -",
   "8/1b6/1p3pk1/p2Q3p/3p2pP/6P1/5P2/4R1K1 b - -",
   "8/8/1p3pk1/p2b3p/3p2pP/6P1/5P2/4R1K1 w - -",
   "8/1b1q4/1p2rpk1/p2P1n1p/3p1QpP/6P1/5P2/4R1K1 w - -",
   "8/1b1q4/1p2Rpk1/p2P1n1p/3p1QpP/6P1/5P2/6K1 b - -",
   "8/1b6/1p2Rpk1/p2q1n1p/3p1QpP/6P1/5P2/6K1 w - -",
   "8/1b6/1p2Rpk1/p2q1nQp/3p2pP/6P1/5P2/6K1 b - -",
   "8/1b5k/1p2Rp2/p2q1nQp/3p2pP/6P1/5P2/6K1 w - -",
   "8/1b5k/1p2Rp2/p2q1n1Q/3p2pP/6P1/5P2/6K1 b - -",
   "8/1b4k1/1p2Rp2/p2q1n1Q/3p2pP/6P1/5P2/6K1 w - -");

var cmoves = new Array ( 
   "[*]",
   "1.Nf3",
   "1...c5",
   "2.g3",
   "2...Nc6",
   "3.Bg2",
   "3...e5",
   "4.d3",
   "4...d5",
   "5.O-O",
   "5...Be7",
   "6.a3",
   "6...g5",
   "7.c4",
   "7...d4",
   "8.b4",
   "8...g4",
   "9.Ne1",
   "9...cxb4",
   "10.axb4",
   "10...Nxb4",
   "11.Qb3",
   "11...h5",
   "11...Nf6",
   "12.e3",
   "12.f4",
   "12...Nh6",
   "12...h4",
   "13.exd4",
   "13...hxg3",
   "14.hxg3",
   "14...Qxd4",
   "13.exd4",
   "13...exd4",
   "14.Nc2",
   "14...a5",
   "15.Re1",
   "15...Nxc2",
   "16.Qxc2",
   "16...Ra6",
   "17.Bd5",
   "17.Na3",
   "17...Re6",
   "18.Bf4",
   "17...Nf5",
   "18.Na3",
   "18...O-O",
   "19.Nb5",
   "19...Rg6",
   "20.Bf4",
   "20...b6",
   "21.Re5",
   "21...Bf6",
   "22.Re2",
   "22...Bg7",
   "23.Bc7",
   "23...Qd7",
   "24.Rb1",
   "24...Ba6",
   "25.Be5",
   "25...Rc8",
   "26.Qd2",
   "26...Rc5",
   "27.Qa2",
   "27.Bxg7",
   "27...Kxg7",
   "28.Qf4",
   "28...Rxd5",
   "29.cxd5",
   "29...Bxb5",
   "30.Rxb5",
   "30...Qxb5",
   "31.Qxf5",
   "27...Rxd5",
   "28.cxd5",
   "28...Bxb5",
   "29.Bxg7",
   "29...Kxg7",
   "30.Re5",
   "30...Bxd3",
   "31.Rbe1",
   "31...Ba6",
   "31...Qc7",
   "32.Qa3",
   "32...Bb7",
   "32...Bc4",
   "33.Qd3",
   "33...Rf6",
   "33...Rg5",
   "34.Qe4",
   "34...Kg6",
   "34...b5",
   "35.Qf4",
   "35...Kg6",
   "36.h4",
   "36...gxh3",
   "37.f3",
   "37...Bxd5",
   "38.g4",
   "38...d3",
   "35.h4",
   "35...Rd6",
   "36.Qf4",
   "36...f6",
   "36...Rxd5",
   "37.Qg5",
   "37...Kh7",
   "38.Qxh5",
   "38...Nh6",
   "37.Re6",
   "37.Rxf5",
   "37...Qxf5",
   "38.Qxd6",
   "38...Qxd5",
   "39.Qxd5",
   "39...Bxd5",
   "37...Rxe6",
   "38.Rxe6",
   "38...Qxd5",
   "39.Qg5",
   "39...Kh7",
   "40.Qxh5",
   "40...Kg7");

