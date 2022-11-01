from flask import Flask, render_template, make_response
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    resp = make_response(render_template('index.html'))
    resp.set_cookie('SESSION1', '23a2719ddd0c2d7d34b68d1d3e298a32')
    resp.set_cookie('SESSION2', '24e7f06357b04604d949e9760acce8aa')
    resp.set_cookie('SESSION3', '82c2f2b4d27e6b2ab696fea0393393a5')
    resp.set_cookie('SESSION4', 'eeffe284082952321a82929efdd6dbc3')
    resp.set_cookie('SESSION5', '999edda14328d5f86e5e5a981fbea493')
    resp.set_cookie('SESSION6', 'a308a6987c2b221cec397c288488fda4')
    resp.set_cookie('SESSION7', '511cc4ba9e7e86e13bd9283a7a9e2e79')
    resp.set_cookie('SESSION8', 'd9bb1a64853a8e251d23c54228f8bedd')
    return resp


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4008))
    app.run(debug=True, host='0.0.0.0', port=port)
