proxy-chrome-extension
----------------------

This is the Google Chrome plugin to setup a proxy setting within two cases:
- first one - is a classic way to set a proxy with UI:
    ![UI option example](https://image.prntscr.com/image/B5QUAbVlT4Ota44nLe8p-w.png)

- dynamic setup with an URL parameters("proxyAddress", "proxyUsername", "proxyPassword"):
    ```
    https://www.hashemian.com/whoami/?proxyAddress=example.com:8080&proxyUsername=USERNAME&proxyPassword=p2SSW0RD
    ```
    In the case when page going to be loaded, proxy setting will be reset to defaults(or to manual settings if installed)
