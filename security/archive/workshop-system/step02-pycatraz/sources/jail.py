#!/usr/bin/env python2
from sys import modules
from os import system
modules.clear()
del modules
_raw_input = raw_input
_eval = eval
__builtins__.__dict__.clear()
__builtins__ = None
print("""
     _______         __________        ______
    |+++++++\_     _/o++++++o++\_    _/oss+++|
     \ssssss+o\   /osso++++++os++|  |ooos++=+|
 __        |+oo|  |oo+|      |++o|  |ss+|
|oss|      |o+s|  |++:|      |ss+|  |o+o|
|+o+|_____/sso/              |o++|  |s+o|       ___
|o+o++++++++o/               |+++|  |s++|      |s+:|
|ossssssss+/                 |s+s|  |o+:|      |s+=|
|ss+|                        /o+s|  |++:\______/o++|
|o+s|                  |oosss++o/    \o+++++sss++:/
|++:|                  |s++++ss/      \ooo++++s:=/
""")
print("Will you be able to escape my pyjail ?")
while 1:
    try:
        inp = _raw_input(">> ")
        if "flag" in inp:
            print("I can't allow you to do this.")
            continue
        a = None
        exec "a = " + _eval(inp)
        print "variable a was evaluated to " , a
    except:
        print("u n00b")