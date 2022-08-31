const container = document.querySelector(".container");

function handleDom() {
  fetch("/usercart")
  .then((res) => res.json())
  .then((result) => {
    console.log(result)
    if (result.length === 0) {
      container.textContent = '';
      const div = document.createElement('h1');
      div.textContent = 'no items';
      container.appendChild(div)
    } else {
      container.textContent = '';
      result.forEach(e => {
        const productsDiv = document.createElement('div');
        productsDiv.classList = 'product';
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = e.image_url;
        img.alt = e.title;
        imgDiv.appendChild(img);
        productsDiv.appendChild(imgDiv);
        const infoDiv = document.createElement('div');
        infoDiv.classList = 'info';
        const h2 = document.createElement('h2');
        h2.textContent = e.title;
        infoDiv.appendChild(h2);
        productsDiv.appendChild(infoDiv);
        const countDiv = document.createElement('div');
        countDiv.classList = 'count';
        const minus = document.createElement('i');
        minus.classList = 'fa-solid fa-minus';
        const plus = document.createElement('i');
        plus.classList = 'fa-solid fa-plus';
        const paraCount = document.createElement('p');
        paraCount.textContent = 1;
        infoDiv.appendChild(countDiv);
        countDiv.appendChild(minus)
        countDiv.appendChild(paraCount)
        countDiv.appendChild(plus);
        const removeIcon = document.createElement('i');
        removeIcon.classList = 'fa-solid fa-trash';
        removeIcon.setAttribute('id', e.id);
        infoDiv.appendChild(removeIcon);
        container.appendChild(productsDiv);

        plus.addEventListener('click', () => {
          paraCount.textContent = `${+paraCount.textContent + 1}`;
        });
        minus.addEventListener('click', () => {
          paraCount.textContent = `${+paraCount.textContent - 1}`;
        });

        removeIcon.addEventListener('click', deleteItem);
      });
    }
  });
}
handleDom()
function deleteItem(e) {
  const id = e.target.id;
  fetch(`/delete/product/cart/${id}`).then(data => data.json()).then(res => {
    if (res.message === 'Item was deleted') {
      handleDom()
    } else {
      console.log('error')
    }
  });
}