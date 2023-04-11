from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify, make_response
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def index():
    print('request received')
    form_data = request.get_json()
    print(form_data)
    return "success", 200


if __name__ == "__main__":
    app.run(debug=True)
