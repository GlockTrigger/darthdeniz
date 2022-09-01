function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
    if(username=="sanay"&& password=="sanay123")
    {
        alert("login succesful");
        location.replace("https://glocktrigger.github.io/darthdeniz/login.html?")   

    

    }
    else
    {
        alert("login failed");
        location.replace("https://glocktrigger.github.io/darthdeniz/index.html?")
    }


}