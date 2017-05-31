var submitBtn = document.getElementById('submitBtn');
var resetBtn = document.getElementById('resetBtn');
var homePriceInput = document.getElementById('homePrice');
var downPaymentPercentageInput = document.getElementById('downPaymentPercentage');
var interestRateInput = document.getElementById('interestRate');
var taxesInput = document.getElementById('taxes');
var hoaFeesInput = document.getElementById('hoaFees');
var insuranceInput = document.getElementById('insurance');
var downPaymentOutput = document.getElementById('downPayment');
var monthlyPaymentOutput = document.getElementById('monthlyPayment');

submitBtn.addEventListener('click', function() {
    var homePrice = homePriceInput.value;
    var downPaymentPercent = downPaymentPercentageInput.value/100;
    var interestRate = interestRateInput.value / 100 / 12; //monthly interest rate
    var taxes = taxesInput.value;
    var hoaFees = hoaFeesInput.value;
    var insurance = (insuranceInput.value / 100 / 12) * homePrice;

    if (interestRate == "") {
        interestRate = 0;
    }
    if (taxes == "") {
        taxes = 0;
    }
    if (hoaFees == "") {
        hoaFees = 0;
    }
    if (insurance == "") {
        insurance = 0;
    }

    var monthly = Math.round(monthlyPayment(homePrice - (homePrice * downPaymentPercent), 360, interestRate));

    downPaymentOutput.textContent = Math.round(homePrice * downPaymentPercent);
    monthlyPaymentOutput.textContent = parseInt(monthly) + parseInt(taxes/12) + parseInt(hoaFees) + parseInt(insurance);
});

resetBtn.addEventListener('click', function() {
    homePriceInput.value = "";
    downPaymentPercentageInput.value = "20";
    interestRateInput.value = "4.2";
    taxesInput.value = "";
    hoaFeesInput.value = "";
    insuranceInput.value = "0.54";
    downPaymentOutput.textContent = "0";
    monthlyPaymentOutput.textContent = "0";
});

function monthlyPayment(price, payments, interest) {
    return price * interest * (Math.pow(1 + interest, payments)) / (Math.pow(1 + interest, payments) - 1);
}
