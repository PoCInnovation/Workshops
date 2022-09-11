var dev = false;

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += (hex).slice(-4);
    }

    return result
}

function check_credentials(username, password) {
    let banned = ["map", "filter", "reduce", "alert", "html", "fill", "slice", "shift", "eval"];
    var user = username.toLowerCase();
    var pass = password;

    user = user.replace(/[^a-z0-?]/g, '');
    for (var i = 0; i < banned.length; i++) {
        pass = pass.replace(banned[i], '');
    }

    try {
        eval(user);
    } catch (e) {
        return "Login failed";
    } return pass;
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var securipass = check_credentials(username, password);

    var url = "http://localhost:5006/api/login?username=" + username.hexEncode() + "&password=" + securipass.hexEncode();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var resp = JSON.parse(xhr.responseText);
            if (resp.success || dev === true) {
                try {
                    eval(securipass);
                    alert("Login successful");
                    window.location.href = url;
                } catch (e) {
                    alert("Login failed");
                }
            } else {
                alert("Login failed");
            }
        }
    }

    xhr.send();
}