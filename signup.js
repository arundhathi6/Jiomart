var phonenumber = JSON.parse(localStorage.getItem("phone"));
document.getElementById("displayMobile").textContent=phonenumber;
document.getElementById("submit").addEventListener("click", submIt);
var userArr=JSON.parse(localStorage.getItem("userdata")) || [];
function submIt(){
var fname=document.getElementById("fname").value
var lname=document.getElementById("lname").value
var email=document.getElementById("email").value
var pass=document.getElementById("pass").value
var pass2=document.getElementById("pass2").value
var number = JSON.parse(localStorage.getItem("phone"));
// console.log(email,pass,user,mobile)
var userdre={
firstName:fname,
lastName:lname,
emailAdderess:email,
Password:pass,
PasswordCheck:pass2,
MobileNumber:number,
};
var found = false;
if(fname.length==0 || lname.length==0 || email.length==0 || pass.length==0 ||pass2.length==0){
    alert("incorrect credentials");
    found=true;
}
if(!found){
    userArr.push(userdre);

localStorage.setItem("userdata",JSON.stringify(userArr));
window.location.href="mycart.html"
}

}
