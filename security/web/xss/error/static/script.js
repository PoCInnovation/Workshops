function getFlag()
{
    var flag = "";
    var getFlg = new XMLHttpRequest();

    getFlg.open("GET", "/static/.k0u5927a9t0ca025c98g2187i7dc2e46c3da945cp", false);
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

function errorOcc() {
    var payload1 = '<script>alert("XSS")</script>';
    var payload2 = "<script>alert('XSS')</script>";

    alert(getFlag());
    // if (data.value === payload1 || data.value === payload2)
    //     alert(getFlag());
}