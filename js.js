$(document).ready(function() {
    $("#submitBtn").on( "click", function() {
        var homePrice = $("#homePrice").val();
        var downPayment = homePrice * .2;
        var closingCostTotal = Math.round(homePrice * ($("#totalClosingPercentage").val()/100));
        var buyerClosingTotal = Math.round(closingCostTotal * ($("#buyerClosingPercentage").val()/100));

        //todo.text() to set value
        $("#downPayment").text(downPayment);
        $("#closingCostPayment").text(buyerClosingTotal);
        $("#cashToClose").text(parseInt(downPayment) + parseInt(buyerClosingTotal));
    });

    $("#resetBtn").on( "click", function() {
        $("#homePrice").val("");
        $("#totalClosingPercentage").val("3");
        $("#buyerClosingPercentage").val("100");
        $("#downPayment").text("0");
        $("#closingCostPayment").text("0");
        $("#cashToClose").text("0");
    });
});
