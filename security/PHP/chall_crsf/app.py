from flask import Flask, render_template
import os


app = Flask(__name__, template_folder='template', static_folder='static')

@app.route('/')
def home():
    return render_template('index.php', php='PoC')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 6003))
    app.run(debug=True, host='0.0.0.0', port=port)
