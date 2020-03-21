// Declare Variables
let specialChar = false;

let numericChar = false;

let lowerCase = false;

let upperCase = false;

let length = false;

let character = false;

let pswLength = 0;

let password = "";

let char = [];

let generateBtn = document.querySelector("#generate");

let passwordText = document.querySelector("#passwordBox");

generateBtn.addEventListener("click", start);

//password questions
function start() {
    while (!length) {
        pswLength = prompt("Enter Password (min 8 max 128 characters).");
        if (pswLength <= 128 && pswLength >= 8) {
            length = true;
        }
        else {
            alert("Type number from 8 and 128!");
        }
    }

    while (!character) 
    
    {
        specialChar = confirm("Would you like to include special characters?");

        numericChar = confirm("Would you like to include numbers?");

        lowerCase = confirm("Would you like to include lowercase letters?");

        upperCase = confirm("Would you like to include uppercase letters?");

        if (specialChar || numericChar || lowerCase || upperCase) {
            character = true;
        }
        else {
            alert("Please choose at least one character type!");
        }
    }

    
    function pushChar(start, end) {
        for (let i = start; i <= end; i++) {
            char.push(String.fromCharCode(i));
        }
    }
    if (specialChar) {
        pushChar(32, 47);
        pushChar(58, 64);
        pushChar(91, 96);
        pushChar(123, 126);
    }
    if (numericChar) {
        pushChar(48, 57);
    }
    if (lowerCase) {
        pushChar(97, 122);
    }
    if (upperCase) {
        pushChar(65, 90);
    }

    generate();

    
    function generate() 
    
    {
        password = "";
        for (let i = 0; i < pswLength; i++) {
            password += char[Math.floor(Math.random() * char.length)];
        }

        passwordText.textContent = password;
    }
}
