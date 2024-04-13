const SUIT_LIST = ['♠', '♥', '♦', '♣'];
const NUMBER_LIST = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const card = { suit: null, number: null, id: null };
const deck = [];

const dealer = {
  getRandomCard: function(id) {
    const suit = SUIT_LIST[Math.floor(Math.random() * SUIT_LIST.length)];
    const number = NUMBER_LIST[Math.floor(Math.random() * NUMBER_LIST.length)];
    return { ...card, suit, number, id };
  },
  deal: function() {
    return [
      { ...player, name: 'María', cardList: [this.getRandomCard('one'), this.getRandomCard('two')] },
      { ...player, name: 'Juan', cardList: [this.getRandomCard('one'), this.getRandomCard('two')] },
      { ...player, name: 'Anna', cardList: [this.getRandomCard('one'), this.getRandomCard('two')] }
    ];
  }
};

const player = {
  name: '',
  cardList: [],
  show: function() {
    const playerElement = document.querySelector(`#${this.name}`);
    playerElement.querySelector('.player-name').innerHTML = this.name;
    this.cardList.forEach((card) => {
      playerElement.querySelector(`.card.${card.id}`).querySelector('.number').innerHTML = card.number;
      playerElement.querySelector(`.card.${card.id}`).querySelector('.suit').innerHTML = card.suit;
      console.log(`El jugador: ${this.name} tiene la carta ${card.suit}, ${card.number} con el id: ${card.id}`);
    });
  }
};

const play = () => {
  const playerCardList = dealer.deal();
  playerCardList.forEach((player) => {
    player.show();
  });
};
play();