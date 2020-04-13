from IPython.display import clear_output
from enum import Enum
import numpy as np
import time

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[91m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

class Action(Enum):
    TOP = 1
    DOWN = 2
    LEFT = 3
    RIGHT = 4


class Object(Enum):
    WALL = '#'
    FIRE = 'F'
    STARS = '*'
    TARGET = 'T'


class InternalState:
    def __init__(self):
        self.pos = [1, 1]
        self.past_pos = [1, 1]
        self.reward = 0

    def save_pos(self):
        self.past_pos[0] = self.pos[0]
        self.past_pos[1] = self.pos[1]

    def reset_pos(self):
        self.pos[0] = self.past_pos[0]
        self.pos[1] = self.past_pos[1]
        self.reward = 0


class Env:
    def __init__(self, filename: str):
        self.map = None
        self.load_map(filename)
        self.agent: InternalState = InternalState()
        self.action: Action.value = [Action.TOP.value, Action.DOWN.value, Action.LEFT.value, Action.RIGHT.value]

    def render(self, value_table: list = [], eps: float = 0.99, time_n: float = 0.1):
        save_char = self.map[self.agent.pos[0]][self.agent.pos[1]]
        self.map[self.agent.pos[0]][self.agent.pos[1]] = 'A'
        display: str = ""
        sep: str = ""
        i = 0

        for line in self.map:
            display += ' '.join(line) + '\n'
        clear_output(wait=True)
        if value_table != []:
            print(bcolors.BOLD + "Value table : \n" + bcolors.ENDC)
        while i < len(value_table):
            for char in value_table[i:i+len(self.map[0])]:
                if float(char) < 0:
                    print(bcolors.WARNING + str(np.round(char, 3)) + bcolors.ENDC, end=" ")
                elif float(char) > 0:
                    print(bcolors.OKGREEN + "+" + str(np.round(float(char), 3)) + bcolors.ENDC, end=" ")
                else:
                    print(bcolors.BOLD + "+0.000" + bcolors.ENDC, end=" ")
            print("\n")
            i += len(self.map[0])
        for i in range(len(self.map[0]) * 3):
            sep += "-"
        print("\n" + sep + "\n")
        print(bcolors.OKBLUE + bcolors.UNDERLINE + bcolors.BOLD + "Agent pos" + bcolors.ENDC + " : ", self.agent.pos, bcolors.ENDC)
        print(bcolors.OKBLUE + bcolors.UNDERLINE + bcolors.BOLD + "Agent reward" + bcolors.ENDC + " : ", self.agent.reward, bcolors.ENDC)
        print(bcolors.OKBLUE + bcolors.UNDERLINE + bcolors.BOLD + "Agent Epsilon" + bcolors.ENDC + " : ", eps, "\n" + bcolors.ENDC)
        print(bcolors.BOLD + display + bcolors.ENDC)
        self.map[self.agent.pos[0]][self.agent.pos[1]] = save_char
        time.sleep(time_n)

    def load_map(self, filename: str):
        with open(filename) as file:
            buffer = file.read().split("\n")
            self.map = [list(line) for line in buffer]

    def get_map(self):
        return [item for sublist in self.map for item in sublist]

    def reset(self):
        self.agent = None
        self.agent = Agent()

    def get_agent_env(self):
        return self.agent.pos

    def get_action_space(self):
        return len(self.action)

    def get_target(self, x: int, y: int):
        #self.map[y][x] = ' '
        self.agent.pos = [1, 1]
        self.agent.past_pos = [1, 1]

    def getScore(self):
        y: int = self.agent.pos[0]
        x: int = self.agent.pos[1]
        self.agent.reward = 0
        if self.map[y][x] == Object.WALL.value:
            self.agent.reward = -0.005
        if self.map[y][x] == Object.FIRE.value:
            self.agent.reward = -5
        if self.map[y][x] == Object.TARGET.value:
            self.agent.reward = 10
            self.get_target(x, y)
        if self.map[y][x] == Object.STARS.value:
            self.agent.reward = 2

    def get_env(self):
        self.map = np.array(self.map)
        colon: int = len(self.map[0])
        return [(colon * self.agent.pos[0]) + self.agent.pos[1]]

    def predict(self, action: int):
        env_ret = None
        if not (action in self.action):
            print("Unknow Action space")
            raise KeyError
        self.agent.save_pos()
        if action == Action.TOP.value:
            self.agent.pos[0] += -1
        if action == Action.DOWN.value:
            self.agent.pos[0] += 1
        if action == Action.LEFT.value:
            self.agent.pos[1] += -1
        if action == Action.RIGHT.value:
            self.agent.pos[1] += 1
        if self.agent.pos[0] < 0:
            self.agent.pos[0] = 0
        if self.agent.pos[1] < 0:
            self.agent.pos[1] = 0
        env_ret = self.get_env()
        self.agent.reset_pos()
        return env_ret

    def step(self, action: int):
        if not (action in self.action):
            print("Unknow Action space")
            raise KeyError
        self.agent.save_pos()
        if action == Action.TOP.value:
            self.agent.pos[0] += -1
        if action == Action.DOWN.value:
            self.agent.pos[0] += 1
        if action == Action.LEFT.value:
            self.agent.pos[1] += -1
        if action == Action.RIGHT.value:
            self.agent.pos[1] += 1
        if self.agent.pos[0] < 0:
            self.agent.pos[0] = 0
        if self.agent.pos[1] < 0:
            self.agent.pos[1] = 0
        self.getScore()
        if self.agent.reward == -0.005:
            self.agent.reset_pos()
        return self.get_env(), [self.agent.reward]