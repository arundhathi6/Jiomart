document.getElementById("clickMe").addEventListener("click", gotoNextPage);
function gotoNextPage(){
  var phone = document.getElementById("enterPhoneNo").value;
  if((phone.length < 10)||(phone.length > 10)){
  alert("please enter your 10 digit mobile number");
  return;
}
else {
 window.location.href = "signup.html";
}
}
