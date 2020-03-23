// DOM Elements
const resultField = document.querySelector("#result");
const clearTipButton = document.querySelector("#clear-tip");
const torontoButton = document.querySelector("#toronto-button");
const sanFranButton = document.querySelector("#sanfran-button");
const taxInput = document.querySelector("#tax-input");
const tipInput = document.querySelector("#tip-input");
const venmoButton = document.querySelector("#venmo");
const interacButton = document.querySelector("#interac");
// State Variables
let taxValue = 13;
let tipValue = 12;
// Set State
const setTax = value => {
  taxValue = value;
  taxInput.value = taxValue;
};
const setTip = value => {
  tipValue = value;
  tipInput.value = tipValue;
};
// Update State
const updateInput = (data, updateFunc, parseFunc) => {
  const parsed = parseFunc(data);
  updateFunc(!isNaN(parsed) ? parsed : 0);
};
// Utility
const writeToClipboard = text => {
  navigator.permissions.query({ name: "clipboard-write" }).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(text);
    }
  });
};
// Event Listeners
taxInput.addEventListener("blur", e => {
  updateInput(e.target.value, setTax, parseFloat);
});
tipInput.addEventListener("blur", e => {
  updateInput(e.target.value, setTip, parseFloat);
});
clearTipButton.addEventListener("click", () => {
  setTip(0);
});
torontoButton.addEventListener("click", () => {
  setTax(13);
});
sanFranButton.addEventListener("click", () => {
  setTax(8.5);
});
venmoButton.addEventListener("click", () => {
  writeToClipboard("@kevleung98"); // TODO: Snackbar
});
interacButton.addEventListener("click", () => {
  writeToClipboard("kevin.leung987@hotmail.com");
});
// Setup
resultField.innerHTML = "You owe: $6.33";
