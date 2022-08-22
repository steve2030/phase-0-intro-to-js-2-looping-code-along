// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I am ${age} years old. Happy birthday to me! `);
}

let countup = 0;
while (countup < 10) {
    console.log(countup++);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrappedGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
        debugger;
    }
    return gifts;
}
wrappedGifts(gifts);

// writeCards function using a for loop  and returns an array of the messaages.
function writeCards(names, message) {
    const messages = []
    for (let counter = 0; counter < names.length; counter++) {
        messages.push(`Thank you, ${names[counter]}, for the wonderful ${message} gift!`);
    }
    return messages;
}

// countdown() fucntion using a while loop
function countDown(number) {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}
