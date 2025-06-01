from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)

CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        print("here")
        data = request.get_json(force=True)
        text = data.get("text", "")
        blob = TextBlob(text)
        polarity = blob.sentiment.polarity

        if polarity > 0:
            sentiment = "positive"
        elif polarity < 0:
            sentiment = "negative"
        else:
            sentiment = "neutral"

        return jsonify({
            "sentiment": sentiment,
            "polarity": polarity
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)