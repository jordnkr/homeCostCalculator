$(document).ready(function() {
    $("#submitBtn").on("click", function() {
        var homePrice = $("#homePrice").val();
        var downPayment = homePrice * ($("#downPaymentPercentage").val()/100);
        var closingCostTotal = Math.round(homePrice * ($("#totalClosingPercentage").val()/100));
        var buyerClosingTotal = Math.round(closingCostTotal * ($("#buyerClosingPercentage").val()/100));

        $("#downPayment").text(downPayment);
        $("#closingCostPayment").text(buyerClosingTotal);
        $("#cashToClose").text(parseInt(downPayment) + parseInt(buyerClosingTotal));
    });

    $("#resetBtn").on("click", function() {
        $("#homePrice").val("");
        $("#downPaymentPercentage").val("20");
        $("#totalClosingPercentage").val("3.0");
        $("#buyerClosingPercentage").val("100");
        $("#downPayment").text("0");
        $("#closingCostPayment").text("0");
        $("#cashToClose").text("0");
    });
});
