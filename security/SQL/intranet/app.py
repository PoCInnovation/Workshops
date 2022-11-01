from flask import Flask, render_template, request, redirect, url_for
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/post')
def post():
    content = request.args.get('msg')
    return render_template('access_denied.html', content=content)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 7006))
    app.run(debug=True, host='0.0.0.0', port=port)