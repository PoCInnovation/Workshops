#include "ransom.h"
#include <sodium/crypto_secretstream_xchacha20poly1305.h>
#include <sodium/utils.h>
#include <stdio.h>
#include <stdlib.h>

/*
** Here, you have to open both files with different permissions : think of what you want to
** to do with each file. Don't forget to check the return values of your syscalls !
*/
bool init_encryption(FILE **to_encrypt, FILE **encrypted,
    const char *filepath, const char *optfilepath)
{
    // step 2
}

/*
** I strongly advise to code near the sources/decryption.c code : it is the opposite process.
** Here, you have to initialize the header, then write it in the encrypted file.
*/
int write_header(unsigned char *generated_key, FILE **to_encrypt,
    FILE **encrypted, crypto_secretstream_xchacha20poly1305_state *st)
{
    // step 2
}

/*
** The encryption loop really looks the same than the decryption one.
** In decryption_loop, the crypto_secretstream_xchacha20poly1305_pull is used to retrieve data.
** Think of the opposite of "pull" things... The link provided in the README.md about libsodium
** should really help you.
*/
int encryption_loop(FILE *to_encrypt, FILE *encrypted,
    crypto_secretstream_xchacha20poly1305_state st)
{
    // step 2
}
