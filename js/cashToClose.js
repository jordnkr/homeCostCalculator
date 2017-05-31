var submitBtn = document.getElementById('submitBtn');
var resetBtn = document.getElementById('resetBtn');
var homePriceInput = document.getElementById('homePrice');
var downPaymentPercentageInput = document.getElementById('downPaymentPercentage');
var totalClosingPercentageInput = document.getElementById('totalClosingPercentage');
var buyerClosingPercentageInput = document.getElementById('buyerClosingPercentage');
var downPaymentOutput = document.getElementById('downPayment');
var closingCostOutput = document.getElementById('closingCostPayment');
var totalCashToCloseOutput = document.getElementById('cashToClose');

submitBtn.addEventListener('click', function() {
    var homePrice = homePriceInput.value;
    var downPayment = homePrice * (downPaymentPercentageInput.value/100);
    var closingCostTotal = Math.round(homePrice * (totalClosingPercentageInput.value/100));
    var buyerClosingTotal = Math.round(closingCostTotal * (buyerClosingPercentageInput.value/100));

    downPaymentOutput.textContent = downPayment;
    closingCostOutput.textContent = buyerClosingTotal;
    totalCashToCloseOutput.textContent = parseInt(downPayment) + parseInt(buyerClosingTotal);
});

resetBtn.addEventListener('click', function() {
    homePriceInput.value = "";
    downPaymentPercentageInput.value = "20";
    totalClosingPercentageInput.value = "3.0";
    buyerClosingPercentageInput.value = "100";
    downPaymentOutput.textContent = "0";
    closingCostOutput.textContent = "0";
    totalCashToCloseOutput.textContent = "0";
});
