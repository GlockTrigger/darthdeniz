function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="sanay"&& password=="sanay123")
{
    alert("login succesful");
    

    

}
else
{
    alert("login failed");
    window.location.replace('https://glocktrigger.github.io/darthdeniz/');
}


}