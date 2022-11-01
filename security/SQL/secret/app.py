from flask import Flask, render_template, request, redirect, url_for
import os, sys


app = Flask(__name__, template_folder='template', static_folder='static')

login = {}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/auth')
def auth():
    email = request.args.get('email', None)
    password = request.args.get('password', None)
    #UNION SELECT 'admin@admin', 'TotalyTheAdminsPassword'

    try:
        if "UNION ALL SELECT" in password:
             login[password.split("SELECT")[1].split(",")[0].strip(' "\'\t\r\n')] = password.split(",")[1].strip(' "\'\t\r\n')
        if "UNION SELECT" in email:
             login[email.split("SELECT")[1].split(",")[0].strip(' "\'\t\r\n')] = email.split(",")[1].strip(' "\'\t\r\n')
        if (str(email) in login and login[str(email)] == password):
            login.clear()
            return render_template('granted.html', flag=os.getenv("FLAG")), 200
        return render_template('denied.html'), 200
    except:
        return render_template('denied.html'), 200

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 7003))
    app.run(debug=True, host='0.0.0.0', port=port)