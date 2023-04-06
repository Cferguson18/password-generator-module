// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables//
var passwordLength;
var symbols;
var numeric;
var lowercase;
var uppercase;
//characters//
var sym = "!@#$%^&*";
var numbers = "1234567890";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Write password to the #password input
function writePassword() {
  
 var password = document.getElementById("#password");
 var passwordText = document.querySelector("#password");
  var chars = "";
  //prompts//
  passwordLength = prompt("Pick password length between 8-128");
  uppercase = prompt("would you would like uppercase letters (yes/no)");
  lowercase = prompt("would you would like lowercase letters (yes/no)");
  numbers = prompt("would you would like numbers (yes/no)");
  symbols = prompt("would you would like special characters (yes/no");

//all 4 choices//
   if (symbols && numeric && lowercase && uppercase == "yes") { chars += sym && number && lower && upper;}
   //all 3 choices//
   else if(numeric && lowercase && uppercase == "yes") {chars += numbers && lower && upper;}
   else if(numeric && uppercase && symbols == "yes") {chars += numbers && sym && upper;}
   else if(numeric && lowercase && symbols == "yes") {chars += numbers && lower && sym;}
   else if(symbols && lowercase && uppercase == "yes") {chars += symbols && lower && upper;}
   //all 2 choices/
  else if(lowercase && uppercase == "yes") {chars += lower && upper;}
  else if(lowercase && symbols == "yes") {chars += lower && sym;}
  else if(symbols && numeric == "yes") {chars += sym && numbers;}  
  else if(symbols && uppercase == "yes") {chars += sym && upper;}
  else if(lowercase && numeric == "yes") {chars += lower && number;}
  else if(numeric && uppercase == "yes") {chars += numbers && upper;}
   // 1 choice//
   else if(uppercase == "yes") {chars += upper;}
   else if(lowercase == "yes") {chars += lower;}
   else if(symbols == "yes") {chars += sym;}
   else if(numeric == "yes") {chars += number;}
//generate passcode with answers//
  var password ="";
  
  for(var i= 1; i<= passwordLength; i++){
    var randomPassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomPassword, randomPassword +1);
  
  passwordText.value = password;

}
//display//
document.getElementById("password").value = password;
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
