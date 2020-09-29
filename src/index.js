const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function getLetterFromMorse(code) {
    // takes code, format "000000010"
    // returns letter
    
    if ((code === "**********")) {
        return " ";
    }

    for (let i = 0; i < code.length; i++) {
        //get rid of zeros
        if (code[i] === "0" && code[i + 1] === "1") code = code.slice(i + 1);
        break;
    }
       
    //convert "111011" format to "-.-"
    let result = "";
    for (let i = 0; i < code.length; i = i + 2) {
        if (code[i] + code[i + 1] === "10") {
            result += ".";
        } else if (code[i] + code[i + 1] === "11") {
            result += "-";
        }
    }    

    let value = MORSE_TABLE[result];
    return value;
}

function decode(expr) {
    let result = "";
    for (let i = 10; i < expr.length + 1; i = i + 10) {
        //call function for every 10 symbols
        let value = getLetterFromMorse(expr.slice(i - 10, i));
        result += value;
    }
    return result;
}

module.exports = {
    decode,
};
