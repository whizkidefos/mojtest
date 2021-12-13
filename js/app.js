// let serviceData = document.querySelector('.service-data').value;
let chargeToPay = document.querySelector('.charge-to-pay');
let total = document.querySelector('.sumTotal');


document.querySelector('#data').addEventListener('keyup', function(e) {
    const toPay = parseFloat(this.value * ((2.4/100) + .20));
    let totalToPay = (this.value - 0) + toPay;
    total.innerHTML = `£${totalToPay.toFixed(2)}`;
    
    chargeToPay.innerHTML = `Total service charge for this transaction is: <b>£${toPay.toFixed(2)}</b>`;

});