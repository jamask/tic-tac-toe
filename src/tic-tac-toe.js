class TicTacToe {
    constructor() {
        this.table = [['-', '-', '-'],
                      ['-', '-', '-'],
                      ['-', '-', '-']]
        this.curSymbol = 'x';
        this.winner = null;
    }

    changeSymbol() {
        this.curSymbol = (this.curSymbol == "x") ? "o" : "x";
    }

    checkWinner() {

        let arrWin = [];

        arrWin.push('' + this.table[0][0] + this.table[0][1] + this.table[0][2]);
        arrWin.push('' + this.table[1][0] + this.table[1][1] + this.table[1][2]);
        arrWin.push('' + this.table[2][0] + this.table[2][1] + this.table[2][2]);
        arrWin.push('' + this.table[0][0] + this.table[1][0] + this.table[2][0]);
        arrWin.push('' + this.table[0][1] + this.table[1][1] + this.table[2][1]);
        arrWin.push('' + this.table[0][2] + this.table[1][2] + this.table[2][2]);
        arrWin.push('' + this.table[0][0] + this.table[1][1] + this.table[2][2]);
        arrWin.push('' + this.table[2][0] + this.table[1][1] + this.table[0][2]);

        for (let i = 0; i < arrWin.length; i++) {
            if (arrWin[i] == "xxx") {
                this.winner = "x";
                return true;
            } else if (arrWin[i] == "ooo") {
                this.winner = "o";
                return true;
            }
        }
    
        return false;


    }

    isSpace() { //if table has space then true
        if ((this.table[0][0] == "-") || (this.table[0][1] == "-") || (this.table[0][2] == "-") ||
            (this.table[1][0] == "-") || (this.table[1][1] == "-") || (this.table[1][2] == "-") ||
            (this.table[2][0] == "-") || (this.table[2][1] == "-") || (this.table[2][2] == "-")) {
                return true;
            }
        return false;
    }

    getCurrentPlayerSymbol() {
        return this.curSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if ((rowIndex < 0 || rowIndex > 2) || (columnIndex < 0 || columnIndex > 2) ||
        this.winner) {
            return false;
        }

        if (this.table[rowIndex][columnIndex] == "-") {
            this.table[rowIndex][columnIndex] = this.curSymbol;
            this.checkWinner();       
            this.changeSymbol();
        }
    }

    isFinished() {
        if (!this.isSpace() || this.winner) {
                return true;
            }
        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if (this.isSpace()) {
                return false;
            }
        return true;
    }

    isDraw() {
        if (this.isSpace() || this.winner) {
                return false;
            }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if (!((rowIndex >= 0 && rowIndex <= 2) && (colIndex >= 0 && colIndex <= 2))) {
            return false;
        }

        if (this.table[rowIndex][colIndex] == "-") {
            return null;
        } else {
            return this.table[rowIndex][colIndex];
        }

    }
}

module.exports = TicTacToe;
