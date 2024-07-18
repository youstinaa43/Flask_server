from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load your model
model = joblib.load('priority_model.pkl')


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Assuming the model expects a list of features
    prediction = model.predict([data['features']])
    return jsonify({'priority': prediction[0]})


if __name__ == '__main__':
    from waitress import serve

    serve(app, host='0.0.0.0', port=5000)
