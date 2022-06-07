from flask import Flask, render_template, make_response
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    resp = make_response(render_template('index.html'))
    resp.set_cookie('SESSION1', '23a2719ddd0c2d7d34b68d1d3e298a32')
    resp.set_cookie('SESSION2', '284246fd2d36bdebfe25c6ab1d0ab3a9')
    resp.set_cookie('SESSION3', '576e09d1183e3df45ded91f0a112c48b')
    resp.set_cookie('SESSION4', 'ea3d14e7540435bde184ca97d8c6c907')
    resp.set_cookie('SESSION5', '39ec8e428652ac83e5c4dafb7f34f8f8')
    resp.set_cookie('SESSION6', 'acf2ec480e0bc08bb6be8d71e9a33d36')
    resp.set_cookie('SESSION7', '350441ffd1593132df7069e611c4470c')
    resp.set_cookie('SESSION8', 'e66019b582a31bf3da4e763a13f1e86f')
    return resp


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4008))
    app.run(debug=True, host='0.0.0.0', port=port)
