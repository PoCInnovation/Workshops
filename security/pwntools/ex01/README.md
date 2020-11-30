# ex01 - Basic tools

In this first exercice, you must realise a script with pwntools.
It was made for you to discover some basic tools. If you do not do it with pwntools, too bad for you: The next challenges will be harder.


Here is what you must do, <ins>using pwntools</ins>:
- start a shell process
- send a command
- receive the output
- interact with the shell yourself
- exit the script

The output could look like this :
```
    [+] Starting local process '/bin/sh': pid ....
    echo-ing hello to process
    process response: hello

    [*] Switching to interactive mode
    $ i am in the shell now !
    /bin/sh: line 2: i: command not found
```

flag: PoC{D0N`T_SKIP_M3}

### Skills to acquire
- process()
- .sendline()
- .recv()
- .interactive()
- str.decode()
