import gym
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F

from sklearn.utils import shuffle
from collections import namedtuple

STATE_SPACE = 0 # TODO
ACTION_SPACE = 0 # TODO

BATCH_SIZE = 0 # TODO
LEARNING_RATE = 0 # TODO
GAMMA = 0 # TODO

EPS_MIN = 0 # TODO
EPS_DECAY = 0 # TODO

"""Agent network"""
class Network(nn.Module):
    def __init__(self):
        pass

    def forward(self, t):
        pass

"""Agent memory"""
class Memory():
    def __init__(self, size):
        pass

    def add(self, state, action, reward, new_state):
        pass

    def shuffle(self):
        pass

"""RL agent"""
class Agent():
    def __init__(self, network=Network, memory_size=25_000):
        pass

    """Use epsilon to pick action"""
    def pick_action(self, state, epsilon):
        pass

    """Calc expectation"""
    def __calc_target(self, reward, next_state):
        pass

    """train agent over one batch"""
    def __train_in_batch(self, states, actions, rewards, next_states):
        pass

    """train the agent over the whole memory"""
    def train(self):
        pass

env = gym.make("CartPole-v1")
env.seed(1)
state = env.reset()

def train(agent):
    pass

agent = Agent()
train(agent)
