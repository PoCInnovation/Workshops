#!/usr/bin/env python3
##
## EPITECH PROJECT, 2021
## display tree
## File description:
## dsiplayr tree
##

import os
from subprocess import check_call, run, PIPE

""" LIB FOR SKLEARN """

""" FONCTION """

def install_dot(filepath):
    print("Do you want to install dot ? yes / no")
    res = input()
    if res == "no":
        return None
    try:
        f = run(['egrep', '^(NAME)=', '/etc/os-release'], stdout=PIPE)
    except:
        print("ERROR: can't find system version")
        return None

    osVersion = str(f.stdout).split("NAME=")
    if osVersion[1].rstrip("\ n '") == "Fedora":
        print("Fedora system found...\nStarting installation")

        try:
            check_call(["sudo", "dnf", "install", "conda"])
        except:
            print("ERROR: installation of conda Failed")
            return None

        try:
            os.system("conda install python-graphviz")
        except:
            print("ERROR: installation of python-graphviz Failed")
            return None

        try:
            check_call(["dot", "-Tpng", filepath, "-o", "tree.png"])
            print("SUCCESS: dot is installed successfully")
            print("tree.png was created successfully")
        except:
            print("ERROR: Installation of dot Failed")
            return None

    elif osVersion[1].rstrip("\ n '") == "Ubuntu":
        print("Ubuntu system found...\nStarting installation")

        try:
            check_call(["sudo", "apt", "install", "conda"])
        except:
            print("ERROR: installation of conda Failed")
            return None

        try:
            os.system("conda install python-graphviz")
        except:
            print("ERROR: installation of python-graphviz Failed")
            return None

        try:
            check_call(["dot", "-Tpng", filepath, "-o", "tree.png"])
            print("SUCCESS: dot is installed successfully")
            print("tree.png was created successfully")
        except:
            print("ERROR: Installation of dot Failed")
            return None

    else:
        print("ERROR: No system found")


def display_tree(filepath):
    name = filepath.split(".")[0]
    try:
        check_call(["dot", "-Tpng", filepath, "-o", name + ".png"])
        #print("SUCCESS: " + name + ".png was created successfully")
    except:
        print("ERROR: dot not installed")
        install_dot(filepath)
