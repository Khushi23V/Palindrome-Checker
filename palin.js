const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
  let stringText = document.getElementById("text-input").value;
  palindromeCheck(stringText);
});

function palindromeCheck(stringText) {
  let newStr = stringText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const len = newStr.length;
  
  if (stringText === "") {
    alert("Please input a value");
    return;
  }
  
  if (len === 1) {
    result.textContent = stringText + " is a palindrome";
    return;
  }
  
  const halfStr = Math.floor(len / 2);
  let isPalindrome = true; 
  
  for (let i = 0; i < halfStr; i++) {
    if (newStr[i] !== newStr[len - 1 - i]) {
      isPalindrome = false;
      break; 
    }
  }
  
  if (isPalindrome) {
    result.textContent = stringText + " is a palindrome";
  } else {
    result.textContent = stringText + " is not a palindrome";
  }
}
