var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,1,1,2,2,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,
   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0);

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
   "S31",
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
   "S31",
   "S16",
   "S31",
   "S17",
   "S16",
   "S16",
   "S31",
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
   "S31",
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
   "S16",
   "S16",
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -",
   "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -",
   "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -",
   "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -",
   "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -",
   "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -",
   "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -",
   "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -",
   "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -",
   "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq -",
   "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq -",
   "rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQkq -",
   "rnbqkb1r/5ppp/p2ppn2/1p6/3NP1P1/2N1BP2/PPP4P/R2QKB1R b KQkq -",
   "rnbqkb1r/3n1ppp/p2pp3/1p6/3NP1P1/2N1BP2/PPP4P/R2QKB1R w KQkq -",
   "rnbqkb1r/3n1ppp/p2pp3/1p6/3NP1PP/2N1BP2/PPP5/R2QKB1R b KQkq -",
   "rnbqkb1r/5ppp/pn1pp3/1p6/3NP1PP/2N1BP2/PPP5/R2QKB1R w KQkq -",
   "rnbqkb1r/5ppp/pn1pp3/1p6/3NP1PP/2N1BP2/PPPQ4/R3KB1R b KQkq -",
   "r1bqkb1r/3n1ppp/pn1pp3/1p6/3NP1PP/2N1BP2/PPPQ4/R3KB1R w KQkq -",
   "r1bqkb1r/3n1ppp/pn1pp3/1p6/3NP1PP/2N1BP2/PPPQ4/2KR1B1R b kq -",
   "r2qkb1r/1b1n1ppp/pn1pp3/1p6/3NP1PP/2N1BP2/PPPQ4/2KR1B1R w kq -",
   "r2qkb1r/1b1n1ppp/pn1pp3/1p5P/3NP1P1/2N1BP2/PPPQ4/2KR1B1R b kq -",
   "r2qkb1r/1b1n1ppp/pn1pp3/7P/1p1NP1P1/2N1BP2/PPPQ4/2KR1B1R w kq -",
   "r2qkb1r/1b1n1ppp/pn1pp3/7P/1p1NP1P1/4BP2/PPPQ4/1NKR1B1R b kq -",
   "r2qkb1r/1b1n1ppp/pn2p3/3p3P/1p1NP1P1/4BP2/PPPQ4/1NKR1B1R w kq -",
   "r2qkb1r/1b1n1ppp/pn2p3/3p3P/1p1NP1P1/3BBP2/PPPQ4/1NKR3R b kq -",
   "r2qkb1r/1b3ppp/pn2p3/3pn2P/1p1NP1P1/3BBP2/PPPQ4/1NKR3R w kq -",
   "r2qkb1r/1b3ppp/pn2p3/3pn2P/1p1NP1P1/3BBP2/PPP2Q2/1NKR3R b kq -",
   "r2qkb1r/1b3ppp/p3p3/3pn2P/1pnNP1P1/3BBP2/PPP2Q2/1NKR3R w kq -",
   "r2qkb1r/1b3ppp/pn2p3/3p3P/1p1NP1P1/3nBP2/PPP2Q2/1NKR3R w kq -",
   "r2qkb1r/1b3ppp/pn2p3/3p3P/1p1NP1P1/3RBP2/PPP2Q2/1NK4R b kq -",
   "r2qkb1r/1b3ppp/pn2p3/3p3P/1p1NP1P1/3PBP2/PP3Q2/1NKR3R b kq -",
   "r2qkb1r/1b3ppp/pn6/3pp2P/1p1NP1P1/3PBP2/PP3Q2/1NKR3R w kq -",
   "r2qkb1r/1b3ppp/p3p3/3p3P/1pnNP1P1/3RBP2/PPP2Q2/1NK4R w kq -",
   "r2qkb1r/1b3ppp/p3p3/3pn2P/1pBNP1P1/4BP2/PPP2Q2/1NKR3R b kq -",
   "r2qkb1r/1b3ppp/p3p3/3p3P/1pnNP1P1/4BP2/PPP2Q2/1NKR3R w kq -",
   "r2qkb1r/1b3ppp/p3p3/3p3P/1pnNP1P1/4BP2/PPPN1Q2/2KR3R b kq -",
   "r2qkb1r/1b3ppp/p3p3/3p3P/1p1NP1P1/4nP2/PPPN1Q2/2KR3R w kq -",
   "r2qkb1r/1b3ppp/p3p3/3p3P/1p1NP1P1/4QP2/PPPN4/2KR3R b kq -",
   "r2qk2r/1b2bppp/p3p3/3p3P/1p1NP1P1/4QP2/PPPN4/2KR3R w kq -",
   "r2qk2r/1b2bppp/p3p3/3p3P/1p1NPPP1/4Q3/PPPN4/2KR3R b kq -",
   "r2qk2r/1b2bppp/p3p3/3pP2P/1p1N2P1/4QP2/PPPN4/2KR3R b kq -",
   "r3k2r/1b2bppp/pq2p3/3p3P/1p1NPPP1/4Q3/PPPN4/2KR3R w kq -",
   "r2qk2r/1b2bppp/p3p3/7P/1p1NpPP1/4Q3/PPPN4/2KR3R w kq -",
   "r2qk2r/1b2bppp/p3p3/7P/1p1NNPP1/4Q3/PPP5/2KR3R b kq -",
   "r3k2r/1b2bppp/pq2p3/3pP2P/1p1N1PP1/4Q3/PPPN4/2KR3R b kq -",
   "2kr3r/1b2bppp/pq2p3/3pP2P/1p1N1PP1/4Q3/PPPN4/2KR3R w - -",
   "r3k2r/1b2bppp/1q2p3/p2pP2P/1p1N1PP1/4Q3/PPPN4/2KR3R w kq -",
   "2kr3r/1b2bppp/pq2p3/3pP2P/1p1N1PP1/4Q3/PPPN4/1K1R3R b - -",
   "2kr3r/1b2bppp/pq2p3/3pP2P/1p1N1PP1/4QN2/PPP5/2KR3R b - -",
   "1k1r3r/1b2bppp/pq2p3/3pP2P/1p1N1PP1/4Q3/PPPN4/1K1R3R w - -",
   "1k1r3r/1b2bppp/pq2p3/3pP1PP/1p1N1P2/4Q3/PPPN4/1K1R3R b - -",
   "1kr4r/1b2bppp/pq2p3/3pP1PP/1p1N1P2/4Q3/PPPN4/1K1R3R w - -",
   "1kr4r/1b2bppp/pq2p2P/3pP1P1/1p1N1P2/4Q3/PPPN4/1K1R3R b - -",
   "1kr4r/1b2bp1p/pq2p1pP/3pP1P1/1p1N1P2/4Q3/PPPN4/1K1R3R w - -",
   "1kr4r/1b2bp1p/pq2p1pP/3pP1P1/1p1N1P2/4Q3/PPPN4/1KR4R b - -",
   "1k5r/1br1bp1p/pq2p1pP/3pP1P1/1p1N1P2/4Q3/PPPN4/1KR4R w - -",
   "1k5r/1br1bp1p/pq2p1pP/3pP1P1/1p1N1P2/2P1Q3/PP1N4/1KR4R b - -",
   "1kr5/1br1bp1p/pq2p1pP/3pP1P1/1p1N1P2/2P1Q3/PP1N4/1KR4R w - -",
   "1kr5/1br1bp1p/pq2p1pP/3pP1P1/1P1N1P2/4Q3/PP1N4/1KR4R b - -",
   "1kr5/1br2p1p/pq2p1pP/3pP1P1/1b1N1P2/4Q3/PP1N4/1KR4R w - -",
   "1kr5/1bR2p1p/pq2p1pP/3pP1P1/1b1N1P2/4Q3/PP1N4/1K5R b - -",
   "1k6/1br2p1p/pq2p1pP/3pP1P1/1b1N1P2/4Q3/PP1N4/1K5R w - -",
   "1k6/1br2p1p/pq2p1pP/3pP1P1/1b1N1P2/4Q3/PP1N4/1KR5 b - -",
   "1k6/1br2p1p/1q2p1pP/p2pP1P1/1b1N1P2/4Q3/PP1N4/1KR5 w - -",
   "1k6/1bR2p1p/1q2p1pP/p2pP1P1/1b1N1P2/4Q3/PP1N4/1K6 b - -",
   "8/1bk2p1p/1q2p1pP/p2pP1P1/1b1N1P2/4Q3/PP1N4/1K6 w - -",
   "8/1bk2p1p/1q2p1pP/p2pP1P1/Pb1N1P2/4Q3/1P1N4/1K6 b - -",
   "8/2k2p1p/1qb1p1pP/p2pP1P1/Pb1N1P2/4Q3/1P1N4/1K6 w - -",
   "8/2k2p1p/1qb1p1pP/p2pP1P1/Pb1N1P2/1N2Q3/1P6/1K6 b - -",
   "8/2k2p1p/1qb1p1pP/p2pP1P1/Pb1N1P2/1P2Q3/3N4/1K6 b - -",
   "8/2k2p1p/1q2p1pP/p2pP1P1/bb1N1P2/1P2Q3/3N4/1K6 w - -",
   "8/2k2p1p/1q2p1pP/p2pP1P1/bb1N1P2/1N2Q3/1P6/1K6 w - -",
   "8/2k2p1p/1q2p1pP/p2pP1P1/bb1N1P2/1N6/1P6/1KQ5 b - -",
   "8/1k3p1p/1q2p1pP/p2pP1P1/bb1N1P2/1N6/1P6/1KQ5 w - -",
   "8/1k3p1p/1q2p1pP/p2pP1P1/bb1N1P2/1N6/1P6/1K1Q4 b - -",
   "8/1k1b1p1p/1q2p1pP/p2pP1P1/1b1N1P2/1N6/1P6/1K1Q4 w - -",
   "8/1k3p1p/1q2p1pP/p2pP1P1/1b1N1P2/1b6/1P6/1K1Q4 w - -",
   "8/1k3p1p/1q2p1pP/p2pP1P1/1b3P2/1N6/1P6/1K1Q4 b - -",
   "8/1k3p1p/4p1pP/p2pP1P1/1b3P2/1N2q3/1P6/1K1Q4 w - -",
   "8/1k1b1p1p/1q2p1pP/p2pP1P1/1b1N1P2/1N1Q4/1P6/1K6 b - -",
   "8/1k1b1p1p/1q2p1pP/3pP1P1/pb1N1P2/1N1Q4/1P6/1K6 w - -",
   "8/1k1b1p1p/1q2p1pP/3pP1P1/pb1N1P2/3Q4/1P1N4/1K6 b - -",
   "8/1k1b1p1p/1q2p1pP/2bpP1P1/p2N1P2/3Q4/1P1N4/1K6 w - -",
   "8/1k1b1p1p/1q2p1pP/2bpP1P1/p4P2/3Q4/1PNN4/1K6 b - -",
   "8/1k3p1p/1q2p1pP/1bbpP1P1/p4P2/3Q4/1PNN4/1K6 w - -",
   "8/1k3p1p/1q2p1pP/1bbpP1P1/p4P2/2Q5/1PNN4/1K6 b - -",
   "8/1k3p1p/1q2p1pP/2bpP1P1/p4P2/2Q5/1PNNb3/1K6 w - -",
   "8/1k3p1p/1q2p1pP/2bpP1P1/p4P2/2Q5/KPNNb3/8 b - -",
   "8/1k3p1p/1q2p1pP/2b1P1P1/p2p1P2/2Q5/KPNNb3/8 w - -",
   "8/1k3p1p/1q2p1pP/2b1P1P1/p2p1P2/6Q1/KPNNb3/8 b - -",
   "8/1k3p1p/2q1p1pP/2b1P1P1/p2p1P2/6Q1/KPNNb3/8 w - -",
   "8/1k3p1p/2q1p1pP/2b1P1P1/p2p1P2/6Q1/1PNNb3/1K6 b - -",
   "8/1k3p1p/2q1p1pP/2b1P1P1/p4P2/3p2Q1/1PNNb3/1K6 w - -",
   "8/1k3p1p/2q1p1pP/2b1P1P1/p4P2/3pN1Q1/1P1Nb3/1K6 b - -",
   "8/1k3p1p/2q1p1pP/4P1P1/pb3P2/3pN1Q1/1P1Nb3/1K6 w - -",
   "8/1k3p1p/2q1p1pP/4P1P1/pb3P2/3pN3/1P1Nb3/1K2Q3 b - -",
   "8/1k3p1p/4p1pP/2q1P1P1/pb3P2/3pN3/1P1Nb3/1K2Q3 w - -",
   "8/1k3p1p/4p1pP/2q1P1P1/pbN2P2/3p4/1P1Nb3/1K2Q3 b - -",
   "8/1k3p1p/4p1pP/2q1P1P1/pb3P2/3pN3/1P1Nb3/1K5Q b - -",
   "1k6/5p1p/4p1pP/2q1P1P1/pb3P2/3pN3/1P1Nb3/1K5Q w - -",
   "8/1k3p1p/4p1pP/4P1P1/pbq2P2/3p4/1P1Nb3/1K2Q3 w - -",
   "8/1k3p1p/4p1pP/4P1P1/pbq2P2/3p4/1P1Nb3/1K5Q b - -",
   "8/1k3p1p/2q1p1pP/4P1P1/pb3P2/3p4/1P1Nb3/1K5Q w - -");

var cmoves = new Array ( 
   "[*]",
   "1.e4",
   "1...c5",
   "2.Nf3",
   "2...d6",
   "3.d4",
   "3...cxd4",
   "4.Nxd4",
   "4...Nf6",
   "5.Nc3",
   "5...a6",
   "6.Be3",
   "6...e6",
   "7.f3",
   "7...b5",
   "8.g4",
   "8...Nfd7",
   "9.h4",
   "9...Nb6",
   "10.Qd2",
   "10...N8d7",
   "11.O-O-O",
   "11...Bb7",
   "12.h5",
   "12...b4",
   "13.Nb1",
   "13...d5",
   "14.Bd3",
   "14...Ne5",
   "15.Qf2",
   "15...Nbc4",
   "15...Nxd3",
   "16.Rxd3",
   "16.cxd3",
   "16...e5",
   "16...Nc4",
   "16.Bxc4",
   "16...Nxc4",
   "17.Nd2",
   "17...Nxe3",
   "18.Qxe3",
   "18...Be7",
   "19.f4",
   "19.e5",
   "19...Qb6",
   "19...dxe4",
   "20.Nxe4",
   "20.e5",
   "20...O-O-O",
   "20...a5",
   "21.Kb1",
   "21.N2f3",
   "21...Kb8",
   "22.g5",
   "22...Rc8",
   "23.h6",
   "23...g6",
   "24.Rc1",
   "24...Rc7",
   "25.c3",
   "25...Rhc8",
   "26.cxb4",
   "26...Bxb4",
   "27.Rxc7",
   "27...Rxc7",
   "28.Rc1",
   "28...a5",
   "29.Rxc7",
   "29...Kxc7",
   "30.a4",
   "30...Bc6",
   "31.N2b3",
   "31.b3",
   "31...Bxa4",
   "31...Bxa4",
   "32.Qc1",
   "32...Kb7",
   "33.Qd1",
   "33...Bd7",
   "33...Bxb3",
   "34.Nxb3",
   "34...Qe3",
   "34.Qd3",
   "34...a4",
   "35.Nd2",
   "35...Bc5",
   "36.Nc2",
   "36...Bb5",
   "37.Qc3",
   "37...Be2",
   "38.Ka2",
   "38...d4",
   "39.Qg3",
   "39...Qc6",
   "40.Kb1",
   "40...d3",
   "41.Ne3",
   "41...Bb4",
   "42.Qe1",
   "42...Qc5",
   "43.Nec4",
   "43.Qh1",
   "43...Kb8",
   "43...Qxc4",
   "44.Qh1",
   "44...Qc6");

