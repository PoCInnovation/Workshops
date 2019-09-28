#include <stdio.h>
#include <string.h>

// The flag is Ez-_-Pz

static int get_xor_forrest(const char *input)
{
	char buffer[] = "I--am_Groot";

	if (strlen(input) != 7)
	 return (-1);
	// printf("%d %d %d %d %d %d %d\n", input[0] ^ buffer[3], input[1] ^ buffer[7], input[2] ^ buffer[0], input[3] ^ buffer[9], input[4] ^ buffer[0], input[5] ^ buffer[8], input[6] ^ buffer[7]);
	if ((input[2] ^ buffer[0]) != 100)
		return (-1);
	if ((input[0] ^ buffer[3]) != 36)
		return (-1);
	if ((input[4] ^ buffer[0]) != 100)
		return (-1);
	if ((input[6] ^ buffer[7]) != 8)
		return (-1);
	if ((input[3] ^ buffer[9]) != 48)
		return (-1);
	if ((input[5] ^ buffer[8]) != 63)
		return (-1);
	if ((input[1] ^ buffer[7]) != 8)
		return (-1);
	printf(""           
",------------------------------.\n"
"| Congratz you found the flag! |\n"
";..............................;\n");
	return (0);
}

int main(int argc, const char **argv)
{
	if (argc != 2) {
		dprintf(2, "Usage: ./a.out password\n");
		return(-1);
	}
	if (get_xor_forrest(argv[1])) {
		dprintf(2, "That's obviously not it ! Try again :)\n");
		return (-1);
	}
}
