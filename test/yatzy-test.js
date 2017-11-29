var assert = require("assert");
var Yatzy = require("../lib/yatzy");


describe("Chance", function() {
    it("scores sum of all dice", function(){
        assert.equal(15, new Yatzy(2, 3, 4, 5, 1).chance());
        assert.equal(16, new Yatzy(3, 3, 4, 5, 1).chance());
    });
});

describe("new Yatzy", function() {
    it("scores 50", function() {
        assert.equal(50, new Yatzy(4,4,4,4,4).yatzy());
        assert.equal(50, new Yatzy(6,6,6,6,6).yatzy());
        assert.equal(0, new Yatzy(6,6,6,6,3).yatzy());
    });
});

describe("Ones", function() {
    it("score the sum of 1s", function() {
        assert.equal(1, new Yatzy(1,2,3,4,5).ones());
        assert.equal(2, new Yatzy(1,2,1,4,5).ones());
        assert.equal(0, new Yatzy(6,2,2,4,5).ones());
        assert.equal(4, new Yatzy(1,2,1,1,1).ones());
    });
});

describe("Twos", function() {
    it("score the sum of 2s", function() {
        assert.equal(4, new Yatzy(1,2,3,2,6).twos());
        assert.equal(10, new Yatzy(2,2,2,2,2).twos());
    });
});

describe("Threes", function() {
    it("score the sum of 3s", function() {
        assert.equal(6, new Yatzy(1,2,3,2,3).threes());
        assert.equal(12, new Yatzy(2,3,3,3,3).threes());
    });
});

describe("Fours", function() {
    it("score the sum of 4s", function() {
        assert.equal(12, new Yatzy(4,4,4,5,5).fours());
        assert.equal(8, new Yatzy(4,4,5,5,5).fours());
        assert.equal(4, new Yatzy(4,5,5,5,5).fours());
    });
});

describe("Fives", function() {
    it("score the sum of fives", function() {
        assert.equal(10, new Yatzy(4,4,4,5,5).fives());
        assert.equal(15, new Yatzy(4,4,5,5,5).fives());
        assert.equal(20, new Yatzy(4,5,5,5,5).fives());
    });
});

describe("Sixes", function() {
    it("score the sum of sixes", function() {
        assert.equal(0, new Yatzy(4,4,4,5,5).sixes());
        assert.equal(6, new Yatzy(4,4,6,5,5).sixes());
        assert.equal(18, new Yatzy(6,5,6,6,5).sixes());
    });
});

describe("One pair", function() {
    it("scores the sum of the highest pair", function() {
        assert.equal(6, new Yatzy(3,4,3,5,6).score_pair());
        assert.equal(10, new Yatzy(5,3,3,3,5).score_pair());
        assert.equal(12, new Yatzy(5,3,6,6,5).score_pair());
    });
});

describe("Two pairs", function() {
    it("scores the sum of the two pairs", function() {
        assert.equal(16, new Yatzy(3,3,5,4,5).two_pairs());
        assert.equal(16, new Yatzy(3,3,5,5,5).two_pairs());
        assert.equal(0, new Yatzy(3,3,4,5,6).two_pairs());
    });
});

describe("Three of a kind", function() {
    it("scores the sum of the three of the kind", function() {
        assert.equal(9, new Yatzy(3,3,3,4,5).three_of_a_kind());
        assert.equal(15, new Yatzy(5,3,5,4,5).three_of_a_kind());
        assert.equal(9, new Yatzy(3,3,3,3,5).three_of_a_kind());
    });
});

describe("Four of a kind", function() {
    it("scores the sum of the four of the kind", function() {
        assert.equal(12, new Yatzy(3,3,3,3,5).four_of_a_kind());
        assert.equal(20, new Yatzy(5,5,5,4,5).four_of_a_kind());
        assert.equal(12, new Yatzy(3,3,3,3,3).four_of_a_kind());
    });
});

describe("Small straight", function() {
    it("scores 15", function() {
        assert.equal(15, new Yatzy(1,2,3,4,5).small_straight());
        assert.equal(15, new Yatzy(2,3,4,5,1).small_straight());
        assert.equal(0, new Yatzy(2,2,5,5,1).small_straight());
        assert.equal(0, new Yatzy(1,2,2,4,5).small_straight());
        assert.equal(0, new Yatzy(2,3,4,5,6).small_straight());
    });
});

describe("Large straight", function() {
    it("scores 20", function() {
        assert.equal(20, new Yatzy(6,2,3,4,5).large_straight());
        assert.equal(20, new Yatzy(2,3,4,5,6).large_straight());
        assert.equal(0, new Yatzy(2,2,5,5,6).large_straight());
        assert.equal(0, new Yatzy(1,2,2,4,5).large_straight());
        assert.equal(0, new Yatzy(1,2,3,4,5).large_straight());
    });
});

describe("Full house", function() {
    it("scores the sum of the full house", function() {
        assert.equal(18, new Yatzy(6,2,2,2,6).full_house());
        assert.equal(0, new Yatzy(2,3,4,5,6).full_house());
    });
});
