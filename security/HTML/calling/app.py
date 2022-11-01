from flask import Flask, render_template
import os


app = Flask(__name__, template_folder='template', static_folder='static')


flag = open('static/.calling', 'w')
flag.write(os.getenv('FLAG'))
flag.close()

passwd = open('static/.passwd', 'w')
passwd.write(os.getenv('PASSWD'))
passwd.close()


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4004))
    app.run(debug=True, host='0.0.0.0', port=port)
