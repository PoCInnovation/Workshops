#!/usr/bin/env python3
from pwn import *

d1=urldecode("%60%49");h=enhex(b"PoC{Too_R43L}");t=unhex('506f43').decode();d2=urldecode(urlencode("PoC{Thi5_L00Ks_lIkE_4_R34L_flag}")[24:27]);f=int(h[2])-2;b=b64d("WXc=").decode();c=cyclic(17).decode();x=xor(b'1',b'2',109).decode()
print(f"{t}{{{b[0]}{c[16]}{c[0]}h{d2}{d1[1]}{d2}th{d1[1]}{x}k{d2}{d1[1]}t{d1[0]}s{d2}{d1[1]}{x}st{f}ll{h[5]}{c[12]}{d2}{x}{h[1]}{b[1]}}}")
