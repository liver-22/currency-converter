const radioEurElement = document.querySelector(".js-radioEur");
const radioUsdElement = document.querySelector(".js-radioUsd");
const radioGbpElement = document.querySelector(".js-radioGbp");
const currencyTextElement = document.querySelector(".js-currencyText");
const currencyInputElement = document.querySelector(".js-currencyInput");
const formElement = document.querySelector(".js-form");
const inputPlnElement = document.querySelector(".js-inputPln");
const resultElement = document.querySelector(".js-result");
const rateEUR = 4.34;
const rateUSD = 4.02;
const rateGBP = 5.07;

radioEurElement.addEventListener("change", () => {
  if (radioEurElement.checked) {
    currencyTextElement.innerText = "EURO:";
    currencyInputElement.value = `1 EUR = ${rateEUR} PLN`;
  }
});

radioUsdElement.addEventListener("change", () => {
  if (radioUsdElement.checked) {
    currencyTextElement.innerText = "USD:";
    currencyInputElement.value = `1 USD = ${rateUSD} PLN`;
  }
});

radioGbpElement.addEventListener("change", () => {
  if (radioGbpElement.checked) {
    currencyTextElement.innerText = "GBP:";
    currencyInputElement.value = `1 GBP = ${rateGBP} PLN`;
  }
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (radioEurElement.checked) {
    resultElement.innerText = `${(inputPlnElement.value / rateEUR).toFixed(
      2
    )} EUR`;
  } else if (radioUsdElement.checked) {
    resultElement.innerText = `${(inputPlnElement.value / rateUSD).toFixed(
      2
    )} USD`;
  } else if (radioGbpElement.checked) {
    resultElement.innerText = `${(inputPlnElement.value / rateGBP).toFixed(
      2
    )} GBP`;
  }
});
