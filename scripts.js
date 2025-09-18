const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonDiscount = document.querySelector('.discount');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilter = document.querySelector('.filter');

function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


function ShowAll(productsArray) {
    let myLi = '';

    productsArray.forEach((product) => {
        myLi += `
       <li>
            <img src="${product.src}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `;
    });

    list.innerHTML = myLi;



}

function Discount() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9

    }));

    ShowAll(newPrice);
}

function sumAllItems() {
    const total = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

    list.innerHTML = `
        <li>
            <p style="font-size: 20px"> O Valor total dos iténs é de <span style="font-weight: bold; color: green"> ${formatCurrency(total)} </span> </p>
        </li>
    `
}


function veganItems() {
    const veganFilter = menuOptions.filter((product) => product.vegan);
    ShowAll(veganFilter);
}

buttonShowAll.addEventListener('click', () => ShowAll(menuOptions));
buttonDiscount.addEventListener('click', Discount);
buttonSumAll.addEventListener('click', sumAllItems);
buttonFilter.addEventListener('click', veganItems);
