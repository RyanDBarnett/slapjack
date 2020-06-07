class Player {
    constructor(id) {
        this.id = id;
        this.hand = [];
        this.wins = 0;
    }

    playCard() {
        return this.hand.pop();
    }
}