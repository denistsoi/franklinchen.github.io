var movesDepth = new Array (

   0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,
   0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
   0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,
   1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,
   1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,
   0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

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
   "S31",
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
   "S31",
   "S16",
   "S31",
   "S16",
   "S16",
   "S31",
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
   "S31",
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
   "S31",
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
   "S16");

var FENs = new Array (
   "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
   "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq -",
   "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -",
   "rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -",
   "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -",
   "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq -",
   "rnbqkb1r/pp1p1ppp/2p2n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq -",
   "rnbqkb1r/pp1p1ppp/2p2n2/4p3/2PP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq -",
   "rnbqkb1r/pp1p1ppp/2p2n2/8/2Pp4/2N3P1/PP2PP1P/R1BQKBNR w KQkq -",
   "rnbqkb1r/pp1p1ppp/2p2n2/8/2PQ4/2N3P1/PP2PP1P/R1B1KBNR b KQkq -",
   "rnbqk2r/pp1pbppp/2p2n2/8/2PQ4/2N3P1/PP2PP1P/R1B1KBNR w KQkq -",
   "rnbqkb1r/pp3ppp/2p2n2/3p4/2PQ4/2N3P1/PP2PP1P/R1B1KBNR w KQkq -",
   "rnbqk2r/pp1pbppp/2p2n2/8/2PQ4/2N3P1/PP2PPBP/R1B1K1NR b KQkq -",
   "rnbqk2r/pp2bppp/2pp1n2/8/2PQ4/2N3P1/PP2PPBP/R1B1K1NR w KQkq -",
   "rnbqk2r/pp2bppp/2pp1n2/8/2PQ4/2N2NP1/PP2PPBP/R1B1K2R b KQkq -",
   "r1bqk2r/pp1nbppp/2pp1n2/8/2PQ4/2N2NP1/PP2PPBP/R1B1K2R w KQkq -",
   "r1bqk2r/pp1nbppp/2pp1n2/8/2PQ4/2N2NP1/PP2PPBP/R1B2RK1 b kq -",
   "r1bqk2r/pp2bppp/2pp1n2/2n5/2PQ4/2N2NP1/PP2PPBP/R1B2RK1 w kq -",
   "r1bqk2r/pp2bppp/2pp1n2/2n5/2PQP3/2N2NP1/PP3PBP/R1B2RK1 b kq -",
   "r1bqk2r/pp2bppp/2pp1n2/2n5/1PPQ4/2N2NP1/P3PPBP/R1B2RK1 b kq -",
   "r1bqk2r/pp2bppp/2ppnn2/8/1PPQ4/2N2NP1/P3PPBP/R1B2RK1 w kq -",
   "r1bqk2r/pp2bppp/2ppnn2/8/1PP5/2NQ1NP1/P3PPBP/R1B2RK1 b kq -",
   "r1bq1rk1/pp2bppp/2pp1n2/2n5/2PQP3/2N2NP1/PP3PBP/R1B2RK1 w - -",
   "r1bq1rk1/pp2bppp/2pp1n2/2n5/2PQP3/1PN2NP1/P4PBP/R1B2RK1 b - -",
   "r1bq1rk1/pp2bppp/2pp1n2/2n5/2PQP3/2N2NP1/PP3PBP/R1BR2K1 b - -",
   "r1b2rk1/ppq1bppp/2pp1n2/2n5/2PQP3/1PN2NP1/P4PBP/R1B2RK1 w - -",
   "r1bq1rk1/pp2bppp/2pp4/2n5/2PQP1n1/1PN2NP1/P4PBP/R1B2RK1 w - -",
   "r1b2rk1/ppq1bppp/2pp1n2/2n5/2PQP3/1PN2NP1/PB3PBP/R4RK1 b - -",
   "r1b1r1k1/ppq1bppp/2pp1n2/2n5/2PQP3/1PN2NP1/PB3PBP/R4RK1 w - -",
   "r1b2rk1/1pq1bppp/2pp1n2/p1n5/2PQP3/1PN2NP1/PB3PBP/R4RK1 w - -",
   "r1b1r1k1/ppq1bppp/2pp1n2/2n5/2PQP3/1PN2NP1/PB3PBP/R3R1K1 b - -",
   "r1b1rbk1/ppq2ppp/2pp1n2/2n5/2PQP3/1PN2NP1/PB3PBP/R3R1K1 w - -",
   "r1b1rbk1/ppq2ppp/2pp1n2/2n5/2PQP3/1PN2NP1/PB3PBP/3RR1K1 b - -",
   "r1b1rbk1/ppq2ppp/2pp4/2n5/2PQP1n1/1PN2NP1/PB3PBP/3RR1K1 w - -",
   "r1b1rbk1/1pq2ppp/2pp1n2/p1n5/2PQP3/1PN2NP1/PB3PBP/3RR1K1 w - -",
   "r1b1rbk1/ppq2ppp/2pp4/2n5/2PQP1nN/1PN3P1/PB3PBP/3RR1K1 b - -",
   "r1b1rbk1/1pq2ppp/p1pp4/2n5/2PQP1nN/1PN3P1/PB3PBP/3RR1K1 w - -",
   "r1b1rbk1/1pq2ppp/p1pp4/2n2N2/2PQP1n1/1PN3P1/PB3PBP/3RR1K1 b - -",
   "r3rbk1/1pq2ppp/p1pp4/2n2b2/2PQP1n1/1PN3P1/PB3PBP/3RR1K1 w - -",
   "r3rbk1/1pq2ppp/p1pp4/2n2P2/2PQ2n1/1PN3P1/PB3PBP/3RR1K1 b - -",
   "r4bk1/1pq2ppp/p1pp4/2n2P2/2PQ2n1/1PN3P1/PB3PBP/3Rr1K1 w - -",
   "r4bk1/1pq2ppp/p1pp4/2n2P2/2PQ2n1/1PN3P1/PB3PBP/4R1K1 b - -",
   "r4bk1/1pq2ppp/p1pp4/2n1nP2/2PQ4/1PN3P1/PB3PBP/4R1K1 w - -",
   "r4bk1/1pq2ppp/p1pp4/2n1nP2/2PQ4/1PN1R1P1/PB3PBP/6K1 b - -",
   "r4bk1/2q2ppp/p1pp4/1pn1nP2/2PQ4/1PN1R1P1/PB3PBP/6K1 w - -",
   "r4bk1/2q2ppp/p1pp4/1Pn1nP2/3Q4/1PN1R1P1/PB3PBP/6K1 b - -",
   "r4bk1/2q2ppp/2pp4/1pn1nP2/3Q4/1PN1R1P1/PB3PBP/6K1 w - -",
   "r4bk1/2q2ppp/2pp4/1Nn1nP2/3Q4/1P2R1P1/PB3PBP/6K1 b - -",
   "rq3bk1/5ppp/2pp4/1Nn1nP2/3Q4/1P2R1P1/PB3PBP/6K1 w - -",
   "rq3bk1/5ppp/2pp4/2n1nP2/3Q4/1PN1R1P1/PB3PBP/6K1 b - -",
   "rq3bk1/5ppp/2pN4/2n1nP2/3Q4/1P2R1P1/PB3PBP/6K1 b - -",
   "r1q2bk1/5ppp/2pp4/2n1nP2/3Q4/1PN1R1P1/PB3PBP/6K1 w - -",
   "r1q2bk1/5ppp/2pp4/2n1nP2/3Q2P1/1PN1R3/PB3PBP/6K1 b - -",
   "r4bk1/5ppp/q1pp4/2n1nP2/3Q2P1/1PN1R3/PB3PBP/6K1 w - -",
   "r4bk1/5ppp/q1pp4/2n1nP2/3Q2P1/1PN1R3/PB3P1P/5BK1 b - -",
   "r4bk1/5ppp/q1pp4/2n1nPP1/3Q4/1PN1R3/PB3PBP/6K1 b - -",
   "r4bk1/q4ppp/2pp4/2n1nP2/3Q2P1/1PN1R3/PB3P1P/5BK1 w - -",
   "r4bk1/q4ppp/2pp4/2n1nP2/3Q2P1/1PN1R3/PB2BP1P/6K1 b - -",
   "r4bk1/q4ppp/2pp4/2n1nPP1/3Q4/1PN1R3/PB3P1P/5BK1 b - -",
   "r4bk1/1q3ppp/2pp4/2n1nPP1/3Q4/1PN1R3/PB3P1P/5BK1 w - -",
   "r4bk1/1q3ppp/2pp4/2n1nPP1/7Q/1PN1R3/PB3P1P/5BK1 b - -",
   "rq3bk1/5ppp/2pp4/2n1nP2/3Q2P1/1PN1R3/PB2BP1P/6K1 w - -",
   "rq3bk1/5ppp/2pp4/2n1nP2/3Q2P1/1PN1R3/PB2BPKP/8 b - -",
   "rq3bk1/5ppp/2pp4/2n1nPP1/3Q4/1PN1R3/PB2BP1P/6K1 b - -",
   "r1q2bk1/5ppp/2pp4/2n1nPP1/3Q4/1PN1R3/PB2BP1P/6K1 w - -",
   "r1q2bk1/5ppp/2pp4/2n1nPP1/3Q1P2/1PN1R3/PB2B2P/6K1 b - -",
   "r1q2bk1/3n1ppp/2pp4/2n2PP1/3Q1P2/1PN1R3/PB2B2P/6K1 w - -",
   "r1q2bk1/3n1ppp/2pp4/2n2PP1/1P1Q1P2/2N1R3/PB2B2P/6K1 b - -",
   "r1q2bk1/3n1ppp/n1pp4/5PP1/1P1Q1P2/2N1R3/PB2B2P/6K1 w - -",
   "r1q2bk1/3n1ppp/n1pp2P1/5P2/1P1Q1P2/2N1R3/PB2B2P/6K1 b - -",
   "r1q2bk1/3n1pp1/n1pp2p1/5P2/1P1Q1P2/2N1R3/PB2B2P/6K1 w - -",
   "r1q2bk1/3n1pp1/n1pp2P1/8/1P1Q1P2/2N1R3/PB2B2P/6K1 b - -",
   "rq3bk1/3n1ppp/2pp4/4nP2/3Q2P1/1PN1R3/PB2BPKP/8 w - -",
   "rq3bk1/3n1ppp/2pp4/4nPP1/3Q4/1PN1R3/PB2BPKP/8 b - -",
   "rq3bk1/3n1ppp/2p5/3pnPP1/3Q4/1PN1R3/PB2BPKP/8 w - -",
   "rq3bk1/3n1ppp/2p5/3pnPP1/N2Q4/1P2R3/PB2BPKP/8 b - -",
   "rq3bk1/3n1ppp/2p5/3pnPP1/3Q4/1PN4R/PB2BPKP/8 b - -",
   "rq4k1/3n1ppp/2p5/2bpnPP1/3Q4/1PN4R/PB2BPKP/8 w - -",
   "rq4k1/3n1ppp/2p5/2bpnPP1/7Q/1PN4R/PB2BPKP/8 b - -",
   "rq3nk1/5ppp/2p5/2bpnPP1/7Q/1PN4R/PB2BPKP/8 w - -",
   "rq3nk1/5ppp/2p5/2bpnPP1/N6Q/1P5R/PB2BPKP/8 b - -",
   "rq3nk1/5ppp/2pb4/3pnPP1/N6Q/1P5R/PB2BPKP/8 w - -",
   "rq3nk1/5ppp/2pb4/3pnPP1/N6Q/1PB4R/P3BPKP/8 b - -",
   "rq3nk1/5ppp/3b4/2ppnPP1/N6Q/1PB4R/P3BPKP/8 w - -",
   "rq3nk1/5ppp/3b4/2ppnPP1/N4P1Q/1PB4R/P3B1KP/8 b - -",
   "rq3nk1/3n1ppp/3b4/2pp1PP1/N4P1Q/1PB4R/P3B1KP/8 w - -",
   "rq3nk1/3n1ppp/3b1P2/2pp2P1/N4P1Q/1PB4R/P3B1KP/8 b - -",
   "rq3bk1/3n2pp/2p2p2/3pnPP1/N2Q4/1P2R3/PB2BPKP/8 w - -",
   "rq3bk1/3n2pp/2p2P2/3pnP2/N2Q4/1P2R3/PB2BPKP/8 b - -",
   "rq3bk1/3n3p/2p2p2/3pnP2/N2Q4/1P2R3/PB2BPKP/8 w - -",
   "rq3bk1/3n3p/2p2p2/3pnP2/N6Q/1P2R3/PB2BPKP/8 b - -",
   "rq3bk1/3n3p/2p2p2/3pnP2/N2Q1P2/1P2R3/PB2B1KP/8 b - -",
   "rq3bk1/3n1n1p/2p2p2/3p1P2/N2Q1P2/1P2R3/PB2B1KP/8 w - -",
   "rq3bk1/3n1n1p/2p2p2/3p1P2/N2Q1P2/1P4R1/PB2B1KP/8 b - -",
   "rq4k1/3n1nbp/2p2p2/3p1P2/N2Q1P2/1P4R1/PB2B1KP/8 w - -",
   "rq4k1/3n1nbp/2p2p2/2Np1P2/3Q1P2/1P4R1/PB2B1KP/8 b - -",
   "r2q1bk1/3n3p/2p2p2/3pnP2/N6Q/1P2R3/PB2BPKP/8 w - -",
   "rq4k1/3n2bp/2p2p2/3pnP2/N6Q/1P2R3/PB2BPKP/8 w - -",
   "rq4k1/3n2bp/2p2p2/3pBP2/N6Q/1P2R3/P3BPKP/8 b - -",
   "rq4k1/3n2bp/2p5/3ppP2/N6Q/1P2R3/P3BPKP/8 w - -",
   "rq4k1/3n2bp/2p5/3ppP2/N6Q/1P5R/P3BPKP/8 b - -",
   "rq4k1/3n2b1/2p4p/3ppP2/N6Q/1P5R/P3BPKP/8 w - -",
   "rq4k1/3n2b1/2p4p/3ppP2/N6Q/1P4R1/P3BPKP/8 b - -",
   "r2q1bk1/3n3p/2p2p2/3pnP1B/N6Q/1P2R3/PB3PKP/8 b - -",
   "r2q1bk1/3n3p/5p2/2ppnP1B/N6Q/1P2R3/PB3PKP/8 w - -",
   "r2q2k1/3n3p/2p2p1b/3pnP1B/N6Q/1P2R3/PB3PKP/8 w - -",
   "r2q2k1/3n3p/2p2p1b/3pnP1B/N4P1Q/1P2R3/PB4KP/8 b - -",
   "r2q3k/3n3p/2p2p1b/3pnP1B/N4P1Q/1P2R3/PB4KP/8 w - -",
   "r2q3k/3n3p/2p2p1b/3pnP1B/N4P1Q/1P4R1/PB4KP/8 b - -",
   "r2q1bk1/3n3p/5p2/2ppnP1B/N4P1Q/1P2R3/PB4KP/8 b - -",
   "r2q1bk1/3n3p/5p2/2p1nP1B/N2p1P1Q/1P2R3/PB4KP/8 w - -",
   "r2q1bk1/3n3p/5p2/2p1nP1B/N2p1P1Q/1P4R1/PB4KP/8 b - -",
   "r2q1b1k/3n3p/5p2/2p1nP1B/N2p1P1Q/1P4R1/PB4KP/8 w - -",
   "r2q1b1k/3n3p/5p2/2p1PP1B/N2p3Q/1P4R1/PB4KP/8 b - -",
   "r2q1b1k/7p/5p2/2p1nP1B/N2p3Q/1P4R1/PB4KP/8 w - -",
   "r2q1b1k/7p/5p2/2p1nP2/N2p3Q/1P3BR1/PB4KP/8 b - -",
   "3q1b1k/7p/r4p2/2p1nP2/N2p3Q/1P3BR1/PB4KP/8 w - -",
   "3q1b1k/7p/r4p2/2p1nP2/N2pQ3/1P3BR1/PB4KP/8 b - -",
   "3q3k/7p/r2b1p2/2p1nP2/N2pQ3/1P3BR1/PB4KP/8 w - -",
   "3q3k/7p/r2b1p2/2p1nP2/N2pQ3/1P4R1/PB2B1KP/8 b - -",
   "3q3k/1Q5p/r2b1p2/2p1nP2/N2p4/1P3BR1/PB4KP/8 b - -",
   "3q3k/r6p/3b1p2/2p1nP2/N2pQ3/1P4R1/PB2B1KP/8 w - -",
   "3q3k/r6p/3b1p2/2p1nP2/N2pQ3/1P4R1/P3B1KP/2B5 b - -",
   "3q3k/r6p/3b1p2/2p1nP2/N2pQ3/1P4R1/PB2B2P/5K2 b - -",
   "3q3k/4r2p/3b1p2/2p1nP2/N2pQ3/1P4R1/P3B1KP/2B5 w - -",
   "3q3k/4r2p/3b1p2/2p1nP2/N2p3Q/1P4R1/P3B1KP/2B5 b - -",
   "3q3k/5r1p/3b1p2/2p1nP2/N2p3Q/1P4R1/P3B1KP/2B5 w - -",
   "3q3k/3nr2p/3b1p2/2p2P2/N2p3Q/1P4R1/P3B1KP/2B5 w - -",
   "3q3k/5r1p/3b1p2/2p1nP1B/N2p3Q/1P4R1/P5KP/2B5 b - -",
   "q6k/5r1p/3b1p2/2p1nP1B/N2p3Q/1P4R1/P5KP/2B5 w - -",
   "q6k/5r1p/3b1p2/2p1nP1B/N2p3Q/1P4R1/P6P/2B3K1 b - -",
   "q4r1k/7p/3b1p2/2p1nP1B/N2p3Q/1P4R1/P6P/2B3K1 w - -",
   "q4r1k/7p/3b1p1B/2p1nP1B/N2p3Q/1P4R1/P6P/6K1 b - -",
   "q4r1k/3n3p/3b1p1B/2p2P1B/N2p3Q/1P4R1/P6P/6K1 w - -",
   "q4r1k/3n2Bp/3b1p2/2p2P1B/N2p3Q/1P4R1/P6P/6K1 b - -",
   "q4rk1/3n2Bp/3b1p2/2p2P1B/N2p3Q/1P4R1/P6P/6K1 w - -",
   "q4Bk1/3n3p/3b1p2/2p2P1B/N2p3Q/1P4R1/P6P/6K1 b - -",
   "q4rk1/3n3p/3b1B2/2p2P1B/N2p3Q/1P4R1/P6P/6K1 b - -",
   "q4rk1/3n3p/5B2/2p2P1B/N2p3Q/1P4b1/P6P/6K1 w - -",
   "q4rk1/3n3p/5B2/2p2P1B/N2p4/1P4Q1/P6P/6K1 b - -",
   "q4Bk1/3n3p/5p2/2p2P1B/N2p3Q/1P4b1/P6P/6K1 w - -",
   "q4Bk1/3n3p/5p2/2p2P1B/N2p4/1P4Q1/P6P/6K1 b - -",
   "q4k2/3n3p/5p2/2p2P1B/N2p4/1P4Q1/P6P/6K1 w - -",
   "q4k2/3n3p/3Q1p2/2p2P1B/N2p4/1P6/P6P/6K1 b - -",
   "q5k1/3n3p/3Q1p2/2p2P1B/N2p4/1P6/P6P/6K1 w - -",
   "q5k1/3Q3p/5p2/2p2P1B/N2p4/1P6/P6P/6K1 b - -",
   "q5k1/3Q3p/5p2/5P1B/N1pp4/1P6/P6P/6K1 w - -",
   "q5k1/5Q1p/5p2/5P1B/N1pp4/1P6/P6P/6K1 b - -",
   "q6k/5Q1p/5p2/5P1B/N1pp4/1P6/P6P/6K1 w - -",
   "q6k/7p/5Q2/5P1B/N1pp4/1P6/P6P/6K1 b - -",
   "q5k1/7p/5Q2/5P1B/N1pp4/1P6/P6P/6K1 w - -",
   "q5k1/5B1p/5Q2/5P2/N1pp4/1P6/P6P/6K1 b - -",
   "q4k2/5B1p/5Q2/5P2/N1pp4/1P6/P6P/6K1 w - -",
   "q4k2/7p/5QB1/5P2/N1pp4/1P6/P6P/6K1 b - -",
   "q5k1/7p/5QB1/5P2/N1pp4/1P6/P6P/6K1 w - -",
   "q5k1/5Q1p/6B1/5P2/N1pp4/1P6/P6P/6K1 b - -",
   "q6k/5Q1p/6B1/5P2/N1pp4/1P6/P6P/6K1 w - -",
   "q6k/7Q/6B1/5P2/N1pp4/1P6/P6P/6K1 b - -");

var cmoves = new Array ( 
   "[*]",
   "1.c4",
   "1...Nf6",
   "2.Nc3",
   "2...e5",
   "3.g3",
   "3...c6",
   "4.d4",
   "4...exd4",
   "5.Qxd4",
   "5...Be7",
   "5...d5",
   "6.Bg2",
   "6...d6",
   "7.Nf3",
   "7...Nbd7",
   "8.O-O",
   "8...Nc5",
   "9.e4",
   "9.b4",
   "9...Ne6",
   "10.Qd3",
   "9...O-O",
   "10.b3",
   "10.Rd1",
   "10...Qc7",
   "10...Ng4",
   "11.Bb2",
   "11...Re8",
   "11...a5",
   "12.Rfe1",
   "12...Bf8",
   "13.Rad1",
   "13...Ng4",
   "13...a5",
   "14.Nh4",
   "14...a6",
   "15.Nf5",
   "15...Bxf5",
   "16.exf5",
   "16...Rxe1",
   "17.Rxe1",
   "17...Ne5",
   "18.Re3",
   "18...b5",
   "19.cxb5",
   "19...axb5",
   "20.Nxb5",
   "20...Qb8",
   "21.Nc3",
   "21.Nxd6",
   "21...Qc8",
   "22.g4",
   "22...Qa6",
   "23.Bf1",
   "23.g5",
   "23...Qa7",
   "24.Be2",
   "24.g5",
   "24...Qb7",
   "25.Qh4",
   "24...Qb8",
   "25.Kg2",
   "25.g5",
   "25...Qc8",
   "26.f4",
   "26...Ned7",
   "27.b4",
   "27...Na6",
   "28.g6",
   "28...hxg6",
   "29.fxg6",
   "25...Ncd7",
   "26.g5",
   "26...d5",
   "27.Na4",
   "27.Rh3",
   "27...Bc5",
   "28.Qh4",
   "28...Nf8",
   "29.Na4",
   "29...Bd6",
   "30.Bc3",
   "30...c5",
   "31.f4",
   "31...Ned7",
   "32.f6",
   "27...f6",
   "28.gxf6",
   "28...gxf6",
   "29.Qh4",
   "29.f4",
   "29...Nf7",
   "30.Rg3",
   "30...Bg7",
   "31.Nc5",
   "29...Qd8",
   "29...Bg7",
   "30.Bxe5",
   "30...fxe5",
   "31.Rh3",
   "31...h6",
   "32.Rg3",
   "30.Bh5",
   "30...c5",
   "30...Bh6",
   "31.f4",
   "31...Kh8",
   "32.Rg3",
   "31.f4",
   "31...d4",
   "32.Rg3",
   "32...Kh8",
   "33.fxe5",
   "33...Nxe5",
   "34.Bf3",
   "34...Ra6",
   "35.Qe4",
   "35...Bd6",
   "36.Be2",
   "36.Qb7",
   "36...Ra7",
   "37.Bc1",
   "37.Kf1",
   "37...Re7",
   "38.Qh4",
   "38...Rf7",
   "38...Nd7",
   "39.Bh5",
   "39...Qa8",
   "40.Kg1",
   "40...Rf8",
   "41.Bh6",
   "41...Nd7",
   "42.Bg7",
   "42...Kg8",
   "43.Bxf8",
   "43.Bxf6",
   "43...Bxg3",
   "44.Qxg3#",
   "43...Bxg3",
   "44.Qxg3",
   "44...Kxf8",
   "45.Qd6",
   "45...Kg8",
   "46.Qxd7",
   "46...c4",
   "47.Qf7",
   "47...Kh8",
   "48.Qxf6",
   "48...Kg8",
   "49.Bf7",
   "49...Kf8",
   "50.Bg6",
   "50...Kg8",
   "51.Qf7",
   "51...Kh8",
   "52.Qxh7#");

