##
## EPITECH PROJECT, 2022
## Makefile
## File description:
## Makefile
##

SRC_DIR		=	src/

SRC			=	main.c

OBJ			=	$(addprefix $(SRC_DIR),$(SRC:.c=.o))

NAME		=	calculator

CC			=	gcc
CFLAGS		=	-Wall -Wextra

all:		$(NAME)

$(NAME):	$(OBJ)
			$(CC) -o $(NAME) $(OBJ)

clean:
			$(RM) $(OBJ)

fclean:		clean
			$(RM) $(NAME)

re:			fclean all

.PHONY: all clean fclean re
