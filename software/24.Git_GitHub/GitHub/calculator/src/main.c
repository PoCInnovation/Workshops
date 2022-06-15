/*
** EPITECH PROJECT, 2022
** GitHub Workshop
** File description:
** Project main file
*/

#include <stdlib.h>
#include <stdio.h>

int main(int argc, char *const argv[])
{
    int result = 0;

    if (argc != 3)
        return 84;
    result = atoi(argv[0]) + atoi(argv[1]);
    printf("Result is %d\n", result);
    return 0;
}
