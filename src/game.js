class Game {
	constructor() {
		this.player1 = new Player(1);
		this.player2 = new Player(2);
		this.currentPlayer = this.player1;
		this.cards = [1,2,3,4,5,6,7,8,9,10];
		this.centerPile = [];
	}

	shuffle(cards) {
		cards.forEach((card, i) => {
			const randomIndex = Math.floor(Math.random() * this.cards.length);
			const temp = card;
			cards[i] = cards[randomIndex];
			cards[randomIndex] = temp; 
		});
	}

	deal() {
		this.cards.forEach((card, i) => {
			i % 2 ? this.player1.hand.push(card) : this.player2.hand.push(card);
		})
	}

	addToCenterPile() {
		this.centerPile.push(this.currentPlayer.playCard());
	}
}

// A Game should include:

// A way to deal the deck out to the players
// A way to keep track of which player’s turn it currently is
// A way for a player to deal a card into the middle pile
// A way for players to attempt slapping the pile with varying outcomes (“legal” slaps are Jacks, doubles, and sandwiches - see the playthrough video for further explanation)
// A way to update a player’s wins count
// A way to reset the deck and players to play a new game when one is won