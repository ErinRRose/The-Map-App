
function Google_signIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    let user = {
        name: profile.getName(), 
        email: profile.getEmail()
    };
    fetch('/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    }).then(resp => resp.json())
    .then(user => {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        refresh();
        getPref(user.id);
    })

    
}

function logout() {
    gapi.auth2.getAuthInstance().signOut()
    .then(()=> {
        sessionStorage.removeItem("currentUser");
        refresh();
    });
    
}