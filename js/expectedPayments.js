$(document).ready(function() {
    $("#submitBtn").on( "click", function() {
        var homePrice = $("#homePrice").val();
        var downPaymentPercent = $("#downPaymentPercentage").val()/100;
        var interestRate = $("#interestRate").val() / 100 / 12; //monthly interest rate
        var taxes = $("#taxes").val();
        var hoaFees = $("#hoaFees").val();
        var insurance = $("#insurance").val();

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

        $("#downPayment").text(Math.round(homePrice * downPaymentPercent));
        $("#monthlyPayment").text(parseInt(monthly) + parseInt(taxes/12) + parseInt(hoaFees) + parseInt(insurance));
    });

    $("#resetBtn").on( "click", function() {
        $("#homePrice").val("");
        $("#downPaymentPercentage").val("20");
        $("#interestRate").val("4.2");
        $("#taxes").val("");
        $("#hoaFees").val("");
        $("#insurance").val("90");
        $("#downPayment").text("0");
        $("#monthlyPayment").text("0");
    });

    function monthlyPayment(price, payments, interest) {
        return price * interest * (Math.pow(1 + interest, payments)) / (Math.pow(1 + interest, payments) - 1);
    }
});
