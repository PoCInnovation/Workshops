from flask import Flask, render_template, request, redirect, url_for
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    if (request.args.get('page')):
        if (request.args.get('page') == '⊡ /index.html⨀'):
            return render_template('flag.html'), 200
        return render_template('index.html'), 403
    return redirect('/?page=index.html')

@app.route('/0420d6d1db7e8784633bf253f09a2d5d')
def flag():
    if (request.args.get('flag') == 'md5($flag,true)' or request.args.get('flag') == 'sha1($flag,true)'):
        return render_template('flag.html', flag=os.getenv('FLAG')), 200
    return render_template('flag.html', flag="Access Denied."), 200


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 7005))
    app.run(debug=True, host='0.0.0.0', port=port)