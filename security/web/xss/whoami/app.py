from flask import Flask, render_template, request
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    if request.args.get('index') == '<script>alert("XSS")</script>' or request.args.get('index') == "<script>alert('XSS')</script>":
        return '''
            <script src="static/script.js"></script>
            <h1>Challenge 3 - Whoami</h1>
            ''' + "<script>alert('" + os.getenv('FLAG') + "')</script>" + '''
            <script>
                var username = document.URL.indexOf("username=");
                var user = unescape(document.URL.substring(username + 8));
                document.write("<h2>Hello " + user.slice(0, -1) + " !</h2>");
            </script>
            '''
    return render_template('index.php')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5003))
    app.run(debug=True, host='0.0.0.0', port=port)
