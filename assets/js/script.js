// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordCharacterOptions = [];


// Write password to the #password input
function writePassword() {
  var prompt = window.prompt("How many characters would you like your password to have? Please choose a number between 8 and 128");

  if (prompt < 8) {
    alert("Length not Valid. Please choose a number between 8 and 128.")

    var prompt = window.prompt("How many characters would you like your password to have? Please choose a number between 8 and 128");

    if (prompt < 8) {
      prompt = 8
    }


  }

  if (prompt > 128) {
    alert("Length not Valid. Please choose a number between 8 and 128.")

    var prompt = window.prompt("How many characters would you like your password to have? Please choose a number between 8 and 128");

    if (prompt > 128) {
      prompt = 8
    }


  }




  var lowercase = confirm("would you like to use lowercase characters?");
  if (lowercase === true) {

    var password_characters_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    passwordCharacterOptions = password_characters_lowercase

  }
  else {
    passwordCharacterOptions = [];
  }
  var uppercase = confirm("would you like to use uppercase characters?");
  if (uppercase === true) {

    var password_character_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var combined_characters = passwordCharacterOptions.concat(password_character_uppercase);
    passwordCharacterOptions = combined_characters;

  }

  var numeric = confirm("would you like to use numeric characters?");
  if (numeric === true) {
    var numeric_characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var combined_characters = passwordCharacterOptions.concat(numeric_characters);
    passwordCharacterOptions = combined_characters;
  }

  var special = confirm("would you like to use special characters?");
  if (special === true) {
    var special_characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

    var combined_characters = passwordCharacterOptions.concat(special_characters);
    passwordCharacterOptions = combined_characters;
  }

  if (passwordCharacterOptions.length === 0) {
    alert("password characters will be chosen for you")

    passwordCharacterOptions = ["a", "b", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "?"]

  }

  var random_string = "";
  var random_letter = "";

  for (i = 0; i < prompt; i++) {

    var random_number = Math.floor(Math.random() * passwordCharacterOptions.length);
    //console.log ("random number ", random_number);
    var random_letter = passwordCharacterOptions[random_number];
    console.log('random letter ', random_letter);
    // How to add random letters to a string? 
    //make a variable and return instead of console log?
    var current_random_string_with_random_letter = random_string + random_letter;
    random_string = current_random_string_with_random_letter;
    console.log("randomstring", random_string);
  }

  console.log('random string', random_string);


  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = random_string;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
