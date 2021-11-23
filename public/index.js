
//set current user global and show/hide ui
 var currentUser = null;
function refresh() {
currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
if(currentUser == null )
{
    $("#login").show();
    $("#logout").hide();
    $("#countries-container").hide();
}
else {
    $("#login").hide();
    $("#logout").show();
    $("#countries-container").show();
    Country.fetchAll();
}
}
 refresh();

var preferenceList = null;

