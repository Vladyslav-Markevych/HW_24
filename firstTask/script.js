function createCurrencyConverter(rate) {
  function toLocalCurrency(usd) {
    let result = rate * parseFloat(usd);
    result = "€" + result.toFixed(2);
    return result;
  }

  function toForeignCurrency(eur) {
    let result = parseFloat(eur) / rate;
    result = "$" + result.toFixed(2);
    return result;
  }

  return { toLocalCurrency, toForeignCurrency };
}

const converter = createCurrencyConverter(0.89); // Уявімо, 1 USD = 0.89 EUR

console.log(converter.toLocalCurrency("100 USD")); // Показує "€89"
console.log(converter.toForeignCurrency("89 EUR")); // Показує "$100"
