// DOM Elements
const resultField = document.querySelector("#result");
const torontoButton = document.querySelector("#toronto-button");
const sanFranButton = document.querySelector("#sanfran-button");
const taxInput = document.querySelector('#tax-input');
// State Variables
let taxValue = 13;
// Update Functions
const updateTaxInput = (value) => {
  taxValue = value;
  taxInput.value = taxValue;
}
// Event Listeners
torontoButton.addEventListener("click", () => {
  updateTaxInput(13)
});
sanFranButton.addEventListener("click", () => {
  updateTaxInput(8.5)
});
// Setup
resultField.innerHTML = "You owe: $6.33";
