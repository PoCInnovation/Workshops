from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import sys, os


app = Flask(__name__, template_folder='template', static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
db = SQLAlchemy(app)

# Create our database model
try:
    db.engine.execute(
        '''
        CREATE TABLE users (id int, email VARCHAR(50), passwd VARCHAR(50), PRIMARY KEY (id));
        '''
    )
except:
    pass

# Setup values for the database
try:
    db.engine.execute(
        '''
        INSERT INTO users (id, email, passwd) VALUES (1, 'admin@platform.com', '97sM2XvTfjgvdKSbzifZ');
        '''
    )
except:
    pass

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def login():
    email = request.args.get('email', None)
    passwd = request.args.get('passwd', None)

    try:
        sql = "SELECT id FROM users WHERE email='" + email + "' AND passwd='" + passwd + "'"
        result = db.engine.execute(sql)
        row = result.fetchone()
        print(row, file=sys.stderr)
        if row is not None and row[0] == 1:
            return render_template('index.html', login_message="You're off to a good start, keep digging!")
        return render_template('index.html', login_message="Invalid credentials")
    except:
        return render_template('index.html', login_message="An error occured")


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 7004))
    app.run(debug=True, host='0.0.0.0', port=port)
