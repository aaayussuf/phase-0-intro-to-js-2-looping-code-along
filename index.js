function writeCards(names, eventName) {
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example calls for testing
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown(10);
