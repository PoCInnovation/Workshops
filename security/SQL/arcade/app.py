from flask import Flask, render_template, request, redirect, url_for
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def open():
    passwd = request.args.get('pass', None)

    if passwd is not None and ("; DROP TABLE Users" in passwd or ';DROP TABLE Users' in passwd):
        return render_template('index.html', flag=os.getenv('FLAG'))
    else:
        return render_template('index.html', flag="Access Denied.")


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 7002))
    app.run(debug=True, host='0.0.0.0', port=port)