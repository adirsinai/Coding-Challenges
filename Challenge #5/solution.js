//challenge #5

const calcAverage = (a, b, c) => (a + b + c) / 3

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

function chackWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins...')
    }

}

chackWinner(scoreDolphins, scoreKoalas);

// Introduction to Arrays
const populations = [9, 83, 3, 95];

populations.length === 4 ? console.log('true') : console.log('false');

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);
