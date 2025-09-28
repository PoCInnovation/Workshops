# ✅ Correction — Challenge 3 : HTTPS protects credentials

## 📖 What you observe
The filter :
```wireshark
http.request.method == "POST"
```
…doesn't return anything.

It's OK : the capture contains **HTTPS (TLS)**.
The HTTP content (request, credentials) is **encrypted** → invisible in Wireshark.

---

## 🔍 Verification
1. Apply the filter :
   ```wireshark
   tls
   ```
2. You must see :
   - `Client Hello` (the client proposes encryption)
   - `Server Hello` + certificate
   - then **Application Data** packets (encrypted traffic)

No clear trace of `username` or `password`.

---

## 🎯 Conclusion
- Without HTTPS (HTTP) : everything is transmitted in plain text (logins, cookies, passwords).
- With HTTPS (TLS) : before communicating in plain text, the client and server perform a handshake :
> - The client says: “Hi, I can speak AES, RSA, etc.”
> - The server replies: “OK, let's use AES. Here's my certificate to prove who I am.”

Together, they generate a secret session key.

Then, all exchanged data (logins, forms, web pages) is encrypted with this key.

Result : even if you capture the packets with Wireshark, all you see is a fog of data.

👉 TLS = a padlock that transforms HTTP into a secure version (HTTPS).

## 📝 Educational summary
- Challenge 1 → Plain HTTP (username and password visible).
- Challenge 2 → HTTP Basic Auth (Base64, easy to decode).
- Challenge 3 → HTTPS (TLS encrypts everything, username and password protected).
