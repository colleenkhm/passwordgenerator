//variables for character types
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '{', '}', '~', '`'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function to concatenate array of possible characters for randomization
function generatePassword() {
    var randomPassword = "";
    var criteria = getCriteria();
    //create array that holds all possible characters based on user criteria
    var possibleCharacters = [];
    
    //check user criteria and add characters to possibleCharacters array based on feedback
    if (criteria.lower) {
        possibleCharacters = possibleCharacters.concat(lowercase);
        randomPassword = randomPassword + randomElement(lowercase);
    }

    if (criteria.upper) {
        possibleCharacters = possibleCharacters.concat(uppercase);
        randomPassword = randomPassword + randomElement(uppercase);
    }

    if (criteria.number) {
        possibleCharacters = possibleCharacters.concat(numbers);
        randomPassword = randomPassword + randomElement(numbers);
    }

    if (criteria.special) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        randomPassword = randomPassword + randomElement(specialCharacters);
        
    }
    //use length value from user input to generate password
    for(var i = randomPassword.length; i < criteria.passwordLength; i++) {
        randomPassword = randomPassword + randomElement(possibleCharacters);
    }
    
    return randomPassword;
}
    
//prompts user to choose criteria for password/stores that information
function getCriteria() {
    var length = prompt('How long would you like your password to be? (select between 8-128 characters)', 8);
    if (length < 8 || length > 128 || isNaN(length) === true) {
        alert('invalid length')
        return
        // var notice = 'invalid length';
        // return notice;
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
        passwordLength: length,
        lower: lc,
        upper: uc,
        special: spec,
        number: num
    }

    return preferences
}

//randomize special characters from the array created by user input
function randomElement(arr) {
    var random = Math.random();
    var index = Math.floor(random * arr.length);

    return arr[index];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
