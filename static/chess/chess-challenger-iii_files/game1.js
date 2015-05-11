var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
   0,0,1,1,1,1,1,1,1,1,0,0,0);

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
   "S17",
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
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -",
   "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -",
   "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -",
   "r1bqk1nr/pp1pppbp/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -",
   "r1bqk1nr/pp1pppbp/2n3p1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -",
   "r1bqk2r/pp1pppbp/2n2np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq -",
   "r1bqk2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq -",
   "r1b1k2r/pp1pppbp/2n2np1/q7/2BNP3/2N1B3/PPP2PPP/R2QK2R w KQkq -",
   "r1b1k2r/pp1pppbp/2n2np1/q7/2BNP3/2N1B3/PPP2PPP/R2Q1RK1 b kq -",
   "r1b1k2r/pp1pppbp/2n2np1/8/1qBNP3/2N1B3/PPP2PPP/R2Q1RK1 w kq -",
   "r1b1k2r/pp1pppbp/2n2np1/8/1qBNP3/2N1B3/PPP1QPPP/R4RK1 b kq -",
   "r1b1k2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PqP1QPPP/R4RK1 w kq -",
   "r1b1k2r/pp1pppbp/2n2np1/1N6/2BNP3/4B3/PqP1QPPP/R4RK1 b kq -",
   "r1b1k2r/pp1pppbp/2n3p1/1N6/2BNn3/4B3/PqP1QPPP/R4RK1 w kq -",
   "r1b1k2r/pp1pppbp/2n3p1/1N6/2BNn3/4B3/PqP1QPPP/1R3RK1 b kq -",
   "r1b1k2r/pp1pppbp/6p1/1N6/2Bnn3/4B3/PqP1QPPP/1R3RK1 w kq -",
   "r1b1k2r/pp1pppbp/2n3p1/1N6/2BN4/2n1B3/PqP1QPPP/1R3RK1 w kq -",
   "r1b1k2r/pp1pppbp/2n3p1/1N6/2BN4/2n1B3/PRP1QPPP/5RK1 b kq -",
   "r1b1k2r/pp1pppbp/2n3p1/1N6/2BN4/4B3/PRP1nPPP/5RK1 w kq -",
   "r1b1k2r/pp1pppbp/2n3p1/1N6/3N4/4B3/PRP1BPPP/5RK1 b kq -",
   "r1b1k2r/pp1pppbp/6p1/1N6/2BBn3/8/PqP1QPPP/1R3RK1 b kq -",
   "r1b1k2r/pp1ppp1p/6p1/1N6/2Bbn3/8/PqP1QPPP/1R3RK1 w kq -",
   "r1b1k2r/pp1pppbp/6p1/1N6/2Bqn3/8/P1P1QPPP/1R3RK1 w kq -",
   "r1b1k2r/pp1pppbp/6p1/8/2BNn3/8/P1P1QPPP/1R3RK1 b kq -",
   "r1b1k2r/pp1pppbp/6p1/8/2BN4/2n5/P1P1QPPP/1R3RK1 w kq -",
   "r1b1k2r/pp1pppbp/6p1/8/2BN4/2n1Q3/P1P2PPP/1R3RK1 b kq -",
   "r1b1k2r/pp1pppbp/6p1/8/2BN4/4Q3/P1P2PPP/1n3RK1 w kq -",
   "r1b1k2r/pp1pppbp/6p1/1N6/2B5/4Q3/P1P2PPP/1n3RK1 b kq -",
   "r1b2rk1/pp1pppbp/6p1/1N6/2B5/4Q3/P1P2PPP/1n3RK1 w - -",
   "r1b2rk1/pp1pppbp/6p1/1N6/2B5/4Q3/P1P2PPP/1R4K1 b - -",
   "r1b1k2r/pp1ppp1p/6p1/1N6/2Bbn3/8/PRP1QPPP/5RK1 b kq -",
   "r1b1k2r/pp1ppp1p/6p1/1N6/2B1n3/8/PbP1QPPP/5RK1 w kq -",
   "r1b1k2r/pp1ppp1p/6p1/1N6/2B1Q3/8/PbP2PPP/5RK1 b kq -");

var cmoves = new Array ( 
   "[*]",
   "1.e4",
   "1...c5",
   "2.Nf3",
   "2...Nc6",
   "3.d4",
   "3...cxd4",
   "4.Nxd4",
   "4...g6",
   "5.Nc3",
   "5...Bg7",
   "6.Be3",
   "6...Nf6",
   "7.Bc4",
   "7...Qa5",
   "8.O-O",
   "8...Qb4",
   "9.Qe2",
   "9...Qxb2",
   "10.Ncb5",
   "10...Nxe4",
   "11.Rab1",
   "11...Nxd4",
   "11...Nc3",
   "12.Rxb2",
   "12...Nxe2",
   "13.Bxe2",
   "12.Bxd4",
   "12...Bxd4",
   "12...Qxd4",
   "13.Nxd4",
   "13...Nc3",
   "14.Qe3",
   "14...Nxb1",
   "15.Nb5",
   "15...O-O",
   "16.Rxb1",
   "13.Rxb2",
   "13...Bxb2",
   "14.Qxe4");

