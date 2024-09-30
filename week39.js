
//Task A

console.log("Task: A");

const tall = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < tall.length; i++) {
  sum += tall[i];
}

console.log("Sum:", sum);


//Task B

console.log("Task: B");

function summer(liste) {
  let sum = 0;
  for (let i = 0; i < liste.length; i++) {
    sum += liste[i];
  }
  return sum;
}

const result = summer(tall);

if (result === 15) {
  console.log("🎉 Task B is most likely correct");
} else {
  console.log("😱 Task B has some issues, but you can fix it 👍");
}


//Task C

console.log("Task: C");

const andreTall = [6, 7, 8, 9]
let difference = andreTall[0];

for (let i = 1; i < andreTall.length; i++) {
  difference -= andreTall[i];
}

console.log("Difference:", difference);

//Task D

console.log("Task: D");

function differansier(liste) {
    let difference = liste[0];
  for (let i = 1; i < liste.length; i++) {
    difference -= liste[i];
  }
  return difference;
}

const diff = differansier(andreTall);

if (diff === -18) {
    console.log("🎉 Task D is most likely correct");
} else {
    console.log("😱 Task D has some issues, but you can fix it 👍");
}


//Task E

console.log("Task: E");

function multipliser(liste) {
  let product = 1;
  for (let i = 0; i < liste.length; i++) {
    product *= liste[i];
  }
  return product;
}