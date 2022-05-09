module.exports.demoPlaying = {
  name: 'demo-playing',
  privacy: 'public',
  state: 'playing', // state is building, playing, or ended
  host: { username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
  players: [{ username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
    { username: 'lcosta', pronouns: 'she/her/hers', avatar: 'test1.png' },
    { username: 'mteran', pronouns: 'he/him/his', avatar: 'test2.png' }],
  currentRound: {
    roundNumber: 2,
    turnNumber: 7,
    currentPlayer: 'twheeler',
    activeHands: {
      twheeler: {
        value: 3,
        hand: [{
          card: 'Clown',
          value: 2,
          image: 'imageUrlHere',
        },
        {
          card: 'Soldier',
          value: 1,
          image: 'imageUrlHere',
        }],
      },
      mteran: {
        value: 7,
        hand: [{
          card: 'Priestess',
          value: 4,
          image: 'imageUrlHere',
        }],
      },
    },
    discardPiles: {
      twheeler: [{
        card: 'Minister',
        value: 7,
        image: 'imageUrlHere',
      }],
      lcosta: [{
        card: 'Prince',
        value: 8,
        image: 'imageUrlHere',
      }],
      mteran: [{
        card: 'Knight',
        value: 3,
        image: 'imageUrlHere',
      }],
    },
    deck: [{
      card: 'General',
      value: 6,
      image: 'imageUrlHere',
    }, {
      card: 'Minister',
      value: 7,
      image: 'imageUrlHere',
    }, {
      card: 'Clown',
      value: 2,
      image: 'imageUrlHere',
    },
    {
      card: 'Soldier',
      value: 1,
      image: 'imageUrlHere',
    }, {
      card: 'Wizard',
      value: 5,
      image: 'imageUrlHere',
    }], // rewrite deck as array of objects
  },
  roundWins: {
    twheeler: 0,
    lcosta: 1,
    mteran: 0,
  },
  chat: [
    {
      id: 3425432543,
      username: 'mteran',
      message: 'nice play @lcosta!',
    },
  ],
};

module.exports.demoBuilding = {
  name: 'demo-building',
  privacy: 'public',
  state: 'building', // state is building, playing, or ended
  host: { username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
  players: [
    { username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
    { username: 'lcosta', pronouns: 'she/her/hers', avatar: 'test1.png' },
  ],
  currentRound: {
    roundNumber: 2,
    turnNumber: 7,
    currentPlayer: 'twheeler',
    activeHands: {
      twheeler: {
        value: 3,
        hand: [{
          card: 'Clown',
          value: 2,
          image: 'imageUrlHere',
        },
        {
          card: 'Soldier',
          value: 1,
          image: 'imageUrlHere',
        }],
      },
      mteran: {
        value: 7,
        hand: [{
          card: 'Priestess',
          value: 4,
          image: 'imageUrlHere',
        }],
      },
    },
    discardPiles: {
      twheeler: [{
        card: 'Minister',
        value: 7,
        image: 'imageUrlHere',
      }],
      lcosta: [{
        card: 'Prince',
        value: 8,
        image: 'imageUrlHere',
      }],
      mteran: [{
        card: 'Knight',
        value: 3,
        image: 'imageUrlHere',
      }],
    },
    deck: [{
      card: 'General',
      value: 6,
      image: 'imageUrlHere',
    }, {
      card: 'Minister',
      value: 7,
      image: 'imageUrlHere',
    }, {
      card: 'Clown',
      value: 2,
      image: 'imageUrlHere',
    },
    {
      card: 'Soldier',
      value: 1,
      image: 'imageUrlHere',
    }, {
      card: 'Wizard',
      value: 5,
      image: 'imageUrlHere',
    }], // rewrite deck as array of objects
  },
  roundWins: {
    twheeler: 0,
    lcosta: 1,
    mteran: 0,
  },
  chat: [
    {
      id: 3425432543,
      username: 'mteran',
      message: 'nice play @lcosta!',
    },
  ],
};