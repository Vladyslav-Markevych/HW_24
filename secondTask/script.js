"use strict";
function createInvestmentAccount(initialAmount, annualInterestRate) {
  let profit;
  function deposit(amount) {
    initialAmount += amount;
    return initialAmount;
  }
  function withdraw(amount) {
    initialAmount -= amount;

    return initialAmount;
  }

  function calculateProfit(years) {
    profit =
      initialAmount * Math.pow(1 + annualInterestRate / 100, years) -
      initialAmount;
    return profit.toFixed(2);
  }

  function getAccountInfo() {
    return `Баланс: $${initialAmount}
Процентна ставка: ${annualInterestRate}%
Прибуток: $${profit.toFixed(2)}`;
  }

  return { deposit, withdraw, calculateProfit, getAccountInfo };
}

const myAccount = createInvestmentAccount(1000, 5);
myAccount.deposit(500);
console.log(myAccount.calculateProfit(1)); // Розрахунок прибутку за 1 рік
console.log(myAccount.getAccountInfo());
