from flask import Flask, render_template, send_file, request
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/picture')
def picture():
    if request.args.get('type') == 'PoC':
       filename = 'static/flag.png'
    else:
       filename = 'static/rickroll.gif'
    return send_file(filename, mimetype='image/gif')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4005))
    app.run(debug=True, host='0.0.0.0', port=port)
