#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
    if (argc != 2) {
        dprintf(2, "Usage: %s [password]\n", argv[0]);
        return (-1);
    }
    if (!strcmp(argv[1], "FLAG{R_U_Kidd!nG_M3?!}")) {
        printf("Nice, you got the flag !\n");
        return (0);
    }
    return (-1);
}
