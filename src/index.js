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

function getValueByMorse(code) {
    //returns key for value
    // code = code.split("");
    
    if ((code === "**********")) {
        return " ";
    }
    for (let i = 0; i < code.length; i++) {
        //get rid of zeros
        if (code[i] === "0" && code[i + 1] === "1") code = code.slice(i + 1);
        break;
    }
    // code = code.join("");
    
    let result = "";
    
    for (let i = 0; i < code.length; i = i + 2) {
        if (code[i] + code[i + 1] === "10") {
            result += ".";
        } else if (code[i] + code[i + 1] === "11") {
            result += "-";
        }
    }
    
    console.log("result", result);

    let value = MORSE_TABLE[result];

    console.log("valuef", value);

    console.log("valuef", value);

    console.log("codef", code);
    return value;
}

function decode(expr) {
    // let arr = expr.split("");
    let result = "";
    // let counter = 0;
    for (let i = 10; i < expr.length; i = i + 10) {
        // console.log(expr.length);
        let code = expr.slice(i - 10, i);
        console.log("i", i);
        console.log("counter", i - 10);
        console.log("code", code);

        let value = getValueByMorse(code);
        result += value;
        console.log("value", value);
    }

    return result;
}

module.exports = {
    decode,
};
