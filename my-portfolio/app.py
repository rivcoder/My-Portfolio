from flask import Flask, request, jsonify, send_file

app = Flask(__name__)

@app.route("/")
def home():
    return send_file("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    print(data)
    return jsonify({"status":"ok"})

if __name__ == "__main__":
    app.run(debug=True)