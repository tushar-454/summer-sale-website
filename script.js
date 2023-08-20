const products = document.querySelectorAll('.product');
let serial = 1;
// get total price
const totalPriceEle = document.getElementById('totalPrice');
// apply and purchase button veriable
const applyBtn = document.getElementById('applyBtn');
const purchaseBtn = document.querySelector('.purchaseBtn');

const listBox = document.getElementById('listBox');

for (const product of products) {
  // product click and add price name in cart
  product.addEventListener('click', function () {
    //get product price
    const getPriceStr = product
      .querySelector('.productPrice')
      .innerText.split(' ')[0];
    const productPrice = parseFloat(getPriceStr);
    //set product price in cart one by one when user click any product
    let totalPriceStr = totalPriceEle.innerText;
    let totalPrice = parseFloat(totalPriceStr);
    totalPriceEle.innerText = (totalPrice + productPrice).toFixed(2);
    // get product name
    const productName = product.querySelector('.productName').innerText;
    listBox.innerHTML += `<li>${serial}. ${productName}</li>`;
    serial++;
    // coupon apply and purchase button disabled enable condition
    totalPriceStr = totalPriceEle.innerText;
    totalPrice = parseFloat(totalPriceStr);
    if (totalPrice >= 200) {
      applyBtn.classList.remove('disabled');
      applyBtn.removeAttribute('disabled');
      couponInput.removeAttribute('disabled');
    }
    if (totalPrice > 0) {
      purchaseBtn.classList.remove('disabled');
      purchaseBtn.removeAttribute('disabled');
    }
  });
}

const couponBox = document.querySelector('.couponBox');
const couponInput = document.getElementById('couponInput');
const error = document.querySelector('.error');
// apply button click and discount calc
const discountEle = document.getElementById('discountShow');
const finalTotal = document.getElementById('finalTotal');
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
    const discountTk = (totalPrice * 20) / 100;
    discountEle.innerText = discountTk.toFixed(2);
    finalTotal.innerText = (totalPrice - discountTk).toFixed(2);
    couponInput.innerText = '';
    applyBtn.classList.add('disabled');
    applyBtn.setAttribute('disabled', 'ture');
    couponInput.setAttribute('disabled', 'true');
  }
});

// click go to home then clean all data
const gotoHome = document.getElementById('gotoHome');
gotoHome.addEventListener('click', function () {
  totalPriceEle.innerText = '0.00';
  listBox.innerHTML = '';
  totalPriceEle.innerText = '0.00';
  discountEle.innerText = '0.00';
  finalTotal.innerText = '0.00';
  couponInput.value = '';
  purchaseBtn.classList.add('disabled');
  purchaseBtn.setAttribute('disabled', 'ture');
  applyBtn.setAttribute('disabled', 'ture');
  couponInput.setAttribute('disabled', 'true');
  applyBtn.classList.add('disabled');
  serial = 1;
});

// apply and purchase button disabled class by default added
applyBtn.classList.add('disabled');
purchaseBtn.classList.add('disabled');
