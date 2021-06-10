/*
** Author:  PocInnovation Workshop
** Last Edited:
** File Description: assertions test for ransom.c
*/

#include "ransom.h"
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <criterion/criterion.h>

Test(get_new_path_name, test_get_new_path_name)
{
    char *parentPath = "/home";
    char *currentPath = "naadi/";
    char test[13];

    get_new_path_name(parentPath, test, currentPath);
    cr_assert_str_eq(test, "/home/naadi/");
}

Test(add_file_extension, test_add_file_extension)
{
    char *fileName = "file.odt";
    char test[strlen(fileName) + strlen(".ransom")];

    add_file_extension(fileName, test);
    cr_assert_str_eq(test, "file.odt.ransom");
}
