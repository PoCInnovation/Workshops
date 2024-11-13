from flask import Flask, request, jsonify, render_template
import numpy as np
import torch
from torchvision import transforms
from model import load_model

# Charger le modèle
model = load_model('mnist_model_1.pth')
app = Flask(__name__)

# Transformation utilisée pendant l'entraînement
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Récupération des données de l'image
        data = request.json['image']
        image_array = np.array(data, dtype=np.float32).reshape(28, 28)

        # Inversion des couleurs si nécessaire (pour correspondre à MNIST)
        image_array = 1 - image_array

        # Appliquer les transformations (ToTensor et Normalize) pour correspondre à l'entraînement
        image_tensor = transform(image_array).unsqueeze(0)  # Ajouter la dimension de batch

        # Prédiction
        with torch.no_grad():
            output = model(image_tensor)
            probabilities = torch.nn.functional.softmax(output, dim=1)
            _, predicted = torch.max(probabilities, 1)
            predicted_digit = predicted.item()
            probabilities_list = probabilities[0].cpu().numpy().tolist()

        return jsonify({'prediction': predicted_digit, 'probabilities': probabilities_list})

    except Exception as e:
        print("Erreur dans la route /predict :", e)
        return jsonify({'error': 'Une erreur est survenue lors de la prédiction'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5003)

# Try to change the port if it's already in use


