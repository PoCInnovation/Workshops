function getPassword()
{
    var complete_password = "";
    var getPass = new XMLHttpRequest();
    getPass.open("GET", "/static/.passwd", false);
    getPass.onreadystatechange = function ()
    {
        if(getPass.readyState === XMLHttpRequest.DONE)
        {
            if(getPass.status === 200 || getPass.status == 0)
                complete_password = getPass.responseText;
        }
    }
    getPass.send(null);
    return complete_password;
}

function printFlag(password)
{
    if (password === getPassword()) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "/static/.calling", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === XMLHttpRequest.DONE)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    } else {
        alert("Wrong password");
    }
}