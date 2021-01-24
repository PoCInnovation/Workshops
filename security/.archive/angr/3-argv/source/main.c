#include <string.h>
#include <stdio.h>

int check_password(const char *s)
{
    char values[20] = {76, 115, 95, 103, 76, 40, 111, 111, 107, 83, 110, 120, 67, 81, 40, 111, 104, 47, 110, 97};

    for (int i = 0; i < 20; i += 1)
        if ((s[i] ^ 28) != values[i])
            return 1;
    return 0;
}


// PoC{P4sswOrd_M4st3r}
int main(int argc, char **argv)
{
    if (argc != 2)
        return 1;
    char *value = argv[1];
    if (strlen(value) != 20)
        return 1;
    if (check_password(value) == 0)  {
        printf("GG\n");
        return 0;
    }
    return 1;
}
