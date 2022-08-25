from flask import Flask, render_template, request, redirect, url_for
from urllib.parse import unquote
import os


app = Flask(__name__, template_folder='template', static_folder='static')
chat = list()


@app.route('/')
def home():
    data = ""
    for elem in chat:
        data += (elem + "<br>")
    if "<script>alert('XSS')</script>" in data or '<script>alert("XSS")</script>' in data:
        chat.clear()
        return "<script>alert('" + os.getenv('FLAG') + "')</script>"
    return render_template('index.php', data=data)

@app.route('/append', methods = ['POST', 'GET'])
def append():
    content = request.args.get("content", None)
    if content is not None:
        content = content.replace('<', "&lt;").replace('>', "&gt;");
        chat.append(request.remote_addr + ': ' + unquote(content))
    return redirect('/')

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5004))
    app.run(debug=True, host='0.0.0.0', port=port)
