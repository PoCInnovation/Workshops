from flask import Flask, render_template, make_response, request
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    if (request.headers.get('User-Agent') == 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'):
        if (request.headers.get('PoC-HTML-2022') == 'Can I get the flag, please?'):
            return render_template('flag.html', flag=os.getenv('FLAG'))
    return render_template('index.html')


@app.route('/robots.txt', methods=['GET'])
def robots():
  response = make_response(open('static/robots.txt').read())
  response.headers["Content-type"] = "text/plain"
  return response


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4007))
    app.run(debug=True, host='0.0.0.0', port=port)
