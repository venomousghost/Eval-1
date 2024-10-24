function upadatectNumber(product, price, isIncreasing) {
    const ctInput = document.getElementById(product + '-number');
    let ctNumber = parseInt(ctInput.value);
    
    if (isIncreasing) {
        ctNumber = ctNumber + 1;
    } else if (ctNumber > 0) {
        ctNumber = ctNumber - 1;
    }

    ctInput.value = ctNumber;
    const ctTotal = document.getElementById(product + '-total');
    ctTotal.innerText = ctNumber * price;
    calculateTotal();
}

function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const valoTotal = getInputvalue('valo') * 1219;
    const ctTotal = getInputvalue('ct') * 59;

    const subTotal = valoTotal + ctTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('ct-plus').addEventListener('click', function () {
    upadatectNumber('ct', 59, true);
});

document.getElementById('ct-minus').addEventListener('click', function () {
    upadatectNumber('ct', 59, false);
});

document.getElementById('valo-plus').addEventListener('click', function () {
    upadatectNumber('valo', 1219, true);
});

document.getElementById('valo-minus').addEventListener('click', function () {
    upadatectNumber('valo', 1219, false);
});

// const button = document.querySelector('#result');
let btn = document.getElementById('payBtn');
let pay = document.querySelector('.item')
btn.addEventListener('click', function () {
    const valoQuantity = getInputvalue('valo');
    const ctQuantity = getInputvalue('ct');


    const valoTotal = valoQuantity * 1219;
    const ctTotal = ctQuantity * 59;

    app(valoTotal, ctTotal, valoQuantity, ctQuantity);
});

function app(valoTotal, ctTotal, valoQuantity, ctQuantity) {

const ans = "Item Purchased:"
    document.getElementById('item-heading').innerText= ans;
    const ans1 = `Valorant = $${valoTotal}`
    document.getElementById('item-para').innerText= ans1;
    const ans2 = `Chained Together = $${ctTotal}`
    document.getElementById('item-para2').innerText= ans2;
    pay.style.zIndex = 2;
    pay.style.opacity = 1;
valoQuantity.value=1
ctQuantity.value=1
    setTimeout(()=>{
        pay.remove();
        const Thank = "Thank you for Purchasing!!! "
    document.getElementById('item-heading').innerText= ans;
    document.getElementById('item-para').innerText.remove()
    document.getElementById('item-para2').innerText.remove()
    },8000);

    // setTimeout(() => {
    //     if (valoQuantity == 0 && ctQuantity == 0) {
    //         alert("Purchase Failed");
    //     } else {
    //         alert("Thank You for Purchasing.");
    //     }
    // }, 100);


    
}




// let btn = document.getElementById('payBtn');



// let pay = document.querySelector('.item')
// btn.onclick = function () {
//     pay.style.zIndex = 2;
//     pay.style.opacity = 1;
// }
