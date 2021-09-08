function save() {
    chrome.storage.sync.set({
        proxyAddress: document.getElementById("proxyAddress").value,
        proxyUsername: document.getElementById("proxyUsername").value,
        proxyPassword: document.getElementById("proxyPassword").value
    }, function () {
        var status = document.getElementById("status");
        status.textContent = "Saved"
        setTimeout(function () {
            status.textContent = "";
        }, 1000)
    })
}

function clear() {
    document.getElementById("proxyAddress").value = "";
    document.getElementById("proxyUsername").value = "";
    document.getElementById("proxyPassword").value = "";
}

function restore() {
    chrome.storage.sync.get({
            proxyAddress: "",
            proxyUsername: "",
            proxyPassword: ""
        },
        function (items) {
            document.getElementById("proxyAddress").value = items.proxyAddress;
            document.getElementById("proxyUsername").value = items.proxyUsername;
            document.getElementById("proxyPassword").value = items.proxyPassword;
        }
    )
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("save").addEventListener("click", save);
