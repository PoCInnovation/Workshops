var Proxy = function () {

        var storedData = {};

        var config = function (proxyAddress) {
            if (proxyAddress === undefined || proxyAddress === "") {
                return {
                    mode: "direct"
                };
            }
            return {
                mode: "fixed_servers",
                rules: {
                    proxyForHttp: {
                        host: proxyAddress.split(":")[0],
                        port: parseInt(proxyAddress.split(":")[1])
                    },
                    proxyForHttps: {
                        host: proxyAddress.split(":")[0],
                        port: parseInt(proxyAddress.split(":")[1])
                    },
                    bypassList: ["localhost,127.0.0.1"]
                }
            }
        };

        var credentialsToHeader = function (details, proxyUsername, proxyPassword) {
            if ((proxyUsername === undefined && proxyPassword === undefined) || (proxyUsername === "" && proxyPassword === "")) {
                return {requestHeaders: details.requestHeaders};
            }

            for (var header in details.requestHeaders) {
                if (header.name == 'Authorization') {
                    return {};
                }
            }

            details.requestHeaders.push({
                name: 'Authorization',
                value: 'Basic ' + btoa(proxyUsername + ':' + proxyPassword)
            });

            return {requestHeaders: details.requestHeaders};
        };

        var authCredentials = function (proxyUsername, proxyPassword) {
            return {
                authCredentials: {
                    username: proxyUsername,
                    password: proxyPassword
                }
            }
        };

        Proxy.prototype.setProxy = function (proxyAddress, proxyUsername, proxyPassword) {
            if (proxyAddress === undefined || proxyAddress.trim() === "") {
                chrome.proxy.settings.set({value: config(), scope: 'regular'});
            } else {
                chrome.proxy.settings.set(
                    {value: config(proxyAddress), scope: 'regular'},
                    function () {
                        if (proxyAddress !== "" && proxyUsername !== "") {
                            if (chrome.webRequest.onAuthRequired) {
                                chrome.webRequest.onAuthRequired.addListener(function (details) {
                                    return authCredentials(proxyUsername.trim(), proxyPassword.trim());
                                }, {urls: ['<all_urls>']}, ['blocking']);
                            } else {
                                chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
                                    return credentialsToHeader(details, proxyUsername.trim(), proxyPassword.trim());
                                }, {urls: ['<all_urls>']}, ['blocking', 'requestHeaders']);
                            }
                        }
                    }
                );
            }
            debugProxySettings(proxyUsername, proxyPassword);
        };

        var debugProxySettings = function (proxyUsername, proxyPassword) {
                chrome.proxy.settings.get(
                    {'incognito': false},
                    function (config) {
                        console.log("Proxy settings: " + JSON.stringify(config));
                        if (proxyUsername !== undefined) {
                            console.log("Auth settings: " + JSON.stringify(
                                {
                                    username: proxyUsername,
                                    password: proxyPassword
                                }
                            ));
                        } else {
                            console.log("Auth settings: " + JSON.stringify(
                                {
                                    username: storedData.proxyUsername,
                                    password: storedData.proxyPassword
                                }
                            ));
                        }
                    }
                );
            }
        ;

        var init = function () {
            if (Object.keys(storedData).length !== 0) {
                Proxy.prototype.setProxy(storedData.proxyAddress, storedData.proxyUsername, storedData.proxyPassword);
            }
            chrome.storage.onChanged.addListener(function (changes, namespace) {
                // for (k in changes)
                chrome.storage.sync.get(
                    null,
                    function (items) {
                        storedData = items
                        Proxy.prototype.setProxy(storedData.proxyAddress, storedData.proxyUsername, storedData.proxyPassword);
                    }
                );
            });
        };

        this.run = function () {
            chrome.storage.sync.get(
                null,
                function (items) {
                    storedData = items
                    init();
                }
            );
        };
    }
;


var ProxyByURL = function () {

    ProxyByURL.prototype = Object.create(Proxy.prototype);

    var parseQueryString = function (url) {
        var urlParams = {};
        url.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function ($0, $1, $2, $3) {
                urlParams[$1] = $3;
            }
        );

        return urlParams;
    };

    var removeProxyUrlParams = function (keys, sourceURL) {
        var rtn = sourceURL.split("?")[0],
            param,
            params_arr = [],
            queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
        if (queryString !== "") {
            params_arr = queryString.split("&");
            for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                param = params_arr[i].split("=")[0];
                for (var key = keys.length - 1; key >= 0; key -= 1) {
                    if (param === keys[key]) {
                        params_arr.splice(i, 1);
                    }
                }
            }
            if (params_arr.length !== 0) {
                rtn = rtn + "?" + params_arr.join("&");
            }
        }
        return rtn;
    };

    /**
     * "proxyAddress", "proxyUsername", "proxyPassword" - to pass proxy parameters
     */
    this.run = function () {
        var url = undefined;
        var tabId = undefined;
        var proxyParams = ["proxyAddress", "proxyUsername", "proxyPassword"];

        chrome.webRequest.onBeforeRequest.addListener(function (details) {
            if (details.frameId === 0 && details.type === "main_frame") {
                url = details.url;
                tabId = details.tabId;
                var urlParams = parseQueryString(url);
                if (urlParams !== undefined && urlParams.proxyAddress !== undefined) {
                    ProxyByURL.prototype.setProxy(urlParams.proxyAddress, urlParams.proxyUsername, urlParams.proxyPassword);
                    console.log("URL: " + url);
                    return {redirectUrl: removeProxyUrlParams(proxyParams, url)};
                }

            }
        }, {urls: ['<all_urls>']}, ['blocking']);

        chrome.tabs.onUpdated.addListener(function (tab, info) {
            if (tab === tabId && info.status === "complete") {
                ProxyByURL.prototype.setProxy();
                console.log("Completed loading URL: " + url);
            }
        });
    };
};

new Proxy().run();
new ProxyByURL().run();
