class Yatzy {
    constructor(...dices) {
        this.dices = dices;
    }

    _number(n) {
        return this.dices.reduce((sum, value) => value == n ? sum + value : sum, 0);
    }

    ones() {
        return this._number(1);
    }

    twos() {
        return this._number(2);
    } 

    threes() {
        return this._number(3);
    } 

    fours() {
        return this._number(4);
    }

    fives() {
        return this._number(5);
    }

    sixes() {
        return this._number(6);
    }

    _sum_dices() {
        return this.dices.reduce((sum, value) => sum + value);
    }

    chance() {
        return this._sum_dices();
    }

    yatzy() {
        return new Set(this.dices).size == 1 ? 50 : 0;
    }

    _n_of_kind(n) {
        let counts = new Array(6).fill(0);

        for (let dice of this.dices) {
            counts[dice - 1]++;
        }

        let result = [];
        
        for (let i = 5; i >= 0; i--) {
            if (counts[i] >= n) {
                result.push(i + 1);
            }
        }

        return result;
    }

    score_pair() {
        let result = this._n_of_kind(2);
        return result.length ? 2 * result[0] : 0;
    }

    three_of_a_kind() {
        let result = this._n_of_kind(3);
        return result.length ? 3 * result[0] : 0;
    }

    four_of_a_kind() {
        let result = this._n_of_kind(4);
        return result.length ? 4 * result[0] : 0;
    }

    two_pairs() {
        let result = this._n_of_kind(2);
        return result.length == 2 ? 2 * (result[0] + result[1]) : 0;
    }

    large_straight() {
        let values = new Set(this.dices);
        let sum = this._sum_dices();

        return sum == 20 && values.size == 5 ? sum : 0;
    }

    small_straight() {
        let values = new Set(this.dices);
        let sum = this._sum_dices();

        return sum == 15 && values.size == 5 ? sum : 0;
    }

    full_house() {
        let pairs = this._n_of_kind(2);
        let threes = this._n_of_kind(3);

        return pairs.length == 2 && threes.length == 1 ? this._sum_dices() : 0;
    }
}

module.exports = Yatzy;


