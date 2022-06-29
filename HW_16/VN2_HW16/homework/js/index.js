// Task 1
const CARD_SHUFFLE_TURNS = 1000;
const NUMBER_OF_CARDS_IN_DECK = 52;

function Deck() {
    this.cards = [],
    this._count;

    this.shuffle = function(length) {
        for (let i = 0; i < CARD_SHUFFLE_TURNS; i++) {
            let location1 = Math.floor(Math.random() * length);
            let location2 = Math.floor(Math.random() * length);

            let temp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = temp;
        }
    }

    this.draw = function(n) {
        return this.cards.splice(this.cards.length - n);
    }
}

function Card() {
    this.suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    this.rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this._isFaceCard;

    this.toString = function() {
        let deck = new Deck().cards;
        for (let i = 0; i < this.rank.length; i++) {
            for (let j = 0; j < this.suit.length; j++) {
                if (this.rank[i] > 1 && this.rank[i] < 11) {
                    deck.push(`${this.rank[i]} of ${this.suit[j]}`)
                } else if (this.rank[i] === 1) {
                    deck.push(`Ace of ${this.suit[j]}`);
                } else if (this.rank[i] === 11) {
                    deck.push(`Jack of ${this.suit[j]}`);
                } else if (this.rank[i] === 12) {
                    deck.push(`Queen of ${this.suit[j]}`);
                } else if (this.rank[i] === 13) {
                    deck.push(`King of ${this.suit[j]}`);
                }
            }
        }
        return deck;
    }

    this.compare = function(cardOne, cardTwo) {
        let firstWordsOFCardOne = cardOne.split(' ')[0];
        let firstWordsOFCardTwo = cardTwo.split(' ')[0];
        let cardOneRank = 0;
        let cardTwoRank = 0;

        if (firstWordsOFCardOne !== 'Ace' 
            && firstWordsOFCardOne !== 'Jack' 
            && firstWordsOFCardOne !== 'Queen' 
            && firstWordsOFCardOne !== 'King') {
                cardOneRank = Number(firstWordsOFCardOne);
        } else if (firstWordsOFCardOne === 'Ace') {
            cardOneRank = 1;
        } else if (firstWordsOFCardOne === 'Jack') {
            cardOneRank = 11;
        } else if (firstWordsOFCardOne === 'Queen') {
            cardOneRank = 12;
        } else if (firstWordsOFCardOne === 'King') {
            cardOneRank = 13;
        }

        if (firstWordsOFCardTwo !== 'Ace' 
            && firstWordsOFCardTwo !== 'Jack' 
            && firstWordsOFCardTwo !== 'Queen' 
            && firstWordsOFCardTwo !== 'King') {
                cardTwoRank = Number(firstWordsOFCardTwo);
        } else if (firstWordsOFCardTwo === 'Ace') {
            cardTwoRank = 1;
        } else if (firstWordsOFCardTwo === 'Jack') {
            cardTwoRank = 11;
        } else if (firstWordsOFCardTwo === 'Queen') {
            cardTwoRank = 12;
        } else if (firstWordsOFCardTwo === 'King') {
            cardTwoRank = 13;
        }

        return Math.abs(cardOneRank - cardTwoRank);
    }
}

function Player() {
    this.name;
    this._win;
    this.deck = new Card().toString();

    this.play = function(playerOne, playerTwo) {
        let playerOnePoint = 0;
        let playerTwoPoint = 0;

        while (this.deck.length > 0) {
            let randomPos = Math.floor(Math.random() * this.deck.length);
            playerCardOne = this.deck.splice(randomPos, 1)[0];
            playerCardTwo = this.deck.splice(randomPos, 1)[0];

            let result = cards.compare(playerCardOne, playerCardTwo);

            if (result > 0) {
                playerOnePoint++;
            } else if (result < 0) {
                playerTwoPoint++
            }

            new Deck().shuffle(cards.length); 
        }

        let final = Math.abs(playerOnePoint - playerTwoPoint);
        if (final > 0) {
            return `${playerOne} wins ${playerOnePoint} to ${playerTwoPoint}`
        } else if (final < 0) {
            return `${playerTwo} wins ${playerOnePoint} to ${playerTwoPoint}`
        } 
    }
}


//Task 2
class Employee {
    constructor() {
        this.employee = {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            birthday: this.birthday,
            salary: this.salary,
            position: this.position,
            department: this.department,
            age: this._age,
            fullName: `${this.firstName} ${this.lastName}`,
        };
        this._EMPLOYEES = [].push(this.employee);
    }

    quit() {
        this._EMPLOYEES.splice(this.id);
        return employee._EMPLOYEES;
    }

    retire() {
        console.log('It was such a pleasure to work with you');
        this._EMPLOYEES.splice(this.employee.id);
        return this._EMPLOYEES;
    }

    getFired() {
        console.log('Not a big deal!');
        this._EMPLOYEES.splice(this.employee.id);
        return this._EMPLOYEES;
    }

    changeDepartment(newDepartment) {
        console.log(newDepartment);
    }

    changePosition(newPosition) {
        console.log(newPosition);
    }

    changeSalary(newSalary) {
        console.log(newSalary);
    }

    getPromoted(benefits) {
        if (benefits.salary && benefits.department && benefits.position) {
            console.log('Yoohooo!');
        }
    }

    getDemoted(punishment) {
        if (punishment.salary && punishment.department && punishment.position) {
            console.log('Damn!');
        }
    }

}

class Manager extends Employee {
    constructor() {
        if (!this.position) {
            this.position = 'Manager';
        }
       
    }

    managedEmployees() {
        return this._EMPLOYEES.filter((employee) => employee.position !== 'Manager');
    }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor() {
        if (!this.position) {
            this.position = 'HR';
        }
    }
}

class SalesManager extends Manager {
    constructor() {
        if (!this.position) {
            this.position = 'Sales';
        }
    }
}


//Task 3

class ManagerPro extends Manager {
    constructor() {
        this.position = 'Manager Pro';
    }
}


