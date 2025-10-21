# 🕵️ Challenge 5 — TCP

## 📖 Context

A network capture was performed during a suspicious exchange between two machines. Several protocols are present, and a secret message appears to be hidden within them.

---

## 🎯 Goal

Find the flag (format : FLAG{...})

Hints:
- The flag is split into 3 fragments (A + B + C)
- Fragment A: gzip body in HTTP on port 5000 (non-standard)
- Fragment B: a specific HTTP header split across TCP segments on port 80
- Fragment C: DNS-like UDP packets containing the third part of the flag
- Use Decode As, Follow TCP Stream, Export Objects → HTTP, Preferences → TCP reassembly

_Good luck, agent !_

---

## 📂 File provided

* `tcp.pcap`

---