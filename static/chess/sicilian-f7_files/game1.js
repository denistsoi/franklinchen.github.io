var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,3,
   2,1,1,2,2,2,2,2,2,2,2,1);

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
   "S31",
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
   "S17");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq -",
   "rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq -",
   "rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq -",
   "rnbqk1nr/pp1pppbp/6p1/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq -",
   "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq -",
   "rnbqk1nr/pp1pppbp/6p1/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq -",
   "rnbqk1nr/pp1pppbp/6p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -",
   "r1bqk1nr/pp1pppbp/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -",
   "r1bqk1nr/pp1pppbp/2n3p1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -",
   "r1bqk1nr/1p1pppbp/p1n3p1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq -",
   "r1bqk1nr/1p1pppbp/p1n3p1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq -",
   "r1bqk1nr/1p1pppbp/p5p1/n7/2BNP3/2N1B3/PPP2PPP/R2QK2R w KQkq -",
   "r1bqk1nr/1p1ppBbp/p5p1/n7/3NP3/2N1B3/PPP2PPP/R2QK2R b KQkq -",
   "r1bqk1nr/1p1ppBbp/p5p1/n7/3NP3/2N1B3/PPP2PPP/R2QK2R w KQkq -",
   "r1bq2nr/1p1ppkbp/p5p1/n7/3NP3/2N1B3/PPP2PPP/R2QK2R w KQ -",
   "r1bq2nr/1p1ppkbp/p3N1p1/n7/4P3/2N1B3/PPP2PPP/R2QK2R b KQ -",
   "r1bq2nr/1p1ppk1p/p3N1p1/n7/4P3/2b1B3/PPP2PPP/R2QK2R w KQ -",
   "r1b1q1nr/1p1ppkbp/p3N1p1/n7/4P3/2N1B3/PPP2PPP/R2QK2R w KQ -",
   "r1b1q1nr/1pNppkbp/p5p1/n7/4P3/2N1B3/PPP2PPP/R2QK2R b KQ -",
   "r1b2qnr/1pNppkbp/p5p1/n7/4P3/2N1B3/PPP2PPP/R2QK2R w KQ -",
   "r1bq2nr/1pNppkbp/p5p1/n7/4P3/2N1B3/PPP2PPP/R2QK2R w KQ -",
   "r1bq2nr/1pNppkbp/p5p1/n2Q4/4P3/2N1B3/PPP2PPP/R3K2R b KQ -",
   "r1bq2nr/1pNp1kbp/p3p1p1/n2Q4/4P3/2N1B3/PPP2PPP/R3K2R w KQ -",
   "r1bq2nr/1p1p1kbp/p3N1p1/n2Q4/4P3/2N1B3/PPP2PPP/R3K2R b KQ -",
   "r1b2qnr/1pNppkbp/p5p1/n7/4P3/2N1BQ2/PPP2PPP/R3K2R b KQ -",
   "r1bq2nr/1p1ppk1p/p3N1p1/n7/4P3/2P1B3/P1P2PPP/R2QK2R b KQ -",
   "r1b1q1nr/1p1ppk1p/p3N1p1/n7/4P3/2P1B3/P1P2PPP/R2QK2R w KQ -",
   "r1bq2nr/1p1pp2p/p3k1p1/n7/4P3/2P1B3/P1P2PPP/R2QK2R w KQ -",
   "r1bq2nr/1p1pp2p/p3k1p1/n2Q4/4P3/2P1B3/P1P2PPP/R3K2R b KQ -",
   "r1bq2nr/1p1pp2p/p4kp1/n2Q4/4P3/2P1B3/P1P2PPP/R3K2R w KQ -",
   "r1bq2nr/1p1pp2p/p4kp1/n2Q4/3BP3/2P5/P1P2PPP/R3K2R b KQ -",
   "r1bq2nr/1p1p3p/p4kp1/n2Qp3/3BP3/2P5/P1P2PPP/R3K2R w KQ -",
   "r1bq2nr/1p1p3p/p4kp1/n3Q3/3BP3/2P5/P1P2PPP/R3K2R b KQ -",
   "r1bq2nr/1p1p1k1p/p5p1/n3Q3/3BP3/2P5/P1P2PPP/R3K2R w KQ -",
   "r1bq2nQ/1p1p1k1p/p5p1/n7/3BP3/2P5/P1P2PPP/R3K2R b KQ -",
   "r1b1q1nr/1pNppk1p/p5p1/n7/4P3/2P1B3/P1P2PPP/R2QK2R b KQ -");

var cmoves = new Array ( 
   "[*]",
   "1.e4",
   "1...c5",
   "2.Nc3",
   "2...g6",
   "3.Nf3",
   "3...Bg7",
   "4.d4",
   "4...cxd4",
   "5.Nxd4",
   "5...Nc6",
   "6.Be3",
   "6...a6",
   "7.Bc4",
   "7...Na5",
   "8.Bxf7",
   "8...[...]",
   "8...Kxf7",
   "9.Ne6",
   "9...Bxc3",
   "9...Qe8",
   "10.Nc7",
   "10...Qf8",
   "10...Qd8",
   "11.Qd5",
   "11...e6",
   "12.Nxe6",
   "11.Qf3",
   "10.bxc3",
   "10...Qe8",
   "10...Kxe6",
   "11.Qd5",
   "11...Kf6",
   "12.Bd4",
   "12...e5",
   "13.Qxe5",
   "13...Kf7",
   "14.Qxh8",
   "11.Nc7");
