function compute()
{
    //read the input data
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    //calculate interst and year
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear() + parseInt(years);
    // print the result
    document.getElementById("result").innerHTML= 
    "If you deposit "+"<span style='background-color:yellow;'>" +principal+ "</span>" +
    ",\<br\>at an interest rate of "+"<span style='background-color:yellow;'>" +rate+ "%"+"</span>" +
    "\<br\>You will receive an amount of "+"<span style='background-color:yellow;'>"+interest+ "</span>" +
    ",\<br\>in the year "+"<span style='background-color:yellow;'>" +year+"</span>" +"\<br\>";
    // 
    
}
//read range slider value and displays it on the span  
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+ "%";

}

//check data
function checkData(){
    var amount = document.getElementById("principal");
    if (parseInt(amount.value)<=0){
        alert("Enter a positive number");
        amount.focus();
        return false;
    }
}


        