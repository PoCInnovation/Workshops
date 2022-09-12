from flask import Flask, render_template, request, json, redirect, url_for
import os


app = Flask(__name__, template_folder='template', static_folder='static')
chat = list()


@app.route('/')
def home():
    return render_template('index.php', data="")

@app.route('/my_account')
def admin():
    return render_template('admin.php', data="")

@app.route('/api/login')
def api():
    data = "You're so lame!"
    if ((request.args.get('username') == '6465763d74727565' or request.args.get('username') == '646576203d2074727565')
    and request.args.get('password') == '613d28293d3e7b633d303b666f72286920696e2073656c66297b6966282f5e615b72656c5d2b74242f2e74657374286929297b72657475726e20637d632b2b7d7d3b73656c665b4f626a6563742e6b6579732873656c66295b6128295d5d28225853532229'):
        data = os.getenv('FLAG')
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json')
    return response

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5006))
    app.run(debug=True, host='0.0.0.0', port=port)
