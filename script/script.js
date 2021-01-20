// const allButtons = document.getElementsByClassName("btn-warning");

// for (let i = 0; i < allButtons.length; i++) {
//   let oneBtn = allButtons[i];
//   oneBtn.addEventListener("click", getInput);
// }

// function getInput() {
//   const input = prompt("Input:");
//   console.log("clicked");
// }

const forEmailBtn = document.querySelector(".forEmail");
const forPostalBtn = document.querySelector(".forPostal");
const forPhoneBtn = document.querySelector(".forPhone");
const result = document.querySelector("#result");

forEmailBtn.addEventListener("click", () => {
  const input = prompt("Enter Your Email: ");
  const regex = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
  if (regex.test(input)) {
    result.className = "text-success";
    result.innerText = "Your Email is Valid!";
  } else {
    result.className = "text-danger";
    result.innerText = "Sorry! Your Email is Invalid. Try Again!";
  }
});

forPostalBtn.addEventListener("click", () => {
  const input = prompt("Enter Your Email: ");
  const regex = /^[0-9]{4}$/;
  if (regex.test(input)) {
    result.className = "text-success";
    result.innerText = "Your Postal Code is Valid!";
  } else {
    result.className = "text-danger";
    result.innerText = "Sorry! Your Postal Code is Invalid. Try Again!";
  }
});

forPhoneBtn.addEventListener("click", () => {
  const input = prompt("Enter Phone Number: ");
  const regex = /^(\+)?(88)?01[^0-2][0-9]{8}$/;
  if (regex.test(input)) {
    result.className = "text-success";
    result.innerText = "Your Phone Number is Valid!";
  } else {
    result.className = "text-danger";
    result.innerText = "Sorry! Your Phone Number is Invalid. Try Again!";
  }
});
