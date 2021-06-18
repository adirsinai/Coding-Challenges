// challenge #7
const markProperties = {
    fullName: "Mark miller",
    mass: 78,
    height: 1.69,
    calcMarkBmi: function () {
        return this.markBmi = this.mass / (this.height * this.height);
    }

}

const johnProperties = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcJohnBmi: function () {
        return this.johnBmi = this.mass / (this.height * this.height);
    }
}

if (johnProperties.calcJohnBmi() > markProperties.calcMarkBmi()) {
    console.log(`${johnProperties.fullName}'s BMI ${johnProperties.johnBmi} is higher than ${markProperties.fullName}'s ${markProperties.markBmi}`)
} else {
    console.log(`${markProperties.fullName}'s BMI ${markProperties.calcMarkBmi()} is higher than ${johnProperties.fullName}'s ${johnProperties.johnBmi}`)

}
