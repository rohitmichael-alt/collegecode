from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle  
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # So frontend (Vercel) can access this

# Load your model and label encoder
model = joblib.load('relationship_model.pkl')
label_encoder = joblib.load('label_encoder.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = data['features']  # Get features as list from request

    try:
        input_array = np.array(features).reshape(1, -1)
        prediction_encoded = model.predict(input_array)[0]
        prediction_label = label_encoder.inverse_transform([prediction_encoded])[0]

        return jsonify({'result': prediction_label})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
