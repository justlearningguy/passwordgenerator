const lowercaseInput = document.getElementById("lowercaseInput");
const uppercaseInput = document.getElementById("uppercaseInput");
const numbersInput = document.getElementById("numbersInput");
const symbolsInput = document.getElementById("symbolsInput");
const lengthInput = document.getElementById("lengthInput");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const alertText = document.getElementById("alert")
let lowercaseList = "abcdefghijklmnopqrstuvwxyz";
let uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbersList = "0123456789";
let symbolsList = ".,?/!@#№$|%^&*-_+=<>[]{}()";

generateBtn.onclick = function() {
    let allowedList = "";
    alertText.textContent = ""
    allowedList += lowercaseInput.checked ? lowercaseList : "";
    allowedList += uppercaseInput.checked ? uppercaseList : "";
    allowedList += numbersInput.checked ? numbersList : "";
    allowedList += symbolsInput.checked ? symbolsList : "";
    
    let password = "";
    if(isNaN(Number(lengthInput.value)) || lengthInput.value <= 0 || allowedList === "") {
        alertText.textContent = "Please enter the valid length and choose at least 1 type of characters in password!";
        result.textContent = "";
    }

    else {
        for(let i =0;i < Number(lengthInput.value); i++ ) {
            let randomIndex = Math.floor(Math.random() * (allowedList.length -1));
            password += allowedList[randomIndex];
        }
        result.textContent = password;
    }
}
