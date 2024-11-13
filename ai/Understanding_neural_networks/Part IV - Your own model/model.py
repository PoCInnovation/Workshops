import os 
import torch
import torch.nn as nn
import torch.nn.functional as F

class MNISTModel(nn.Module):
    def __init__(self):
        super(MNISTModel, self).__init__()
        ...

    def forward(self, x):
        ...


# change the model_path to correspond to your weights file
def load_model(model_path='mnist_model.pth'):
    model = MNISTModel()

    model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu'), weights_only=True))
    assert os.path.isfile(model_path), f"Model file not found: {model_path} please change the model_path parameter in the model.py file"
    model.eval()
    return model
