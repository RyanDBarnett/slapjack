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

	updateWinCount(player) {
		player.wins++;
	}

	resetDeck() {
		this.shuffle(this.cards);
		this.deal();
	}

	slap() {
		const firstCard = this.centerPile[this.centerPile.length - 1];
		const secondCard = this.centerPile[this.centerPile.length - 2];
		const thirdCard = this.centerPile[this.centerPile.length - 3];
		if (firstCard === 11 || firstCard === secondCard || firstCard === thirdCard) {
			// winnner
		} else {
			// loser
		}
	}
}

// A Game should include:

// A way for players to attempt slapping the pile with varying outcomes (“legal” slaps are Jacks, doubles, and sandwiches - see the playthrough video for further explanation)