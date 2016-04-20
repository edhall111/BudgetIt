
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
function addMoney(){
  var theForm=document.forms["formBal"];
  var add= theForm.elements["amount"];

  total=total.value+ parseInt(add.value);
  console.log("add: "+add.value);
  console.log("tot: "+total.value);
  document.getElementById('bal').innerHTML = "Balance: $"+total.val;
}

/*function subMoney(){
  var sub= document.form.amount.value;
  total=total-sub;
  console.log("Sub: "+sub);
  console.log("tot: "+total);
  if(total<0){
    total=0;
  }
  document.getElementById('bal').innerHTML = "Balance: $"+total.val;
}*/
/*
function changeBal(){
  var choice= document.form.operation.value;
  console.log("choice: "+choice);
  if(choice.value=="add"){
    addMoney();
  }
  else{
    subMoney();
  }
}
*/
window.onload(document.getElementById('submit').addEventListener('submit', addMoney()));
