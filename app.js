/* Genero numeri casuali da 1 a 6. */
let humanNumber = Math.floor(Math.random() * 6 + 1);
let computerNumber = Math.floor(Math.random() * 6 + 1);

/* stampo i risultati */
console.log(humanNumber);
console.log(computerNumber);

/* comparo i risultati e stampo il vincitore */
if (humanNumber > computerNumber) {
    console.log("computer won");
} else if (humanNumber === computerNumber) {
    console.log("no winners here. Try again");
} else {
    console.log("human won");
}
