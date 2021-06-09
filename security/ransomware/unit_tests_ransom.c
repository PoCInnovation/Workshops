/*
** Author:  Adina Cazalens - PocInnovation Workshop
** Last Edited:
** File Description: assertions test for ransom.c
**/

#include <assert.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <sys/types.h>
#include <pwd.h>

// prototypes
char *get_target_dir();
char **get_all_sub_dir(char *);

void test_get_target_dir()
{
    char *oldpwd = getenv("PWD");
    assert(chdir(get_target_dir()) == 0);
    chdir(oldpwd);
}

void test_get_all_sub_dir()
{
    char *subdir[] ={
        "/home/poc-workshop-secu-target-dir/Work/employment_contract_2016.pdf",
        "/home/poc-workshop-secu-target-dir/Work/employment_contract_2002.pdf",
        "/home/poc-workshop-secu-target-dir/Work/quit_letter.pdf",
        "/home/poc-workshop-secu-target-dir/Insurace/car_insurance.pdf",
        "/home/poc-workshop-secu-target-dir/Insurance/house_insurance.pdf",
        "/home/poc-workshop-secu-target-dir/fly_PAR_NYC.pdf",
        NULL
    };

    assert(subdir[0] == get_all_sub_dir(get_target_dir())[0]);
    assert(subdir[1] == get_all_sub_dir(get_target_dir())[1]);
    assert(subdir[2] == get_all_sub_dir(get_target_dir())[2]);
    assert(subdir[3] == get_all_sub_dir(get_target_dir())[3]);
    assert(subdir[4] == get_all_sub_dir(get_target_dir())[4]);
    assert(subdir[5] == get_all_sub_dir(get_target_dir())[5]);
    assert(subdir[6] == get_all_sub_dir(get_target_dir())[6]);
}
