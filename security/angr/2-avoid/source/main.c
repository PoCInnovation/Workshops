#include <stdio.h>
#include <unistd.h>

int avoid_me()
{
    printf("GET OUT\n");
    char buff[31];
    char buff1[31];
    char buff2[31];

    if (read(0, buff, 31) != 31)
        return 1;
    if (read(0, buff1, 31) != 31)
        return 1;
    if (read(0, buff2, 31) != 31)
        return 1;
    for (int i = 0; i < 31; i += 1) {
            buff[i] =buff[i] ^ buff1[i];
            if (buff[i] % 2)
                buff2[i] = buff[i] ^ buff2[i];
    }
    return 0;
}

// PoC{abcdefghixddddopqrstuvwxyz}
int main(void)
{
    int a = 1;
    char buff[31];
    char res[] = {121, 70, 106, 82, 72, 75, 74, 77, 76, 79, 78, 65, 64, 81, 77, 77, 77, 77, 70, 89, 88, 91, 90, 93, 92, 95, 94, 81, 80, 83, 84};

    for (int i = 0; i < 10; i += 1)
        a += 1;
    if (read(0, buff, 31) != 31)
        return 1;
    avoid_me();
    for (int i = 0; i < 31; i += 1)
        if ((buff[i] ^ 41) != res[i])
            return 1;
    printf("Good Job\n");
    return 0;
}
