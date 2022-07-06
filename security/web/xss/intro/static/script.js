function getFlag()
{
    var flag = "";
    var getFlg = new XMLHttpRequest();

    getFlg.open("GET", "/static/.f1d5027a3a0ca025c9832187a7dc2e46c3da975cb", false);
    getFlg.onreadystatechange = function ()
    {
        if(getFlg.readyState === XMLHttpRequest.DONE)
        {
            if(getFlg.status === 200 || getFlg.status == 0)
                flag = getFlg.responseText;
        }
    }
    getFlg.send(null);
    return flag;
}

function sendRequest(data) {
    var payload1 = '<script>alert("XSS")</script>';
    var payload2 = "<script>alert('XSS')</script>";

    if (data.value === payload1 || data.value === payload2)
        alert(getFlag());
}