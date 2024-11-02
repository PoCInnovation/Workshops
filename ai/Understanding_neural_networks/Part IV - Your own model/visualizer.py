import io
import base64
import torch
from flask import Flask, request, jsonify, render_template
from PIL import Image
import torch.nn.functional as F

def visualize_model(model, port=5001):
    app = Flask(__name__)

    # Route for the drawing interface
    @app.route('/')
    def index():
        return render_template('index.html')

    # Route for prediction
    @app.route('/predict', methods=['POST'])
    def predict():
        data = request.json['image']
        image_data = base64.b64decode(data.split(",")[1])
        image = Image.open(io.BytesIO(image_data)).convert('L')

        # Prétraitement de l'image pour correspondre au modèle
        image_tensor = torch.tensor(255 - torch.ByteTensor(list(image.getdata())).reshape(1, 28, 28), dtype=torch.float32) / 255.0
        image_tensor = image_tensor.unsqueeze(0)  # Ajouter la dimension de batch

        # Prédiction avec affichage des probabilités dans le terminal
        with torch.no_grad():
            image_tensor = image_tensor.to(model.device)
            output = model(image_tensor)
            probabilities = F.softmax(output, dim=1)
            
            # Imprimer toutes les probabilités dans le terminal
            print("\nProbabilités pour chaque chiffre :")
            for i, prob in enumerate(probabilities[0]):
                print(f"Chiffre {i} : {prob.item():.4f}")

            # Obtenir la prédiction avec la probabilité maximale
            _, predicted = torch.max(output.data, 1)
            print(f"\nPrédiction finale : {predicted.item()} avec une probabilité de {probabilities[0][predicted.item()]:.4f}\n")

        return jsonify({'prediction': int(predicted.item())})

    # Run the app without debug and reloader
    app.run(port=port, debug=False, use_reloader=False)
