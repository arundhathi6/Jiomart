

document.getElementById("submit").addEventListener("click", submIt);
var userArr=JSON.parse(localStorage.getItem("userdata")) || [];
function submIt(){
var fname=document.getElementById("fname").value
var lname=document.getElementById("lname").value
var email=document.getElementById("email").value
var pass=document.getElementById("pass").value
var pass2=document.getElementById("pass2").value
// console.log(email,pass,user,mobile)
var userdre={
firstName:fname,
lastName:lname,
emailAdderess:email,
Password:pass,
PasswordCheck:pass2
};
//console.log(userdre);
userArr.push(userdre);
//console.log(userArr);
localStorage.setItem("userdata",JSON.stringify(userArr));
//console.log("userArr:",userArr);
window.location.href="mycart.html"
}
// console.log(userArr);