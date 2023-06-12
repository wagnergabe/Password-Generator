function getRandomLower() {
    return String.fromCharCode(Math.random() * 26) + 97; //ASCII Character set: lowercase characters range(97-122)
}

function getRandomUpper() {
    return String.fromCharCode(Math.random() * 26) + 65;
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols  = '!@#$%^(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}