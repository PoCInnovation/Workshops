# Angr Workshop

## Launch the workshop

*  You must download `Pycharm Edu` or install `edu-tools` on pycharm
*  Then open the zip file directly in pycharm edu (do not unzip it)
*  In Pycharm, open a terminal to be in the virtual env of the workshop and make a `pip3 install angr`
*  Then launch the build.sh at the root of the workshop files to download the binarie
*  The exercices order : Find, Avoid, Condition, Registers, Stack, Memory

## Usual issues

*  If you cannot install Angr because it cannot find <Python.h> install either `python3-devel` on fedora or `python3-dev` on ubuntu 
*  If you get an error `File not found` when you execute the binaries, it's because you cannot execute 32bits binaries, therefore do install a 32b lib like `glibc.i686`
*  If pycharm throws an error with a message containing something like "python 3.0 3.7 3.7 3.7", open the yaml configuration file and delete the ligne containing those info.

## Sources

This workshop is inspired by angr-ctf and covers a third of the whole challenges. If you want to go further, do not hesitate to use those ressources.
