const dinner={
    cheeseburger:12,
    steak:20,
    soup:8,
    macNcheese:14,
    unlimitedCombo:16};

// console.log (Object.keys(dinner))

// console.log (Object.values(dinner))



let totalCost = 0;

// for (const individualMeal in dinner) {
//     totalCost += dinner[individualMeal];
// }

// console.log(totalCost);

for (const individualMeal in dinner) {
    totalCost = totalCost + dinner[individualMeal];
}

console.log(totalCost);