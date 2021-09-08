function save() {
    chrome.storage.sync.set({
        proxyHost: document.getElementById("proxyHost").value, // proxyAddress
        proxyPort: document.getElementById("proxyPort").value,
    }, function () {
        var status = document.getElementById("status");
        status.textContent = "Saved"
        setTimeout(function () {
            status.textContent = "";
        }, 1000)
    })
}

function clear() {
    document.getElementById("proxyPort").value = "";
    document.getElementById("proxyHost").value = "";
}

function restore() {
    chrome.storage.sync.get({
            proxyHost: "",
            proxyPort: "",
        },
        function (items) {
            document.getElementById("proxyPort").value = items.proxyPort;
            document.getElementById("proxyHost").value = items.proxyHost;
        }
    )
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("save").addEventListener("click", save);
