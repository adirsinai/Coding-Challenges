onst checkDogs = function (dogsJulia, dogsKate) {
  const correctJuliaDogs = dogsJulia.slice();
  correctJuliaDogs.splice(0, 1);
  correctJuliaDogs.splice(0, -2);
  console.log(correctJuliaDogs);

  const corrected = correctJuliaDogs.concat(dogsKate);
  console.log(corrected);
  corrected.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1}
  is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1}
  is an adult, and is ${dog} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
