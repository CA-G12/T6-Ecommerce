const productList = document.getElementById('productList');
const logsignDiv = document.querySelector("header div");
console.log('fsfsdf')
function buyItem() {
  fetch();
}

const renderProducts = (data) => {
  data.forEach((element) => {
    const containerNode = document.createElement('div');
    containerNode.classList = 'container';
    const imgNode = document.createElement('img');
    imgNode.classList = 'product-image';
    imgNode.src = element.image_url;
    imgNode.alt = 'product image';
    containerNode.appendChild(imgNode);

    const productTitleNode = document.createElement('p');
    productTitleNode.classList = 'product-title';
    productTitleNode.innerText = element.title;
    containerNode.appendChild(productTitleNode);

    const productPriceNode = document.createElement('h3');
    productPriceNode.classList = 'product-price';
    productPriceNode.innerText = `${element.price}$`;
    containerNode.appendChild(productPriceNode);

    const btnBuyNode = document.createElement('button');
    btnBuyNode.classList = 'buy-product-btn';
    btnBuyNode.innerText = 'BUY';
    btnBuyNode.addEventListener('click', buyItem);
    containerNode.appendChild(btnBuyNode);

    productList.appendChild(containerNode);
  });
};

function handleDom() {
  console.log('hello')
  fetch('/products')
  .then((res) => res.json())
  .then(data => {
    if (data.message === 'not-login') {
      console.log(data)
      renderProducts(data);
    } else {
      logsignDiv.textContent = "";
      const logOut = document.createElement("a");
      logOut.href = "/logout";
      logOut.textContent = "LOGOUT";
      logsignDiv.appendChild(logOut);
      renderProducts(data);
    }
  })
  .catch((err) => console.error(err));
}

handleDom ()