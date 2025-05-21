document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("affordForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const debts = parseFloat(document.getElementById("debts").value);
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const term = parseInt(document.getElementById("term").value);

    const monthlyRepayment = loanAmount / term;
    const disposable = income - expenses - debts;
    const resultBox = document.getElementById("result");

    if (disposable - monthlyRepayment >= 100) {
      resultBox.textContent = `✅ Affordable! Estimated Monthly Repayment: R${monthlyRepayment.toFixed(2)}`;
      resultBox.style.color = "green";
    } else {
      resultBox.textContent = `❌ Not Affordable. Disposable income too low.`;
      resultBox.style.color = "red";
    }
  });
});
