#!/usr/bin/env python3

from pwn import *

p = process("/bin/sh")

print("echo-ing hello to process")
p.sendline("echo hello")

print("process response:", p.recv().decode())

p.interactive()
