const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const customInput = document.querySelector("#custom");
const inputs = document.querySelectorAll("input");
const btns = document.querySelectorAll("button");
const tipAmount = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-amount");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
let tipPercentage;
let customTip;
let billCharged;
let numberOfPeople;

for (const input of inputs) {
  input.addEventListener("change", (e) => {
    if (e.target.id === "bill-input") {
      billCharged = e.target.value;
    } else if (e.target.id === "people-input") {
      numberOfPeople = e.target.value;
    } else if (e.target.id === "custom") {
      customTip = e.target.value;
    }
  });
}

for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "five") {
      tipPercentage = 5;
    } else if (e.target.id === "ten") {
      tipPercentage = 10;
    } else if (e.target.id === "fifteen") {
      tipPercentage = 15;
    } else if (e.target.id === "twenty-five") {
      tipPercentage = 25;
    } else if (e.target.id === "fifty") {
      tipPercentage = 50;
    }
  });
}

submitBtn.addEventListener("click", (cost, numPeople, percentage) => {
  cost = billCharged;
  numPeople = numberOfPeople;

  if (tipPercentage) {
    percentage = tipPercentage;
  } else {
    percentage = customTip;
  }
  const tip = ((cost / numPeople) * percentage) / 100;
  const total = billCharged / numberOfPeople + tip;

  if (billCharged && numberOfPeople && tipPercentage) {
    tipAmount.textContent = `$${tip.toFixed(2)}`;
    totalPerPerson.textContent = `$${total.toFixed(2)}`;
  }
});

resetBtn.addEventListener("click", () => {
  billCharged.value = 0;
  numberOfPeople = 0;
  customInput.value = 0;
  tipPercentage = 0;
  tipAmount.textContent = "$0.00";
  totalPerPerson.textContent = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
});
