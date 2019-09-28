#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>


static bool check_pass(char *arg)
{
    int fd = open("/tmp/here/are/passwords.txt", O_RDONLY);
    int error = 0;
    char buffer[strlen(arg)];

    if (fd == -1)
        return (false);
    error = read(fd, buffer, strlen(arg));
    close(fd);
    if (error == -1)
        return (false);
    for (int i = 0; i < strlen(arg); i += 1)
        if (buffer[i] != arg[strlen(arg) - 1 - i])
            return (false);
    return (true);
}


int main(int argc, char **argv)
{
    bool valid = false;

    if (argc != 2) {
        printf("Usage: %s [password]\n", argv[0]);
        return (1);
    }
    valid = check_pass(argv[1]);
    if (!valid) {
        printf("Invalid password\n");
        return (1);
    }
    printf("Congratz ! You've reversed my password checking system !\n");
    return (0);
}
