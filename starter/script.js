// Array of special characters to be included in password

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var allOptions = [...specialCharacters, ...numericCharacters, ...lowerCasedCharacters, ...upperCasedCharacters];


var randomElements = [];


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var userChoice = prompt("How many characters would you like in you Password?");


  if (userChoice <= 7 || userChoice >= 129) {

    alert("you can't choose that number. Please choose between 8 to 128");
    var userChoice = prompt("How many characters would you like in you Password?");


  }

  var userNumber = parseInt(userChoice);



  var option1 = confirm("Click OK to confirm including special characters");

  var option2 = confirm("Click OK to confirm including numeric characters");

  var option3 = confirm("Click OK to confirm including lowercase characters");

  var option4 = confirm("Click OK to confirm including uppercase characters");


  if (!option1 && !option2 && !option3 && !option4) {
    alert("you need to choose at least one");


    var option1 = confirm("Click OK to confirm including special characters");

    var option2 = confirm("Click OK to confirm including numeric characters");

    var option3 = confirm("Click OK to confirm including lowercase characters");

    var option4 = confirm("Click OK to confirm including uppercase characters");


  }




  //  if (option1 && option2 && option3 && option4) {
  //
  //
  //for (var i = 0; i < userNumber; i++) {
  //      var randomPassword = (Math.floor(Math.random() * allOptions.length));
  //
  //      randomElements.push(allOptions[randomPassword]);
  //
  //      var password1 = randomElements.join(' ');
  //
  //}
  //}
  //
  //console.log (allOptions);
  //console.log(password1);
  //return password1;



  if (option1) randomElements = randomElements.concat(specialCharacters);
  if (option2) randomElements = randomElements.concat(numericCharacters);
  if (option3) randomElements = randomElements.concat(lowerCasedCharacters);
  if (option4) randomElements = randomElements.concat(upperCasedCharacters);


  for (var i = 0; i < userNumber; i++) {
    var randomPassword = (Math.floor(Math.random() * randomElements.length));
    //randomElements.push(randomElements[randomPassword]);
    //var password1 = randomPassword.join(' ');
  }
  console.log(randomPassword);
  //return password1;
}








// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);