//Function to Hide Popup
function div_hide(){
  document.getElementById('abc').style.display = "none";
}
//Function To Display Popup
function div_show() {
  console.log("Show Form");
  document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide2(){
  document.getElementById('billAdd').style.display = "none";
}
//Function To Display Popup
function div_show2() {
  console.log("Show Form");
  document.getElementById('billAdd').style.display = "block";
}
//function to add money
var total=0;
function changeBal(){
  var add = document.getElementById('amount').value;

  total=parseFloat(total.value)+ parseFloat(add.value);
  console.log("add: "+add.value);
  console.log("tot: "+total.value);
  document.getElementById('bal').innerHTML = "Balance: $"+total;
}
//function to add bills
function billCreate(){
    $("#bill").append("<div style='width: 200px; height: 300px; background-color: black;'></div>");
    //code to add billName, date due, link, description, etc to database
}
//bill overview
function billLook(){
  //when expand button on bill is clicked, pull up div showing selected bill's data
}
//edit bill
function billEdit(){

}
//pay bills
function billPay(){

}
//function to delete bills
function billDelete(){

}
