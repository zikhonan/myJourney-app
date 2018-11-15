var webAuth, loginBtn;

window.addEventListener('load', function() {

    webAuth = new auth0.WebAuth({
        domain: '3123461.eu.auth0.com',
        clientID: 'ly140O3CwKr13wxzmHSGX1BWK4zi1cKI',
        responseType: 'token id_token',
        scope: 'openid',
        redirectUri: window.location.href
    });

    // buttons and event listeners
    loginBtn = document.getElementById('btn-login');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        webAuth.authorize();
    });

    handleAuthentication();

});

function setSession(authResult) {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
}

function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            setSession(authResult);
        } else if (err) {
            console.log(err);
            alert(
                'Error: ' + err.error + '. Check the console for further details.'
            );
        }
    });
}

function isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
}

if(isAuthenticated()){
    window.location.href = "map.html";
}