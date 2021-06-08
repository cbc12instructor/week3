// create array of cards
var cardValues = [
	'Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
	'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'
];

var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

var colors = {
	'Spades': 'black',
	'Hearts': 'red',
	'Clubs': 'black',
	'Diamonds': 'red',
};

var cards = [];

for ( var i = 0; i < cardValues.length; i++ ) {
	for ( var s = 0; s < suits.length; s++ ) {
		cards.push( cardValues[i] + ' of ' + suits[s] );
	}
}

// randomly select card 1
var card1 = document.getElementById('card_1');
card1.innerHTML = cards[ Math.floor( (Math.random() * cards.length) + 1 ) ];

// randomly select card 2
var card2 = document.getElementById('card_2');
card2.innerHTML = cards[ Math.floor( (Math.random() * cards.length) + 1 ) ];

// randomly select card 3
var card3 = document.getElementById('card_3');
card3.innerHTML = cards[ Math.floor( (Math.random() * cards.length) + 1 ) ];

// randomly select card 4
var card4 = document.getElementById('card_4');
card4.innerHTML = cards[ Math.floor( (Math.random() * cards.length) + 1 ) ];

// randomly select card 5
var card5 = document.getElementById('card_5');
card5.innerHTML = cards[ Math.floor( (Math.random() * cards.length) + 1 ) ];