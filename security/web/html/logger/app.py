from flask import Flask, render_template, make_response
import os


app = Flask(__name__, template_folder='template', static_folder='static')
error_type = "0001:61:01.0: 9002: POC reserved area SERVER !error"
error_content = "&lt;_io.TextIOWrapper name=&#39;&lt;stderr&gt;&#39; path=/6181060e2e8cf2099c46bd5c31e68526; mode=&#39;w&#39; encoding=&#39;utf-8&#39;&gt;"


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/6181060e2e8cf2099c46bd5c31e68526')
def flag():
    return render_template('flag.html', flag=os.getenv('FLAG'))


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('error.html', type=error_type, content=error_content)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4003))
    app.run(debug=True, host='0.0.0.0', port=port)
