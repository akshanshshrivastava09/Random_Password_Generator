let passwordbox = document.querySelector("#passwordBox")
let passwordReciever = document.querySelector("#passwordReciever")

const length =13;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890"
const symbols="~!@#$%^&*)(_+}{|:><?`.,/][=-;'"

const allCharacter = upperCase + lowerCase + number + symbols ;


function setPassword(){
    let strongPassword ="";
strongPassword += upperCase[Math.floor(Math.random() * upperCase.length)]
strongPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
strongPassword += number[Math.floor(Math.random() * number.length)]
strongPassword += symbols[Math.floor(Math.random() * symbols.length)]

while(length>strongPassword.length ){
    strongPassword += allCharacter[Math.floor(Math.random() * allCharacter.length)]
}

passwordBox.value = strongPassword;

}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");

    
}
