# ✅ Correction — Challenge 2 : Basic Auth Exposed

## 📖 What you observe
In the HTTP request, there is a header:
```
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

This is **authentification HTTP Basic**.
The credentials are not encrypted, only **Base64 encoded**.

---

## 🧩 Steps to solve the challenges
1. Use this filter in Wireshark :
   ```wireshark
   http.authorization
   ```
2. Identify the line :
   ```
   Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
   ```
3. Decode the channel `dXNlcm5hbWU6cGFzc3dvcmQ=` en Base64 :
   ```
   username:password
   ```

---

## 🎯 Result
- **Username = `username`**
- **Password = `password`**

---

## 📝 Educational note
- Base64 is **not encryption**, just encoding.
- Anyone capable of sniffing traffic can reconstruct the credentials.
- This is why HTTP Basic Auth should always be used **with HTTPS**.
