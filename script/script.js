const forNameBtn = document.querySelector(".forName");
const forEmailBtn = document.querySelector(".forEmail");
const forPostalBtn = document.querySelector(".forPostal");
const forPhoneBtn = document.querySelector(".forPhone");
const mouseOverAlert = document.querySelector(".mouseOverAlert");
const result = document.querySelector("#result");
const showInput = document.querySelector("#input");
const allButtons = document.getElementsByClassName("btn-warning");

function showAlert(buttonName) {
  buttonName.addEventListener("mouseover", () => {
    mouseOverAlert.style.visibility = "visible";
    if (buttonName == forNameBtn) {
      mouseOverAlert.innerText = "Don't type number or symbol character!";
    } else if (buttonName == forEmailBtn) {
      mouseOverAlert.innerText = "Follow this format: example@example.example!";
    } else if (buttonName == forPostalBtn) {
      mouseOverAlert.innerText = "Don't type alphabet & type 4 character!";
    } else if (buttonName == forPhoneBtn) {
      mouseOverAlert.innerText =
        "Don't type alphabet & follow BD phone number format!";
    }
  });
}

for (let i = 0; i < allButtons.length; i++) {
  let oneBtn = allButtons[i];
  showAlert(oneBtn);
}

forNameBtn.addEventListener("click", () => {
  const input = prompt("Enter Your Name: ");
  const regex = /[^a-zA-Z]/;

  if (input === "") {
    showInput.innerText = `Input: ${input}`;
    result.className = "text-danger";
    result.innerText = "Sorry! Your Name is Invalid. Try Again!";
  } else if (!regex.test(input)) {
    mouseOverAlert.style.visibility = "hidden";
    showInput.innerText = `Input: ${input}`;
    result.className = "text-success";
    result.innerText = "Your Name is Valid!";
  } else {
    showInput.innerText = `Input: ${input}`;
    result.className = "text-danger";
    result.innerText = "Sorry! Your Name is Invalid. Try Again!";
  }
});

forEmailBtn.addEventListener("click", () => {
  const input = prompt("Enter Your Email: ");
  const regex = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
  if (regex.test(input)) {
    mouseOverAlert.style.visibility = "hidden";
    showInput.innerText = `Input: ${input}`;
    result.className = "text-success";
    result.innerText = "Your Email is Valid!";
  } else {
    showInput.innerText = `Input: ${input}`;
    result.className = "text-danger";
    result.innerText = "Sorry! Your Email is Invalid. Try Again!";
  }
});

forPostalBtn.addEventListener("click", () => {
  const input = prompt("Enter Your Email: ");
  const regex = /^[0-9]{4}$/;
  if (regex.test(input)) {
    mouseOverAlert.style.visibility = "hidden";
    showInput.innerText = `Input: ${input}`;
    result.className = "text-success";
    result.innerText = "Your Postal Code is Valid!";
  } else {
    showInput.innerText = `Input: ${input}`;
    result.className = "text-danger";
    result.innerText = "Sorry! Your Postal Code is Invalid. Try Again!";
  }
});

forPhoneBtn.addEventListener("click", () => {
  const input = prompt("Enter Phone Number: ");
  const regex = /^(\+)?(88)?01[^0-2][0-9]{8}$/;
  if (regex.test(input)) {
    mouseOverAlert.style.visibility = "hidden";
    showInput.innerText = `Input: ${input}`;
    result.className = "text-success";
    result.innerText = "Your Phone Number is Valid!";
  } else {
    showInput.innerText = `Input: ${input}`;
    result.className = "text-danger";
    result.innerText = "Sorry! Your Phone Number is Invalid. Try Again!";
  }
});
