const radioEurElement = document.querySelector(".js-radioEur");
const radioUsdElement = document.querySelector(".js-radioUsd");
const radioGbpElement = document.querySelector(".js-radioGbp");
const currencyTextElement = document.querySelector(".js-currencyText");
const currencyInputElement = document.querySelector(".js-currencyInput");
const formElement = document.querySelector(".js-form");
const inputPlnElement = document.querySelector(".js-inputPln");
const resultElement = document.querySelector(".js-result");

radioEurElement.addEventListener("change", () => {
  if (radioEurElement.checked) {
    currencyTextElement.innerText = "EURO:";
    currencyInputElement.value = "1 EUR = 4.34 PLN";
  }
});

radioUsdElement.addEventListener("change", () => {
  if (radioUsdElement.checked) {
    currencyTextElement.innerText = "USD:";
    currencyInputElement.value = "1 USD = 4.02 PLN";
  }
});

radioGbpElement.addEventListener("change", () => {
  if (radioGbpElement.checked) {
    currencyTextElement.innerText = "GBP:";
    currencyInputElement.value = "1 GBP = 5.07 PLN";
  }
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (radioEurElement.checked) {
    resultElement.innerText = `${(inputPlnElement.value / 4.34).toFixed(
      2
    )} EUR`;
  } else if (radioUsdElement.checked) {
    resultElement.innerText = `${(inputPlnElement.value / 4.02).toFixed(
      2
    )} USD`;
  } else if (radioGbpElement.checked) {
    resultElement.innerText = `${(inputPlnElement.value / 5.07).toFixed(
      2
    )} GBP`;
  }
});
