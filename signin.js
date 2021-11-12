function validate()
{
    var username=document.getElementsByName("username").values;
    var password= document.getElementsByName("password").values;
    if(username==1234 && password==1234)
    {
        alert("login succesfully");
    
    }
    else{
        alert("login failed");
    }
}