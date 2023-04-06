// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var symbols;
var numeric;
var lowercase;
var uppercase;

var sym = "!@#$%^&*";
var numbers = "1234567890";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Write password to the #password input
function writePassword() {
  
 var password = document.getElementById("#password");
  var chars = "";
  passwordLength = prompt("Pick password length between 8-128");
  uppercase = prompt("would you would like uppercase letters (yes/no)");
  lowercase = prompt("would you would like lowercase letters (yes/no)");
  numbers = prompt("would you would like numbers (yes/no)");
  symbols = prompt("would you would like special characters (yes/no");

  var password ="";

  if (symbols === "yes") { chars += sym;}
  else if(numeric === "yes") {chars += numbers;}
  else if(lowercase === "yes") {chars += lower;}
  else if(uppercase === "yes") {chars += upper;}
  
  for(var i= 1; i<= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
document.getElementById("password").value = password;
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
