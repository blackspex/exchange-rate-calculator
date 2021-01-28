const currency_1 = document.getElementById('currency-one');
const amount_1 = document.getElementById('amount-one');
const currencey_2 = document.getElementById('currency-two');
const amount_2 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
function calculate() {
  const currency_one = currency_1.value;
  const currency_two = currencey_2.value;

  fetch(`https://v6.exchangerate-api.com/v6/c70819d0ec8d7cd685c7baeb/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
  
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amount_2.value = (amount_1.value * rate).toFixed(2);
    });
}
currency_1.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
currencey_2.addEventListener('change', calculate);
amount_2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currency_1.value;
  currency_1.value = currencey_2.value;
  currencey_2.value = temp;
  calculate();
});

calculate();