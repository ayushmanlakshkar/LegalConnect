from flask import Flask, request, jsonify
from main import user_input

app = Flask(__name__)

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    user_question = data.get('question', '')
    if user_question:
        response = user_input(user_question)
        return jsonify({'response': response})
    else:
        return jsonify({'error': 'Question not provided'})

if __name__ == "__main__":
    app.run(debug=True)
