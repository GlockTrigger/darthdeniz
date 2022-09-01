function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
    if(username=="sanay"&& password=="sanay123")
    {
        alert("login succesful");
        window.location.replace("https://glocktrigger.github.io/darthdeniz/login.html");

    

    }
    else
    {
        alert("login failed");
        window.location.replace("https://glocktrigger.github.io/darthdeniz/");
    }


}