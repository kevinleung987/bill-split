// DOM Elements
const resultField = document.querySelector("#result");
const clearTipButton = document.querySelector("#clear-tip");
const torontoButton = document.querySelector("#toronto-button");
const sanFranButton = document.querySelector("#sanfran-button");
const taxInput = document.querySelector("#tax-input");
const tipInput = document.querySelector("#tip-input");
// State Variables
let taxValue = 13;
let tipValue = 12;
// Update Functions
const updateTaxInput = value => {
  taxValue = value;
  taxInput.value = taxValue;
};
const updateTipInput = value => {
  tipValue = value;
  tipInput.value = tipValue;
}
// Event Listeners
clearTipButton.addEventListener('click', () => {
  updateTipInput(0);
})
torontoButton.addEventListener("click", () => {
  updateTaxInput(13);
});
sanFranButton.addEventListener("click", () => {
  updateTaxInput(8.5);
});
// Setup
resultField.innerHTML = "You owe: $6.33";
