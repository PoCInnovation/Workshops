#!/usr/bin/env python3
##
## EPITECH PROJECT, 2021
## tree fonc skeate learn
## File description:
## iA
##

from src.graphviz.dispay_tree import display_tree
# from sklearn import tree

""" LIB FOR SKLEARN """
from sklearn.datasets import load_breast_cancer
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.tree import export_graphviz
from sklearn.ensemble import GradientBoostingClassifier
import matplotlib as plt
from sklearn.ensemble import RandomForestClassifier

""" Class """
class Tree_Build:
    def __init__(self, random_state, X_train, y_train, depth):
        self.tree = DecisionTreeClassifier(random_state=random_state, max_depth=depth)
        self.tree.fit(X_train, y_train)

""" FONCTION """

def create_graph_tree(decition_tree, target_name, feature, filename="tree.dot"):

    export_graphviz(decition_tree, out_file=filename, class_names=target_name, feature_names=feature, impurity=False, filled=True)



def plot_feature_importances_cancer(model, cancer):
    n_features = cancer.data.shape[1]
    plt.barh(np.arange(n_features), model.feature_importances_, align='center')
    plt.yticks(np.arange(n_features), cancer.feature_names)
    plt.xlabel("Feature importance")
    plt.ylabel("Feature")
    plt.ylim(-1, n_features)

def tree_fonc(argv, av):
    cancer = load_breast_cancer()
    X_train, X_test, y_train, y_test = train_test_split(cancer.data, cancer.target, random_state=10)
    decition_tree = Tree_Build(0, X_train, y_train, None)

    # create_graph_tree(decition_tree.tree, cancer.target_names, cancer.feature_names)
    # print("Accuracy on training set: {:.3f}".format(decition_tree.tree.score(X_train, y_train)))
    # print("Accuracy on test set: {:.3f}".format(decition_tree.tree.score(X_test, y_test)))
    # print("Feature importances:")
    # print(decition_tree.tree.feature_importances_)
    # plot_feature_importances_cancer(decition_tree.tree, cancer)

    # decition_tree = Tree_Build(0, X_train, y_train, 4)
    # print("\nAccuracy on training set: {:.3f}".format(decition_tree.tree.score(X_train, y_train)))
    # print("Accuracy on test set: {:.3f}".format(decition_tree.tree.score(X_test, y_test)))
    # print("Feature importances:")
    # print(decition_tree.tree.feature_importances_)
    ##need one line to create the forest 

    forest = RandomForestClassifier(n_estimators=5, random_state=2, max_depth=3)
    forest.fit(X_train, y_train)
    print("Accuracy on training set: {:.3f} / 1.000".format(forest.score(X_train, y_train)))
    print("Accuracy on test set: {:.3f} / 1.000".format(forest.score(X_test, y_test)))
    plot_forest(forest, cancer)