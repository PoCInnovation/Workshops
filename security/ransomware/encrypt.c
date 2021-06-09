#include <sodium.h>
#include <sodium/crypto_pwhash.h>
#include <sodium/crypto_secretstream_xchacha20poly1305.h>
#include <sodium/utils.h>
#include <stdio.h>

#define MAX_FILEPATH 256
#define MAX_KEY_LEN crypto_secretstream_xchacha20poly1305_KEYBYTES
#define SALT_LEN crypto_pwhash_SALTBYTES
#define CHUNK_SIZE 4096

static int generate_crypto_key(unsigned char generatedKey[MAX_KEY_LEN],
    const char password[MAX_KEY_LEN])
{
    unsigned char salt[SALT_LEN];
    int ret = 0;

    sodium_memzero(salt, sizeof(salt));
    if (!(ret = crypto_pwhash(generatedKey, MAX_KEY_LEN, password, MAX_KEY_LEN,
            salt, crypto_pwhash_OPSLIMIT_INTERACTIVE, crypto_pwhash_MEMLIMIT_INTERACTIVE,
            crypto_pwhash_ALG_DEFAULT)))
        perror("crypto_pwh_ash");
    return ret;
}

static int core_encryption(unsigned char generatedKey[MAX_KEY_LEN],
    const char filepath[MAX_FILEPATH], const char optfilepath[MAX_FILEPATH])
{
    unsigned char bufferOut[CHUNK_SIZE + crypto_secretstream_xchacha20poly1305_ABYTES];
    unsigned char bufferIn[CHUNK_SIZE];
    crypto_secretstream_xchacha20poly1305_state st;
    unsigned char header[crypto_secretstream_xchacha20poly1305_HEADERBYTES];
    unsigned long long optLen = 0;
    size_t readLen = 0;
    int eof = 0;
    unsigned char tag = 0;
    FILE *toEncrypt, *Opt = NULL;

    if (!(toEncrypt = fopen(filepath, "rb"))
            || !(Opt = fopen(optfilepath, "wb"))) {
        perror("fopen");
        return 1;
    }
    crypto_secretstream_xchacha20poly1305_init_push(&st, header, generatedKey);
    if (fwrite(header, 1, sizeof(header), Opt) < 0) {
        perror("fwrite");
        return 1;
    }
    while (1) {
        readLen = fread(bufferIn, 1, sizeof(bufferIn), toEncrypt);
        if (!(eof = feof(toEncrypt)))
            break;
        tag = crypto_secretstream_xchacha20poly1305_push(
            &st, bufferOut, &optLen, bufferIn, readLen, NULL, 0, tag);
    }
    if (fclose(Opt) < 0 || fclose(toEncrypt) < 0) {
        perror("fclose");
        return 1;
    }
    sodium_memzero(generatedKey, MAX_KEY_LEN);
    return 0;
}

int encrypt_file(const char filepath[MAX_FILEPATH],
    const char optfilepath[MAX_FILEPATH], const char password[MAX_KEY_LEN])
{
    int ret = sodium_init();
    unsigned char generatedKey[MAX_KEY_LEN];

    if (ret < 0) {
        perror("sodium_init");
        return ret;
    }
    if (!(ret = generate_crypto_key(generatedKey, password)))
        return ret;
    return core_encryption(generatedKey, filepath, optfilepath);
}
