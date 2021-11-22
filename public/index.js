
//set current user global and show/hide ui
var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
if(currentUser == null )
{
    $("#login-container").show();
}
else {
    $("#countries-container").show();
    Country.fetchAll();
}

 
var preferenceList = null