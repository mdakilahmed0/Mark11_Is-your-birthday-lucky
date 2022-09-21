const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check");
const messageOutput = document.querySelector("#output-msg");

function checkBirthdateIsLucky() {
  const dobVal = dateOfBirth.value;
  const luckyNumVal = luckyNumber.value;
  const dobSum = calculateSumOfDOB(dobVal);

  if (dobVal === "" || luckyNumVal === "") {
    messageOutput.innerText = "You need to enter both the values....";
  } else {
    if(luckyNumVal < 0){
      messageOutput.innerText = "Your lucky number should be a positive value....";
    }else if (dobSum % luckyNumVal === 0) {
      messageOutput.innerText = "Your birthday is lucky";
    } else {
      messageOutput.innerText = "Sorry! Your birthday is not lucky";
    }
  }
}

function calculateSumOfDOB(dobVal) {
  dobVal = dobVal.replaceAll("-", "");

  let sum = 0;
  for (let i = 0; i < dobVal.length; i++) {
    sum = sum + Number(dobVal.charAt(i));
  }
  return sum;
}

checkNumberBtn.addEventListener("click", checkBirthdateIsLucky);
