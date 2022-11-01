from flask import Flask, render_template, make_response, request
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html', value='')


@app.route('/exploit')
def exploit():
    value = request.args.get('search')
    sys_respond = os.system(value)
    return render_template('index.html', value="%s : Not Found!" % value)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4010))
    app.run(debug=True, host='0.0.0.0', port=port)
