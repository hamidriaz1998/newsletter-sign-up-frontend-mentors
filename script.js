const form = document.querySelector("form");
const inputElement = document.querySelector(".input");
const newsletter = document.querySelector("#newsletter");
const success = document.querySelector("#success");
const dismissButton = document.querySelector("#dismiss-button");

function toggleHide(element) {
  element.classList.toggle("hide");
  element.classList.toggle("flex");
}

function toggleError(element, isValid) {
  element.classList.toggle("normal-input", isValid);
  element.classList.toggle("error-input", !isValid);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function processForm(e) {
  e.preventDefault();
  const formValues = new FormData(form);
  const data = Object.fromEntries(formValues);
  const errorField = document.querySelector("#error-field");
  let isValid = isValidEmail(data.email);
  toggleError(inputElement, isValid);
  if (isValid) {
    errorField.textContent = "";
    toggleHide(newsletter);
    toggleHide(success);
    document.querySelector(".email-address").textContent = data.email;
  } else {
    errorField.textContent = "Valid email required";
  }
}

function dismissSuccess() {
  toggleHide(success);
  toggleHide(newsletter);
  document.querySelector(".email-address").textContent = "";
  inputElement.value = "";
}

form.addEventListener("submit", processForm);
dismissButton.addEventListener("click", dismissSuccess);
