//challenge #3
let dolphinsAverage = (96 + 108 + 89) / 3;
let koalasAverage = (88 + 100 + 110) / 3;
console.log(dolphinsAverage, koalasAverage)
if (dolphinsAverage > koalasAverage) {
    console.log(`'Dolphins is the winners! with ${dolphinsAverage}`);
} else if (dolphinsAverage < koalasAverage) {
    console.log(`'Koalas is the winners! with ${koalasAverage}`);
} else {
    console.log(`'This is the Draw! with ${koalasAverage} and ${dolphinsAverage}`);
}

dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 123) / 3;
console.log(dolphinsAverage, koalasAverage)
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`'Dolphins is the winners! with ${dolphinsAverage}`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log(`'Koalas is the winners! with ${koalasAverage}`);
} else {
    console.log(`'This is the Draw! with ${koalasAverage} and ${dolphinsAverage}`);
}

dolphinsAverage = (97 + 112 + 81) / 3;
koalasAverage = (109 + 95 + 86) / 3;
console.log(dolphinsAverage, koalasAverage)
if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`both win the tropy`)
} else {
    console.log(`no one win the tropy`)
}
