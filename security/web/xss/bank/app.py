from flask import Flask, render_template, request, redirect, url_for
import os


app = Flask(__name__, template_folder='template', static_folder='static')
chat = list()


@app.route('/')
def home():
    return render_template('index.php', data="")

@app.route('/admin')
def admin():
    return render_template('admin.php', data="")


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5006))
    app.run(debug=True, host='0.0.0.0', port=port)
