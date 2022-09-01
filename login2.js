function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
    if(username=="sanay"&& password=="sanay123")
    {
        alert("login succesful");
        window.open("https://glocktrigger.github.io/darthdeniz/login.html?")   

    

    }
    else
    {
        alert("login failed");
        window.open("https://glocktrigger.github.io/darthdeniz/index.html?")
    }


}