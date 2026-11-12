// Get the elements from the page
const form = document.getElementById("tax-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  // Replace prompt() / confirm() with form values
  let grossSalary = Number(document.getElementById("salary").value);
  let isMarried = document.getElementById("married").checked;
  let numberOfChild = Number(document.getElementById("children").value);

  let baseSalary = grossSalary;
  let tax = 0;

  if (numberOfChild > 9) {
    numberOfChild = 9;
  }

  if (isMarried) {
    baseSalary -= 150000;
  }

  if (numberOfChild > 0) {
    baseSalary -= numberOfChild * 150000;
  }

  // Your tax brackets
  if (baseSalary > 12500000) {
    tax = (baseSalary * 20) / 100 - 1225000;
  } else if (baseSalary > 8500000) {
    tax = (baseSalary * 15) / 100 - 600000;
  } else if (baseSalary > 2000000) {
    tax = (baseSalary * 10) / 100 - 175000;
  } else if (baseSalary > 1500000) {
    tax = (baseSalary * 5) / 100 - 75000;
  } else {
    tax = 0; // low salaries no longer give negative tax
  }

  // Replace alert() with writing text directly into the page
  document.getElementById("out-gross").textContent = grossSalary.toLocaleString();
  document.getElementById("out-tax").textContent = tax.toLocaleString();
  document.getElementById("out-net").textContent = (grossSalary - tax).toLocaleString();

  result.classList.remove("hidden"); // show the result box
});