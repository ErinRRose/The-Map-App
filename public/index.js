
//set current user global and show/hide ui
 var currentUser = null;
 
 function addClass(selector, className) {
    let els = document.querySelectorAll(selector);
    els.forEach(e => {
        e.classList.add(className);
    }
        )
}
function removeClass(selector, className) {
    let els = document.querySelectorAll(selector);
    els.forEach(e => {
        e.classList.remove(className);
    }
        )
}

function hasClass(selector, className) {
    let result = false
    let els = document.querySelectorAll(selector);
    els.forEach(e => {
        if (e.classList.contains(className)) result = true;
    }
        )
        return result;
}

function refresh() {
    currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    let logIn = document.getElementById('login');
    let logOut = document.getElementById('logout');
    let countryContainer = document.getElementById('countries-container');
    if(currentUser == null )
    {
        //$("#login").show();
        logIn.style.display = 'block';
        //$("#logout").hide();
        logOut.style.display = 'none';
        //$("#countries-container").hide();
        countryContainer.style.display = 'none';
    }
    else {
        //$("#login").hide();
        logIn.style.display = 'none';
        //$("#logout").show();
        logOut.style.display = 'block';
        //$("#countries-container").show();
        countryContainer.style.display = 'block';
        Country.fetchAll();
    }
}
 refresh();

var preferenceList = null;

