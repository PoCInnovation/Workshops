#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
    int var;
    int check = 0x04030201;
    char buf[36540];

    fgets(buf, 36545, stdin);

    printf("\n[buf]: %s\n", buf);
    printf("[check] %p\n", check);

    if ((check != 0x04030201) && (check != 0xdeadbeef))
        printf("\nYou are on the right way!\n");
    if (check == 0xdeadbeef) {
        printf("Yeah dude! You win!\nGo ask for your flag!\n");
    }
    return 0;
}

// gcc -g -m32 -fno-stack-protector -z execstack challenge.c -o challenge
