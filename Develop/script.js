// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//Arrays with all possible values
let uppercaseArray =["A", "B", "C", "D", "E", "F", "G", "H", "I",
                     "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                     "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowercaseArray =["a", "b", "c", "d", "e", "f", "g", "h", "i",
                     "j", "k", "l", "m", "n", "o", "p", "q", "r",
                     "s", "t", "u", "v", "w", "x", "y", "z"];

let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let specialcharactersArray = ["/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-" ,"=" ,"|" ,"," , "." , "<", ">", "/", "?", "+" ];

let Arrays=[];


//Prompt that asks number of characers in the password
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
let passwordLength = prompt ("Type the amount of numbers you want in your password, it must be between 8 and 128");


//True or false prompts for the requirements in the password.
let lowerCase = confirm ("Do you want your password to have lowercase letters?");

let upperCase = confirm ("Do you want your password to have UPPERCASE letters?");

let numbers = confirm ("Do you want your password to contain numbers?");

let specialCharacters = confirm("Do you want your password to contain special characters?");


//if conditions that add or remove the requirements for the password.
//if (Arrays=passwordLength);

if (lowerCase===true){
  Arrays+=lowercaseArray;
} else {
  Arrays===Arrays;
}

if (upperCase===true){
  Arrays+=uppercaseArray;
} else {
  Arrays===Arrays;
}

if (numbers === true){
  Arrays+=numbersArray;
} else {
  Arrays===Arrays;
}

if (specialCharacters === true){
  Arrays+=specialcharactersArray;
} else {
  Arrays===Arrays;
}



//Creates an array that is separated by commas
let randomPassword = [];
for(let i =0; i < passwordLength; i++){
  randomPassword.push(Arrays[Math.floor(Math.random() * (Arrays.length))]);
}

//creates a string with the elements of the array, (Removes commas)
let password = "";

for (let i = 0; i < passwordLength; i++){
	password += randomPassword[i];

}

return password;
}






