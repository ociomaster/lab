from flask import Flask, jsonify, request
import business as b
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/sets", methods=["GET"])
def obtener_sets():
    return jsonify(b.obtener_sets())

@app.route("/sets/<string:set>/cards", methods=["GET"])
def obtener_cartas_sets(set):
    return jsonify(b.obtener_cartas_sets(set))

@app.route("/cards/<string:id>", methods=["GET"])
def obtener_carta(id):
    return jsonify(b.obtener_carta(id))


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

