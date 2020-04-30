#include <string.h>
#include <unistd.h>

// PoC{I_Th!NcK-I4m-0k}
int main(int argc, char **argv)
{
    char buff[20];
    char res[20] = {25, 14, 46, 86, 7, 111, 32, 69, 117, 38, 80, 102, 107, 37, 0, 10, 12, 29, 52, 80};

    if (argc != 2 || strlen(argv[1]) != 20)
        return 1;
    char *value = argv[1];
    if (read(0, buff, 20) != 20)
        return 1;
    if (strcmp(&buff[10], "3-Fl4g!-_-") != 0)
        return 1;
    char ok = 0;
    for (int i = 0; i < 20; i += 1)
        ok = ok || ((value[i] ^ buff[i]) != res[i]);
    return 0;
}
