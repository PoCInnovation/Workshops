import numpy as np

def valide_init_states(states, STATES_SPACE):
    verif = []
    for pos in range(STATES_SPACE):      # start correction #
        for vel in range(STATES_SPACE):
            verif.append((pos, vel))
    if (verif != states):
        return False
    return True

def valide_get_indexes(indexes, POSITION_SPACE, VELOCITY_SPACE):
    position_index = np.digitize(0, POSITION_SPACE)
    velocity_index = np.digitize(0, VELOCITY_SPACE)
    
    if (indexes != (position_index, velocity_index)):
        return False
    return True

def create_testing_Qtable():
    return  {((1, 2), 0): -3.010414640241677, ((1, 2), 1): 1, ((1, 2), 2): 0}

def valide_greedy_step(Q):
    state = (1, 2)
    actions = [0, 1, 2]
    values = np.array([Q[state, a] for a in actions])
    action = np.argmax(values)
    return action

def valide_init_Qtable(states, action_space):
    Q = {}
    for state in states:
        for action in action_space:
            Q[state, action] = 0
    return Q
