from flask import Flask, render_template, request, redirect, url_for
import hashlib
import os


app = Flask(__name__, template_folder='template', static_folder='static')
chat = list()


@app.route('/')
def home():
    return render_template('index.php', data="")

@app.route('/encrypt', methods = ['POST', 'GET'])
def append():
    encode = request.args.get("hash", None)
    if encode is not None and len(encode) != 0:
        encode = hashlib.md5(encode.encode())
        encode = encode.hexdigest()
        return render_template('index.php', data=encode)
    return redirect('/')

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5005))
    app.run(debug=True, host='0.0.0.0', port=port)
