########################
#### VARIABLES #########
########################

NAME		 	= ransom
CC			 	= gcc
RM			 	= rm -rf

INCLUDES 	 	= -I./include/
LINK_FLAG    	= -lsodium
CFLAGS 		 	= -s -Wall -Wextra \
				  --coverage   \
				  -fPIC
PATTERN 	 	= .c
OBJPATTERN  	= .o
UTESTS_BIN  	= unit_tests
SRC_DIR 		= ./sources
OBJECT_DIR 		= ./objects

vpath %$(PATTERN) $(SRC_DIR)
vpath %$(PATTERN) ./tests

MAIN		 	= main.c
SRC 		 	= algo.c ransom.c encryption.c decryption.c
TEST_SRC 	 	= unit_tests_ransom.c

########################
#### COMPILATION #######
########################

COMBINED		= $(SRC) $(MAIN)
TESTS 			= $(SRC) $(TEST_SRC)
OBJ 	 		= $(patsubst %$(PATTERN), $(OBJECT_DIR)/%$(OBJPATTERN), $(COMBINED))
OBJTST 			= $(patsubst %$(PATTERN), $(OBJECT_DIR)/%$(OBJPATTERN), $(TESTS))

all: directories $(NAME)

$(OBJECT_DIR):
	@mkdir -p $@

directories: | $(OBJECT_DIR)

$(OBJECT_DIR)/%$(OBJPATTERN) : %$(PATTERN)
	@$(CC) -o $@ -c $< $(CFLAGS) $(INCLUDES) $(LINK_FLAG)
	@echo "Compiling $@"

$(NAME): $(OBJ)
	@$(CC) -o $(NAME) $^ $(CFLAGS) $(INCLUDES) $(LINK_FLAG)
	@echo "[*** COMPILATION SUCCESSFUL ***]"

clean:
	@$(RM) objects

fclean: clean
	@$(RM) $(NAME) $(UTESTS_BIN) vgcore*
	@echo "[*** CLEAN ***]"

re: fclean all

func_tests:
	@./tests/.ftests

tests_run: clean directories $(OBJTST)
	@$(CC) -o $(UTESTS_BIN) $(OBJECT_DIR)/*$(OBJPATTERN) --coverage $(INCLUDES) $(LINK_FLAG) -lcriterion
	@./$(UTESTS_BIN) > /dev/null
	@echo "[*** TESTS OVER ***]"

tests_run_clean: tests_run
	@gcovr --exclude ./tests/test -s -p
	@$(RM) $(UTESTS_BIN) $(NAME) *.gcda *.gcno $(OBJECT_DIR)
	@echo "[*** CLEAN SUCCESSFUL ***]"

.PHONY: all clean fclean re tests_run tests_run_clean
