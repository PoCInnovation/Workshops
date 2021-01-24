#include <stdio.h>
#include <unistd.h>

// PoC{abcdefghijklmnopqrstuvwxyz}
int main(void)
{
    int a = 1;
    char buff[31];
    char res[] = {122, 69, 105, 81, 75, 72, 73, 78, 79, 76, 77, 66, 67, 64, 65, 70, 71, 68, 69, 90, 91, 88, 89, 94, 95, 92, 93, 82, 83, 80, 87};

    for (int i = 0; i < 10; i += 1)
        a += 1;
    if (read(0, buff, 31) != 31)
        return 1;
    for (int i = 0; i < 31; i += 1)
        if ((buff[i] ^ 42) != res[i])
            return 1;
    printf("Good Job\n");
    return 0;
}
