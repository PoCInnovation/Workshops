from flask import Flask, render_template, request, redirect, url_for
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/open')
def open():
    sesame = request.args.get('sesame', None)
    payload = {"' OR 1=1;", "'OR 1=1;", '" OR 1=1;', '"OR 1=1;'
               "' OR 1=1--", "'OR 1=1--", '" OR 1=1--', '"OR 1=1--'
               "' OR 1=1#", "'OR 1=1#", '" OR 1=1#', '"OR 1=1#'
               "' OR 1=1/*", "'OR 1=1/*", '" OR 1=1/*', '"OR 1=1/*'}

    if any(x in sesame for x in payload):
        return render_template('success.html', flag=os.getenv('FLAG'))
    else:
        return redirect('/')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 7001))
    app.run(debug=True, host='0.0.0.0', port=port)