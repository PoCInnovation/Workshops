from flask import Flask, render_template
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/F')
def r1():
    return render_template('troll.html')
@app.route('/Fi')
def r2():
    return render_template('troll.html')
@app.route('/Fin')
def r3():
    return render_template('troll.html')
@app.route('/Find')
def r4():
    return render_template('troll.html')
@app.route('/Find_')
def r5():
    return render_template('troll.html')
@app.route('/Find_T')
def r6():
    return render_template('troll.html')
@app.route('/Find_Th')
def r7():
    return render_template('troll.html')
@app.route('/Find_The')
def r8():
    return render_template('troll.html')
@app.route('/Find_The_')
def r9():
    return render_template('troll.html')
@app.route('/Find_The_R')
def r10():
    return render_template('troll.html')
@app.route('/Find_The_Ri')
def r11():
    return render_template('troll.html')
@app.route('/Find_The_Rig')
def r12():
    return render_template('troll.html')
@app.route('/Find_The_Righ')
def r13():
    return render_template('troll.html')
@app.route('/Find_The_Right')
def r14():
    return render_template('troll.html')
@app.route('/Find_The_Right_')
def r15():
    return render_template('troll.html')
@app.route('/Find_The_Right_W')
def r16():
    return render_template('troll.html')
@app.route('/Find_The_Right_Wa')
def r17():
    return render_template('troll.html')
@app.route('/Find_The_Right_Way')
def r18():
    return render_template('flag.html', flag=os.getenv('FLAG'))


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4006))
    app.run(debug=True, host='0.0.0.0', port=port)
