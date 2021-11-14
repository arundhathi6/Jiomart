document.getElementById("clickMe").addEventListener("click", gotoNextPage);
var userData  = JSON.parse(localStorage.getItem("userdata"))||[];

function gotoNextPage(){
    var phone = document.getElementById("enterPhoneNo").value;
    userData.map(function(el){
      localStorage.setItem("phone", JSON.stringify(phone)); 

        if((phone.length < 10)||(phone.length > 10)){
        alert("please enter your 10 digit mobile number");
        console.log(userData);
        return;
      
      }
      else if(el.MobileNumber == phone) {
       window.location.href = "fresh fruits.html";
       return;
      }
      else if(el.MobileNumber != phone){
        window.location.href = "signup.html";
        return;


      }

    })
 
}