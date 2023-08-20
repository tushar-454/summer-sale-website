// product click and add price name in cart
const products = document.querySelectorAll('.product');
let serial = 1;

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
    const totalPriceEle = document.getElementById('totalPrice');
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

// apply and purchase button disabled class by default added
applyBtn.classList.add('disabled');
purchaseBtn.classList.add('disabled');

// click go to home then clean all data
const gotoHome = document.getElementById('gotoHome');
gotoHome.addEventListener('click', function () {
  window.location.href = 'index.html';
});
