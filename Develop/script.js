// Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercase, uppercase, numbers, and special characters put into variables when user clicks yes or no to include following
var lowerCases = "abcdefghijklmnopqrstuvwxyz"; 
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "9876543210";
var specialCharacters = "~!@#$%^&*()_+-=[]{}\|;':,./<>?";

// variables to determine if user selects yes to variables above
var lowerCasesYES = null;
var upperCasesYES = null;
var numsYES = null;
var specialCharactersYES = null;

//variable for after user clicks confirm (yes) or cancel (no) to both variables above
var yesClick = ""
var generateLetter = ""

//variable to compile all variables selected and pushes password out
var compile = ""


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  var passwordLength = prompt("How many characters would you like to have in your password? (Please select a number between 8 and 128)")
// user will select a password length between 8 and 128 characters then the below executes
    if (passwordLength > 7 && passwordLength < 129) {
  lowerCasesYES = confirm("Would you like to include lower cases in your password?");
    if (lowerCasesYES) {yesClick = yesClick.concat(lowerCases);}
    upperCasesYES = confirm("Would you like to include upper cases in your password?");
    if (upperCasesYES) {yesClick = yesClick.concat(upperCases);}
    numsYES = confirm("Would you like to include numbers in your password?");
    if (numsYES) {yesClick = yesClick.concat(nums);}
    specialCharactersYES = confirm("Would you like to include special characters in your password?");
    if (specialCharactersYES) {yesClick = yesClick.concat(specialCharacters);}
  };

  // console logged out yes click to determine if it was pulling all possible characters
  // console.log(yesClick)
  // split so possibleChar can target every option 
  var posibleChar = yesClick.split("");
  //console.log("possible char: ", posibleChar);

//Generating random values from variables lowerCases, upperCases, nums, and specialCharacters if they were clicked

function generatePassword() {
  var storedLetters = ""
 for (i=0; i < passwordLength; i++) {
   var randomIndex = Math.floor(Math.random() * yesClick.length);
   console.log("random char: ", posibleChar[randomIndex])
   storedLetters.concat(posibleChar[randomIndex]);
  storedLetters = storedLetters.concat((posibleChar[randomIndex]))
 }
 return storedLetters
}


//Takes above functions output and inputs it into the amount of characters that the user wanted their password to be, this way to ensure every letter is randomly generated


