# 🕵️ Challenge 1 — Basic HTTP (Correction)

## 🧩 Steps to solve the challenge

1. **Open the file in Wireshark**

   * Menu : `File > Open > introduction.pcapng`

2. **Apply the HTTP filter**

   ```
   http
   ```

3. **Accéder à la requête en clair**

   * Right click on the paquet
   * Click on Follow then HTTP Stream

4. **Read the informations**
    * POST /signin HTTP/1.1
    * Host: 127.0.0.1:5000
    * User-Agent: curl/7.64.1
    * Accept: */*
    * Content-type: application/json
    * Content-Length: 52

    * {"username":"Groot", "password":"Je_sappelle_Groot"} HTTP/1.0 200 OK
    * Content-Type: application/json
    * Content-Length: 50
    * Server: Werkzeug/0.15.1 Python/3.7.3
    * Date: Mon, 15 Apr 2019 16:06:15 GMT

    * {
    * "error": "login or password does not match"
    * }

5. **Conclusion**

   1) The user tried to connect to a website.
   2) His credentials are incorrect so he received an error message

---
