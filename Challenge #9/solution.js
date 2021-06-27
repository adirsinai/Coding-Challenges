//Coding Challenge #9
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'adir'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//.1
const [players1, players2] = game.players;
console.log(players1, players2);
//.2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//.3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//.4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//.5
const {
  odds: { team1, x: darw, team2 },
} = game;
console.log(team1, darw, team2);
//.6
const printGoal = function (...players) {
  for (i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`${players.length} goals were scored`);
};
printGoal(...game.scored);
//.7
team1 < team2 && console.log('team 1 os more likely to win');
team1 > team2 && console.log('team 2 os more likely to win');
