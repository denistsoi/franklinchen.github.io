var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,
   0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,
   0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
   1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,
   1,1,1,1,1,1,1,1,2,2,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,
   1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,
   1,1,1,1,0,0,0,0,0);

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
   "S31",
   "S17",
   "S16",
   "S31",
   "S16",
   "S16",
   "S16",
   "S16",
   "S31",
   "S17",
   "S17",
   "S16",
   "S31",
   "S31",
   "S17",
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
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
   "S17",
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
   "S16",
   "S31",
   "S17",
   "S16",
   "S31",
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
   "S16",
   "S31",
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
   "S17",
   "S18",
   "S18",
   "S17",
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
   "S31",
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
   "S16",
   "S16",
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq -",
   "r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq -",
   "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq -",
   "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R b KQkq -",
   "r1bqk1nr/pp1pppbp/2n3p1/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq -",
   "r1bqk1nr/pp1pppbp/2n3p1/1Bp5/4PP2/2N2N2/PPPP2PP/R1BQK2R b KQkq -",
   "r1bqk1nr/pp1pppbp/6p1/1Bp5/3nPP2/2N2N2/PPPP2PP/R1BQK2R w KQkq -",
   "r1bqk1nr/pp1pppbp/6p1/1Bp5/3nPP2/2N2N2/PPPP2PP/R1BQ1RK1 b kq -",
   "r1bqk1nr/1p1pppbp/p5p1/1Bp5/3nPP2/2N2N2/PPPP2PP/R1BQ1RK1 w kq -",
   "r1bqk1nr/1p1pppbp/p5p1/2p5/2BnPP2/2N2N2/PPPP2PP/R1BQ1RK1 b kq -",
   "r1bqk1nr/1p1p1pbp/p3p1p1/2p5/2BnPP2/2N2N2/PPPP2PP/R1BQ1RK1 w kq -",
   "r1bqk1nr/1p1p1pbp/p3p1p1/2p5/2BnPP2/2NP1N2/PPP3PP/R1BQ1RK1 b kq -",
   "r1bqk1nr/3p1pbp/p3p1p1/1pp5/2BnPP2/2NP1N2/PPP3PP/R1BQ1RK1 w kq -",
   "r1bqk1nr/3p1pbp/p3p1p1/1pp5/3nPP2/1BNP1N2/PPP3PP/R1BQ1RK1 b kq -",
   "r2qk1nr/1b1p1pbp/p3p1p1/1pp5/3nPP2/1BNP1N2/PPP3PP/R1BQ1RK1 w kq -",
   "r2qk1nr/1b1p1pbp/p3p1p1/1pp5/3nPP2/1BNP1N2/PPP3PP/R1B1QRK1 b kq -",
   "r2qk1nr/1b1p1pbp/p3p1p1/1pp2P2/3nP3/1BNP1N2/PPP3PP/R1BQ1RK1 b kq -",
   "r2qk1nr/1b1p1pbp/p3p3/1pp2p2/3nP3/1BNP1N2/PPP3PP/R1BQ1RK1 w kq -",
   "r2qk2r/1b1pnpbp/p3p1p1/1pp5/3nPP2/1BNP1N2/PPP3PP/R1B1QRK1 w kq -",
   "r2qk1nr/1b1p2bp/p3p1p1/1pp2p2/3nPP2/1BNP1N2/PPP3PP/R1B1QRK1 w kq -",
   "r2qk2r/1b1pnpbp/p3p1p1/1pp5/3NPP2/1BNP4/PPP3PP/R1B1QRK1 b kq -",
   "r2qk2r/1b1pnp1p/p3p1p1/1pp5/3bPP2/1BNP4/PPP3PP/R1B1QRK1 w kq -",
   "r2qk2r/1b1pnp1p/p3p1p1/1pp5/3bPP2/1BNPB3/PPP3PP/R3QRK1 b kq -",
   "r2qk2r/1b1p1p1p/p1n1p1p1/1pp5/3bPP2/1BNPB3/PPP3PP/R3QRK1 w kq -",
   "r2qk2r/1b1pnp1p/p3p1p1/1pp5/4PP2/1BNPb3/PPP3PP/R3QRK1 w kq -",
   "r2qk2r/1b1pnp1p/p3p1p1/1pp5/4PP2/1BNPQ3/PPP3PP/R4RK1 b kq -",
   "r3k2r/1b1pnp1p/pq2p1p1/1pp5/4PP2/1BNPQ3/PPP3PP/R4RK1 w kq -",
   "r2qk2r/1b1p1p1p/p1n1p1p1/1pp5/3bPP2/1BNPB3/PPP3PP/R3QR1K b kq -",
   "r2qk2r/1b1p1p1p/p1n1p1p1/1pp5/3bPP2/1B1PB3/PPP3PP/R2NQRK1 b kq -",
   "r2qk2r/1b1p1p1p/p1n1p1p1/1pp2P2/3bP3/1BNPB3/PPP3PP/R3QRK1 b kq -",
   "r3k2r/1b1p1p1p/p1n1p1p1/1pp2Pq1/3bP3/1BNPB3/PPP3PP/R3QRK1 w kq -",
   "r2qk2r/1b1p3p/p1n1p1p1/1pp2p2/3bPP2/1BNPB3/PPP3PP/R3QR1K w kq -",
   "r2qk2r/1b1p3p/p1n1p1p1/1pp2p2/3bPP2/1BNPB3/PPP2QPP/R4R1K b kq -",
   "r2q1rk1/1b1p3p/p1n1p1p1/1pp2p2/3bPP2/1BNPB3/PPP2QPP/R4R1K w - -",
   "r2q1rk1/1b1p3p/p1n1p1p1/1pp2P2/3b1P2/1BNPB3/PPP2QPP/R4R1K b - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pp2p2/3b1P2/1BNPB3/PPP2QPP/R4R1K w - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pp2p2/3b1P2/1B1PB3/PPP1NQPP/R4R1K b - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pp2p2/3b1P2/1B1PB3/PPP2QPP/R2N1R1K b - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pp2p2/5P2/1B1PB3/PbP1NQPP/R4R1K w - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pp2p2/5P2/1B1PB3/PbP1NQPP/4RR1K b - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pB2p2/5P2/1B1P4/PbP1NQPP/R4R1K b - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pB2p2/5P2/1B1P4/P1P1NQPP/b4R1K w - -",
   "r2q1Bk1/1b1p3p/p1n1p3/1p3p2/5P2/1B1P4/P1P1NQPP/b4R1K b - -",
   "r4qk1/1b1p3p/p1n1p3/1p3p2/5P2/1B1P4/P1P1NQPP/b4R1K w - -",
   "r4qk1/1b1p3p/p1n1p3/1p3p2/5P2/1B1P4/P1P1NQPP/R6K b - -",
   "r5k1/1b1p2qp/p1n1p3/1p3p2/5P2/1B1P4/P1P1NQPP/R6K w - -",
   "r5k1/1b1p2qp/p1n1p3/1p3p2/5P2/1B1P4/P1P1NQPP/6RK b - -",
   "r5k1/1b1pn1qp/p3p3/1p3p2/5P2/1B1P4/P1P1NQPP/6RK w - -",
   "r2q2k1/1b1p1r1p/p1n1p3/1pp2p2/5P2/1B1PB3/PbP1NQPP/4RR1K w - -",
   "r2q1rk1/1b1p3p/p1n1p3/1pp2p2/3b1P2/1B1PB3/P1P1NQPP/4RR1K w - -",
   "r2q2k1/1b1p1r1p/p1n1p3/1pB2p2/5P2/1B1P4/PbP1NQPP/4RR1K b - -",
   "r2q2k1/1b1p1r1p/p1n1pb2/1pB2p2/5P2/1B1P4/P1P1NQPP/4RR1K w - -",
   "r2q2k1/1b1p1r1p/p1n1pb2/1pB2p2/5P2/1B1P4/P1P1NQPP/3R1R1K b - -",
   "r2q2k1/1b1p2rp/p1n1pb2/1pB2p2/5P2/1B1P4/P1P1NQPP/3R1R1K w - -",
   "r2q2k1/1b1p2rp/p1n1pb2/1pB2p2/5P2/1B1P4/P1P1NQPP/3R2RK b - -",
   "r2q3k/1b1p2rp/p1n1pb2/1pB2p2/5P2/1B1P4/P1P1NQPP/3R2RK w - -",
   "r3q1k1/1b1p2rp/p1n1pb2/1pB2p2/5P2/1B1P4/P1P1NQPP/3R2RK w - -",
   "r2q3k/1b1p2rp/p1n1pb2/1pB2p2/P4P2/1B1P4/2P1NQPP/3R2RK b - -",
   "r3q2k/1b1p2rp/p1n1pb2/1pB2p2/P4P2/1B1P4/2P1NQPP/3R2RK w - -",
   "r3q2k/1b1p2rp/p1n1pb2/1PB2p2/5P2/1B1P4/2P1NQPP/3R2RK b - -",
   "r3q2k/1b1p2rp/p1n1pb2/1pB2p2/P2P1P2/1B6/2P1NQPP/3R2RK b - -",
   "r3q2k/1b1p2rp/2n1pb2/1pB2p2/5P2/1B1P4/2P1NQPP/3R2RK w - -",
   "r3q2k/1b1p2rp/2n1pb2/1pB2p2/3P1P2/1B6/2P1NQPP/3R2RK b - -",
   "r6k/1b1p2rp/2n1pbq1/1pB2p2/3P1P2/1B6/2P1NQPP/3R2RK w - -",
   "r6k/1b1p2rp/2n1pbq1/1pBP1p2/5P2/1B6/2P1NQPP/3R2RK b - -",
   "r6k/1b1p2rp/4pbq1/npBP1p2/5P2/1B6/2P1NQPP/3R2RK w - -",
   "r6k/1b1p2rp/4Pbq1/npB2p2/5P2/1B6/2P1NQPP/3R2RK b - -",
   "r6k/1b1p2rp/4Pbq1/1pB2p2/5P2/1n6/2P1NQPP/3R2RK w - -",
   "r6k/1b1p2rp/4Pbq1/1pB2p2/5P2/1P6/4NQPP/3R2RK b - -",
   "r6k/1b4rp/4pbq1/1pB2p2/5P2/1P6/4NQPP/3R2RK w - -",
   "r6k/1b4rp/4pbq1/1pB2p2/3N1P2/1P6/5QPP/3R2RK b - -",
   "r6k/6rp/4pbq1/1pBb1p2/3N1P2/1P6/5QPP/3R2RK w - -",
   "r6k/1b4rp/4pb2/1pB2p1q/3N1P2/1P6/5QPP/3R2RK w - -",
   "r6k/1b4rp/4pb2/1pB2p1q/5P2/1P3N2/5QPP/3R2RK b - -",
   "r6k/1b5p/4pb2/1pB2p1q/5P2/1P3N2/5QrP/3R2RK w - -",
   "r6k/1b5p/4pb2/1pB2p1q/5P2/1P3N2/5QKP/3R2R1 b - -",
   "7k/1b5p/4pb2/1pB2p1q/5P2/1P3N2/r4QKP/3R2R1 w - -",
   "7k/1b5p/4pb2/1pB2p1q/5P2/1P1R1N2/r4QKP/6R1 b - -",
   "7k/1b5p/4pb2/1pB2p1q/5P2/1P1R1N2/5rKP/6R1 w - -",
   "7k/1b5p/4pb2/1pB2p1q/5P2/1P1R1N2/5K1P/6R1 b - -",
   "r6k/6rp/4pbq1/1pBb1p2/3N1P2/1P5P/5QP1/3R2RK b - -",
   "r6k/6rp/4pbq1/1NBb1p2/5P2/1P6/5QPP/3R2RK b - -",
   "r6k/6rp/4pbq1/1NB2p2/5P2/1b6/5QPP/3R2RK w - -",
   "6rk/6rp/4pbq1/1pBb1p2/3N1P2/1P5P/5QP1/3R2RK w - -",
   "7k/6rp/4pbq1/1pBb1p2/3N1P2/1P5P/r4QP1/3R2RK w - -",
   "7k/6rp/4pbq1/1pBb1p2/3N1P2/1P5P/Q5P1/3R2RK b - -",
   "7k/6rp/4pb2/1pBb1p2/3N1P2/1P4qP/Q5P1/3R2RK w - -",
   "r6k/6rp/4pb2/1pBb1p1q/3N1P2/1P5P/5QP1/3R2RK w - -",
   "r6k/6rp/4pb2/1pBb1p1q/3N1P2/1P1R3P/5QP1/6RK b - -",
   "r6k/6rp/4pb2/1pB2p1q/3NbP2/1P1R3P/5QP1/6RK w - -",
   "r6k/6rp/4pb2/1pB2p1q/3NbP2/1P2R2P/5QP1/6RK b - -",
   "r6k/6rp/4pb2/1pB2p1q/3N1P2/1P2R2P/5Qb1/6RK w - -",
   "r6k/6rp/4pb2/1pB2p1q/3N1P2/1P2R2P/5QR1/7K b - -",
   "7k/6rp/4pb2/1pB2p1q/3N1P2/1P2R2P/5QR1/r6K w - -",
   "7k/6rp/4pb2/1pB2p1q/3N1P2/1P2R2P/5QRK/r7 b - -",
   "7k/6rp/4pb2/1pB2p2/3N1P2/1P2R2P/5QRK/r2q4 w - -",
   "6rk/6rp/4pbq1/1pBb1p2/3N1P2/1P5P/3R1QP1/6RK b - -",
   "6rk/6rp/4pbq1/1pBb1p2/5P2/1P3N1P/5QP1/3R2RK b - -",
   "6rk/6rp/4pbq1/1pB2p2/5P2/1b3N1P/5QP1/3R2RK w - -",
   "6rk/6rp/4pb2/1pBb1p1q/3N1P2/1P5P/3R1QP1/6RK w - -",
   "6rk/6rp/4pb2/1pBb1p1q/3N1P2/1P5P/3R1QPK/6R1 b - -",
   "6rk/6rp/5b2/1pBbpp1q/3N1P2/1P5P/3R1QPK/6R1 w - -",
   "6rk/6rp/4p3/1pBb1p1q/3N1P1b/1P5P/3R1QPK/6R1 w - -",
   "6rk/6rp/4p3/1pBb1p1q/3N1P1b/1P4PP/3R1Q1K/6R1 b - -",
   "6rk/6rp/4p3/1pBb1p1q/3N1P2/1P4bP/3R1Q1K/6R1 w - -",
   "6rk/6rp/4p3/1pBb1p1q/3N1P2/1P4RP/3R1Q1K/8 b - -",
   "6rk/7p/4p3/1pBb1p1q/3N1P2/1P4rP/3R1Q1K/8 w - -",
   "6rk/7p/4p3/1pBb1p1q/3N1P2/1P4QP/3R3K/8 b - -",
   "7k/7p/4p3/1pBb1p1q/3N1P2/1P4rP/3R3K/8 w - -",
   "7k/7p/4p3/1pBb1p1q/3N1P2/1P4KP/3R4/8 b - -",
   "7k/7p/8/1pBbpp1q/3N1P2/1P4KP/3R4/8 w - -",
   "7k/7p/8/1pBbPp1q/3N4/1P4KP/3R4/8 b - -",
   "7k/7p/8/1pBbpp1q/5P2/1P4KP/2NR4/8 b - -",
   "7k/7p/8/1pBbpp2/5P2/1P3qKP/2NR4/8 w - -",
   "7k/7p/8/1pBbPpq1/3N4/1P4KP/3R4/8 w - -",
   "6rk/6rp/5b2/1pBbpp1q/5P2/1P5P/2NR1QPK/6R1 b - -",
   "6rk/6rp/5b2/1pBbpp1q/5P2/1P3N1P/3R1QPK/6R1 b - -",
   "6rk/6rp/8/1pBbpp1q/5P1b/1P5P/2NR1QPK/6R1 w - -",
   "6rk/6rp/8/1pBbpp1q/5P1b/1P2Q2P/2NR2PK/6R1 b - -",
   "6rk/6rp/8/1pBb1p1q/5p1b/1P2Q2P/2NR2PK/6R1 w - -",
   "6rk/6rp/8/1pBbpp1q/5P2/1P2Q1bP/2NR2PK/6R1 w - -",
   "6rk/6rp/8/1pBbpp1q/5P2/1P4QP/2NR2PK/6R1 b - -",
   "6rk/7p/8/1pBbpp1q/5P2/1P4rP/2NR2PK/6R1 w - -",
   "6rk/7p/8/1pBRpp1q/5P2/1P4rP/2N3PK/6R1 b - -",
   "6rk/7p/8/1pBRpp2/5P2/1P4rP/2N1q1PK/6R1 w - -",
   "6rk/6rp/8/1pBb1p1q/5Q1b/1P5P/2NR2PK/6R1 b - -",
   "6rk/6rp/8/1pBb1p1q/5Q2/1P4bP/2NR2PK/6R1 w - -",
   "6rk/6rp/8/1pBb1p1q/8/1P4QP/2NR2PK/6R1 b - -",
   "6rk/7p/8/1pBb1p1q/8/1P4rP/2NR2PK/6R1 w - -",
   "6rk/7p/8/1pBR1p1q/8/1P4rP/2N3PK/6R1 b - -",
   "6rk/7p/8/1p1b1p1q/3B4/1P4rP/2NR2PK/6R1 b - -",
   "6rk/6rp/8/1p1b1p1q/3B4/1P5P/2NR2PK/6R1 w - -",
   "6rk/7p/8/1pBR1p1q/8/1P5r/2N3PK/6R1 w - -",
   "6rk/7p/8/1pBR1p1q/8/1P5P/2N4K/6R1 b - -",
   "6rk/7p/8/1pBR1p2/8/1P5P/2N1q2K/6R1 w - -",
   "6rk/7p/8/1pBR1p2/8/1P5P/2N1q3/6RK b - -",
   "6rk/7p/8/1pBR1p2/8/1P3q1P/2N5/6RK w - -",
   "6rk/7p/8/1pBR1p2/4q3/1P5P/2N5/6RK w - -",
   "6rk/7p/8/1pBR1p2/4q3/1P5P/2N4K/6R1 b - -",
   "6rk/7p/8/1pBR1p2/8/1P5P/2q4K/6R1 w - -",
   "6rk/7p/8/1pBR1p2/8/1P5P/2q5/6RK b - -",
   "6rk/7p/8/1pBR1p2/4q3/1P5P/8/6RK w - -",
   "6rk/7p/8/1pBR1p2/4q3/1P5P/7K/6R1 b - -",
   "6rk/7p/8/1pBq1p2/8/1P5P/7K/6R1 w - -",
   "6rk/7p/8/1pBR1p2/8/1P3q1P/2N4K/6R1 b - -",
   "7k/7p/8/1pBR1p2/8/1P3q1P/2N4K/6r1 w - -",
   "3R3k/7p/8/1pB2p2/8/1P3q1P/2N4K/6r1 b - -",
   "3R4/6kp/8/1pB2p2/8/1P3q1P/2N4K/6r1 w - -",
   "3R4/6kp/8/1pB2p2/8/1P3q1P/2N5/6K1 b - -",
   "3R4/6kp/8/1pB2p2/8/1P4qP/2N5/6K1 w - -",
   "3R4/6kp/8/1pB2p2/8/1P4qP/2N5/7K b - -",
   "3R4/6kp/8/1pB2p2/8/1P4qP/2N5/5K2 b - -",
   "3R4/6kp/8/1pB2p2/8/1P5q/2N5/7K w - -",
   "3R4/6kp/8/1pB2p2/8/1P5q/2N5/6K1 b - -",
   "3R4/6kp/8/1pB2p2/8/1q6/2N5/6K1 w - -",
   "3R4/6kp/8/1p3p2/3B4/1q6/2N5/6K1 b - -",
   "3R4/5k1p/8/1p3p2/3B4/1q6/2N5/6K1 w - -",
   "8/3R1k1p/8/1p3p2/3B4/1q6/2N5/6K1 b - -",
   "3R4/5k1p/8/1p3p2/3B4/1q2N3/8/6K1 b - -",
   "3R4/5k1p/8/1p6/3B1p2/1q2N3/8/6K1 w - -",
   "3R4/5k1p/8/1p6/3B1p2/1q6/8/5NK1 b - -",
   "3R4/5k1p/4q3/1p6/3B1p2/8/8/5NK1 w - -",
   "8/3R3p/4k3/1p3p2/3B4/1q6/2N5/6K1 w - -",
   "8/2R4p/4k3/1p3p2/3B4/1q6/2N5/6K1 b - -",
   "8/2R4p/4k3/1p3p2/3B4/6q1/2N5/6K1 w - -",
   "8/2R4p/4k3/1p3p2/3B4/6q1/2N5/5K2 b - -",
   "8/2q4p/4k3/1p3p2/3B4/8/2N5/5K2 w - -");

var cmoves = new Array ( 
   "[*]",
   "1.e4",
   "1...c5",
   "2.Nc3",
   "2...Nc6",
   "3.f4",
   "3...g6",
   "4.Nf3",
   "4...Bg7",
   "5.Bb5",
   "5...Nd4",
   "6.O-O",
   "6...a6",
   "7.Bc4",
   "7...e6",
   "8.d3",
   "8...b5",
   "9.Bb3",
   "9...Bb7",
   "10.Qe1",
   "10.f5",
   "10...gxf5",
   "10...Ne7",
   "10...f5",
   "11.Nxd4",
   "11...Bxd4",
   "12.Be3",
   "12...Nc6",
   "12...Bxe3",
   "13.Qxe3",
   "13...Qb6",
   "13.Kh1",
   "13.Nd1",
   "13.f5",
   "13...Qg5",
   "13...f5",
   "14.Qf2",
   "14...O-O",
   "15.exf5",
   "15...gxf5",
   "16.Ne2",
   "16.Nd1",
   "16...Bxb2",
   "17.Rae1",
   "17.Bxc5",
   "17...Bxa1",
   "18.Bxf8",
   "18...Qxf8",
   "19.Rxa1",
   "19...Qg7",
   "20.Rg1",
   "20...Ne7",
   "17...Rf7",
   "17...Bd4",
   "18.Bxc5",
   "18...Bf6",
   "19.Rd1",
   "19...Rg7",
   "20.Rg1",
   "20...Kh8",
   "20...Qe8",
   "21.a4",
   "21...Qe8",
   "22.axb5",
   "22.d4",
   "22...axb5",
   "23.d4",
   "23...Qg6",
   "24.d5",
   "24...Na5",
   "25.dxe6",
   "25...Nxb3",
   "26.cxb3",
   "26...dxe6",
   "27.Nd4",
   "27...Bd5",
   "27...Qh5",
   "28.Nf3",
   "28...Rxg2",
   "29.Kxg2",
   "29...Ra2",
   "30.Rd3",
   "30...Rxf2",
   "31.Kxf2",
   "28.h3",
   "28.Nxb5",
   "28...Bxb3",
   "28...Rag8",
   "28...Ra2",
   "29.Qxa2",
   "29...Qg3",
   "28...Qh5",
   "29.Rd3",
   "29...Be4",
   "30.Re3",
   "30...Bxg2",
   "31.Rxg2",
   "31...Ra1",
   "32.Kh2",
   "32...Qd1",
   "29.Rd2",
   "29.Nf3",
   "29...Bxb3",
   "29...Qh5",
   "30.Kh2",
   "30...e5",
   "30...Bh4",
   "31.g3",
   "31...Bxg3",
   "32.Rxg3",
   "32...Rxg3",
   "33.Qxg3",
   "33...Rxg3",
   "34.Kxg3",
   "34...e5",
   "35.fxe5",
   "35.Nc2",
   "35...Qf3",
   "35...Qg5",
   "31.Nc2",
   "31.Nf3",
   "31...Bh4",
   "32.Qe3",
   "32...exf4",
   "32...Bg3",
   "33.Qxg3",
   "33...Rxg3",
   "34.Rxd5",
   "34...Qe2",
   "33.Qxf4",
   "33...Bg3",
   "34.Qxg3",
   "34...Rxg3",
   "35.Rxd5",
   "35.Bd4",
   "35...R3g7",
   "35...Rxh3",
   "36.gxh3",
   "36...Qe2",
   "37.Kh1",
   "37...Qf3",
   "37...Qe4",
   "38.Kh2",
   "38...Qxc2",
   "39.Kh1",
   "39...Qe4",
   "40.Kh2",
   "40...Qxd5",
   "38.Kh2",
   "38...Rxg1",
   "39.Rd8",
   "39...Kg7",
   "40.Kxg1",
   "40...Qg3",
   "41.Kh1",
   "41.Kf1",
   "41...Qxh3",
   "42.Kg1",
   "42...Qxb3",
   "43.Bd4",
   "43...Kf7",
   "44.Rd7",
   "44.Ne3",
   "44...f4",
   "45.Nf1",
   "45...Qe6",
   "44...Ke6",
   "45.Rc7",
   "45...Qg3",
   "46.Kf1",
   "46...Qxc7");
