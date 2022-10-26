function BillCalculation(){
    var Bill_Amount = document.getElementById("bill_amount").value;
    var Discount = document.getElementById("discount").value;
    var k = (Discount/100)*Bill_Amount;
    k = Math.floor(k);
    var total=Bill_Amount-k;
    alert("total Amount is " +total);
}

document.getElementById("button").addEventListener("click", function(){
    BillCalculation();
});
