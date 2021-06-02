# Exercice 1 - Password

The password is a string in .rdata section. "cr4ckm3"
The program does a strncmp with that string and argv[1].

# Exercice 2 - Good luck

1. in .rdata section, find "aVeryCorrect" string.
2. Go to that string's usage place

Explanation:
The program converts argv[1] to a number with atoi
It compares that number * 5 with the value 0x181A.

`(181A)16 = (6170)10`

`6170 / 5 = 1234`

Answer: "1234"

# Exercice 3 - Julia

Find the main function (ex: use the rdata section)

Explanation:
The program does a cesar code shift on argv[1] and compare the result with "VIMwXliFiwx".

"VIMwXliFiwx" >> shift of 4 characters >> "REIsTheBest"

[Useful](https://www.dcode.fr/chiffre-cesar)

# Bonus - minesweeper

Modify the function that insert mines in the map on start.

1. Search where the extern rand "function" is used.
2. Go the parent "function"
3. the program put the mine on line 010036FA (.text)

`010036fa 80 08 80        OR         byte ptr [EAX], 0x80`

5. Type in XOR instead of OR, and 81 instead of 80.

`010036fa 80 08 80        XOR        byte ptr [EAX], 0x81`

More informations : [link](https://www.begin.re/hacking-minesweeper)
