//challenge #4

const bill = 430;
let tip = bill >= 50 && bill <= 300;

tip ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Equality Operators: == vs. ===
const numNeighbours = "4";
if (numNeighbours === 1) {
    console.log("Only 1 border!")
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}
