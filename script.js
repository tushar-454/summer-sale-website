// product click and add price name in cart
const products = document.querySelectorAll('.product');
let serial = 1;
// get total price
const totalPriceEle = document.getElementById('totalPrice');
// apply and purchase button veriable
const applyBtn = document.getElementById('applyBtn');
const purchaseBtn = document.querySelector('.purchaseBtn');

for (const product of products) {
  product.addEventListener('click', function () {
    //get product price
    const getPriceStr = product
      .querySelector('.productPrice')
      .innerText.split(' ')[0];
    const productPrice = parseFloat(getPriceStr);
    //set product price in cart one by one when use click
    const totalPriceStr = totalPriceEle.innerText;
    const totalPrice = parseFloat(totalPriceStr);
    totalPriceEle.innerText = (totalPrice + productPrice).toFixed(2);
    // get product name
    const listBox = document.getElementById('listBox');
    const productName = product.querySelector('.productName').innerText;
    listBox.innerHTML += `<li>${serial}. ${productName}</li>`;
    serial++;
    // apply and purchase button disabled enable condition
    if (totalPrice > 200) {
      applyBtn.classList.remove('disabled');
      applyBtn.removeAttribute('disabled');
      couponInput.removeAttribute('disabled');
    } else {
      applyBtn.classList.add('disabled');
    }
    if (totalPrice > 0) {
      purchaseBtn.classList.remove('disabled');
      purchaseBtn.removeAttribute('disabled');
    } else {
      purchaseBtn.classList.add('disabled');
    }
  });
}

const couponBox = document.querySelector('.couponBox');
const couponInput = document.getElementById('couponInput');
const error = document.querySelector('.error');
// apply button click and discount calc
applyBtn.addEventListener('click', function () {
  if (couponInput.value === '') {
    error.innerText = 'Give a Coupon!';
    return;
  } else if (couponInput.value !== 'SELL200') {
    error.innerText = 'Wrong Coupon!';
    return;
  } else {
    error.innerText = '';
    const totalPriceStr = totalPriceEle.innerText;
    const totalPrice = parseFloat(totalPriceStr);
    const discountEle = document.getElementById('discountShow');
    const finalTotal = document.getElementById('finalTotal');
    const discountTk = (totalPrice * 20) / 100;
    discountEle.innerText = discountTk.toFixed(2);
    finalTotal.innerText = (totalPrice - discountTk).toFixed(2);
    couponInput.innerText = '';
    applyBtn.classList.add('disabled');
    applyBtn.setAttribute('disabled', 'ture');
    couponInput.setAttribute('disabled', 'true');
  }
});

// apply and purchase button disabled class by default added
applyBtn.classList.add('disabled');
purchaseBtn.classList.add('disabled');

// click go to home then clean all data
const gotoHome = document.getElementById('gotoHome');
gotoHome.addEventListener('click', function () {
  window.location.href = 'index.html';
});
