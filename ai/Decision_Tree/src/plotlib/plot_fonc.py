#!/usr/bin/env python3
##
## EPITECH PROJECT, 2021
## plot.py
## File description:
## plot fonc
##

import numpy as np
import matplotlib.pyplot as plt

def plot_fonc() :
    plt.style.use('classic')
    x = np.linspace(-10, 10, 100)
    y = np.sin(x)
    plt.plot(x, y, marker="x")
    plt.show()

from PIL import Image
from src.graphviz.dispay_tree import display_tree
from sklearn.tree import export_graphviz

def create_graph_tree(decition_tree, target_name, feature, filename="tree.dot"):
    export_graphviz(decition_tree, out_file=filename, class_names=target_name, feature_names=feature, impurity=False, filled=True)

def plot_forest(forest, dataset):
    i = 0
    imgs = []
    for tree in forest.estimators_:
        create_graph_tree(tree, dataset.target_names, dataset.feature_names, "tree" + str(i) + ".dot")
        display_tree("tree" + str(i) + ".dot")
        imgs.append(Image.open("tree" + str(i) + ".png"))
        i += 1
    imgs[0].save('fire3_PIL.gif', format='GIF', append_images=imgs[1:], save_all=True, duration=1000, loop=0)

