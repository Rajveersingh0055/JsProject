const passwordBox = document.getElementById("password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const sysmbol = "~!@#$%^&*()_+=-:?><[]{}|/.,";

const allChars = upperCase + lowerCase + number + sysmbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += sysmbol[Math.floor(Math.random() * sysmbol.length)];

  while (password.length<length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
     password = password
       .split("")
       .sort(() => Math.random() - 0.5)
       .join("");

     // Display the generated password in the input field
     passwordBox.value = password;
  }
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}