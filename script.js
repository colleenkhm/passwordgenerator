// Assignment code here
//variables for character types
var lowercase = ['a', 'b', 'c', 'd', 'e']
var uppercase = ['A', 'B', 'C', 'D', 'E']
var specialCharacters = ['!', '@', '#']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define generatePassword function

function generatePassword() {
   var criteria = getCriteria();
   console.log(criteria)
   //create array that holds all possible characters based on user criteria
   var possibleCharacters = []
   //check user criteria and add characters to possibleCharacters array based on feedback
   if (criteria.lower) {
       console.log(possibleCharacters)
       possibleCharacters = possibleCharacters.concat(lowercase)
       console.log(possibleCharacters)
   }
}
//shift alt down to copy
function getCriteria() {
    var length = parseInt(prompt('How long would you like your password to be? (select between 8-128 characters)'))
    console.log(length)
    if (length < 8 || length > 128 ) {
        alert('invalid length')
        return 
    }
    if (!length) {
        alert('must be a number')
        return 
    }

    var lc = confirm('Would you like to include lowercase characters?');
    var uc = confirm('Would you like to include uppercase characters?');
    var num = confirm('Would you like to include numbers?');
    var spec = confirm('Would you like to include special characters?');
    console.log(lc, uc, num, spec)

    //if none of these are true...
    if (!lc && !uc && !spec && !num) {
        alert('must choose at least one character type')
        return
    }

    var preferences = {
        length: length,
        lower: lc,
        upper: uc,
        special: spec,
        number: num
    }
    console.log(preferences);
    // preferences.length = length
    // console.log(preferences)
    // preferences.lower = lc
    // console.log(preferences)
    // preferences.upper = uc
    // console.log(preferences)
    // preferences.number = num
    // console.log(preferences)
    // preferences.special = spec
    // console.log(preferences)

    return preferences
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//empty array for actual password
//for loop that runs as many times as length of object
//grab random item to store in array
//turn password array into string
//array.join turns array values into string



//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page