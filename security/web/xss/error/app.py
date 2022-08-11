from flask import Flask, render_template, request
import os



app = Flask(__name__, template_folder='template', static_folder='static')


flag = open('static/.k0u5927a9t0ca025c98g2187i7dc2e46c3da945cp', 'w')
flag.write(os.getenv('FLAG'))
flag.close()


@app.route('/')
def home():
    return render_template('index.php', xss='PoC')

@app.route('/error')
def error():
    if request.args.get('script') == '616c657274282246696c65206e6f7420666f756e64212229':
        return '''
            <script>alert("File not found!")</script>
        '''
    if request.args.get('script') == '3c7363726970743e616c657274282258535322293c2f7363726970743e' or request.args.get('script') == '3c7363726970743e616c657274282758535327293c2f7363726970743e':
        return "<script>alert('" + os.getenv('FLAG') + "')</script>" 

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5002))
    app.run(debug=True, host='0.0.0.0', port=port)
