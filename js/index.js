console.log('Running...');

// Formula.
// [P * (100 - D)] / 100

// const originalPrice = 120;
// const discount = 18;

// console.log({
//   originalPrice,
//   discount,
//   percentagePriceWithDiscount,
//   priceWithDiscount
// });

// function calculatePriceWithDiscount(price, discount) {
//   const percentagePriceWithDiscount = 100 - discount;
//   const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

//   return priceWithDiscount;
// }

function calculatePriceWithDiscount() {
  const price = document.getElementById('price').value;
  const discount = document.getElementById('discount').value;
  const percentagePriceWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
  const result = document.getElementById('result');
  result.innerHTML = `<strong>The new price is: ${priceWithDiscount}</strong>`;
}