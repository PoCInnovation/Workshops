from flask import Flask, render_template
import os


app = Flask(__name__, template_folder='template', static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/l')
def associations():
	return render_template('index.html')

@app.route('/l/u')
def solomon():
	return render_template('index.html')

@app.route('/l/u/c')
def lady():
	return render_template('index.html')

@app.route('/l/u/c/i')
def contest():
	return render_template('index.html')

@app.route('/l/u/c/i/e')
def diameter():
	return render_template('index.html')

@app.route('/l/u/c/i/e/n')
def doctrine():
	return render_template('index.html')

@app.route('/e')
def axis():
	return render_template('index.html')

@app.route('/e/n')
def agencies():
	return render_template('index.html')

@app.route('/e/n/z')
def hollow():
	return render_template('index.html')

@app.route('/e/n/z/o')
def attendance():
	return render_template('index.html')

@app.route('/e/n/z/o/_')
def demanding():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p')
def rage():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a')
def dining():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s')
def convention():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s')
def linked():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e')
def shopper():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_')
def especially():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s')
def spank():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o')
def suited():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n')
def composition():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_')
def yo():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t')
def expanding():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e')
def superintendent():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e/p')
def sim():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e/p/i')
def shaped():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e/p/i/t')
def blame():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e/p/i/t/e')
def abandoned():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e/p/i/t/e/c')
def field():
	return render_template('index.html')

@app.route('/e/n/z/o/_/p/a/s/s/e/_/s/o/n/_/t/e/p/i/t/e/c/h')
def interested():
	return render_template('index.html')

@app.route('/P')
def study():
	return render_template('index.html')

@app.route('/P/O')
def gibraltar():
	return render_template('index.html')

@app.route('/P/o/C')
def september():
	return render_template('index.html')

@app.route('/P/o/C/{')
def architecture():
	return render_template('index.html')

@app.route('/P/o/C/{/y')
def technological():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o')
def insights():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e')
def abu():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l')
def via():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m')
def greg():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a')
def gotten():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i')
def saturn():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s')
def afghanistan():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n')
def hunt():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o')
def il():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n')
def vacancies():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c')
def usage():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e')
def house():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s')
def ghz():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t')
def plain():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p')
def asked():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a')
def bio():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s')
def tn():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s/l')
def relaxation():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s/l/e')
def beaches():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s/l/e/f')
def worcester():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s/l/e/f/l')
def storm():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s/l/e/f/l/a')
def jet():
	return render_template('index.html')

@app.route('/P/o/C/{/y/o/e/l/m/a/i/s/n/o/n/c/e/s/t/p/a/s/l/e/f/l/a/g')
def constitutional():
	return render_template('index.html')

@app.route('/p')
def streaming():
	return render_template('index.html')

@app.route('/p/o')
def christians():
	return render_template('index.html')

@app.route('/p/o/c')
def cardiovascular():
	return render_template('index.html')

@app.route('/p/o/c/c')
def mostly():
	return render_template('index.html')

@app.route('/p/o/c/c/e')
def poetry():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s')
def pl():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l')
def nz():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a')
def stopped():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m')
def vibrator():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e')
def perhaps():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_')
def screensaver():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i')
def rational():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l')
def oct():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l')
def restaurants():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e')
def hats():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e/u')
def chosen():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e/u/r')
def generates():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e/u/r/a')
def loads():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e/u/r/a/s')
def routing():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e/u/r/a/s/s')
def fountain():
	return render_template('index.html')

@app.route('/p/o/c/c/e/s/l/a/m/e/_/i/l/l/e/u/r/a/s/s/o')
def drainage():
	return render_template('index.html')

@app.route('/v')
def volkswagen():
	return render_template('index.html')

@app.route('/v/i')
def vulnerable():
	return render_template('index.html')

@app.route('/v/i/m')
def rent():
	return render_template('index.html')

@app.route('/v/i/m/v')
def vietnam():
	return render_template('index.html')

@app.route('/v/i/m/v/e')
def rouge():
	return render_template('index.html')

@app.route('/v/i/m/v/e/m')
def cigarette():
	return render_template('index.html')

@app.route('/v/i/m/v/e/m/a')
def treasure():
	return render_template('index.html')

@app.route('/v/i/m/v/e/m/a/c')
def centers():
	return render_template('index.html')

@app.route('/v/i/m/v/e/m/a/c/s')
def suicide():
	return render_template('index.html')

@app.route('/a')
def robot():
	return render_template('index.html')

@app.route('/a/r')
def periodically():
	return render_template('index.html')

@app.route('/a/r/c')
def illustrated():
	return render_template('index.html')

@app.route('/a/r/c/h')
def stylish():
	return render_template('index.html')

@app.route('/a/r/c/h/l')
def excess():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i')
def european():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n')
def anatomy():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u')
def garbage():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_')
def adam():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x')
def astrology():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x/o')
def completely():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x/o/n')
def eugene():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x/o/n/a')
def moses():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x/o/n/a/i')
def pills():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x/o/n/a/i/m')
def party():
	return render_template('index.html')

@app.route('/a/r/c/h/l/i/n/u/_/x/o/n/a/i/m/e')
def habits():
	return render_template('index.html')

@app.route('/o')
def replacement():
	return render_template('index.html')

@app.route('/o/n')
def web():
	return render_template('index.html')

@app.route('/o/n/_')
def pumps():
	return render_template('index.html')

@app.route('/o/n/_/e')
def tree():
	return render_template('index.html')

@app.route('/o/n/_/e/s')
def harder():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t')
def sciences():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_')
def supply():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d')
def infected():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e')
def retained():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e/s')
def agriculture():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e/s/g')
def ing():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e/s/g/e')
def processors():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e/s/g/e/e')
def angola():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e/s/g/e/e/k')
def levy():
	return render_template('index.html')

@app.route('/o/n/_/e/s/t/_/d/e/s/g/e/e/k/s')
def disposal():
	return render_template('index.html')

@app.route('/v')
def dh():
	return render_template('index.html')

@app.route('/v/i')
def chris():
	return render_template('index.html')

@app.route('/v/i/v')
def computing():
	return render_template('index.html')

@app.route('/v/i/v/e')
def subscribers():
	return render_template('index.html')

@app.route('/v/i/v/e/l')
def studios():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a')
def trades():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a/f')
def melissa():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a/f/r')
def maria():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a/f/r/a')
def provision():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a/f/r/a/n')
def basketball():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a/f/r/a/n/c')
def spirit():
	return render_template('index.html')

@app.route('/v/i/v/e/l/a/f/r/a/n/c/e')
def tools():
	return render_template('index.html')

@app.route('/l')
def thank():
	return render_template('index.html')

@app.route('/l/a')
def voltage():
	return render_template('index.html')

@app.route('/l/a/l')
def rachel():
	return render_template('index.html')

@app.route('/l/a/l/a')
def period():
	return render_template('index.html')

@app.route('/l/a/l/a/l')
def architect():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_')
def pubmed():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a')
def homeless():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l')
def securely():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a')
def amp():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l')
def richardson():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a')
def owns():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l')
def stanford():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a')
def wagon():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l')
def reserves():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a')
def entered():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l')
def ibm():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a')
def gothic():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l')
def chief():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a')
def calendars():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def sublimedirectory():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def crossword():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def toner():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def blah():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def latino():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def location():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def parking():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def limousines():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def ascii():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def motivation():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def cotton():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_')
def compromise():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a')
def tel():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l')
def compile():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a')
def webpage():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l')
def jobs():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a')
def tanks():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l')
def horrible():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a')
def expect():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l')
def guinea():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a')
def holland():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l')
def links():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a')
def expertise():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l')
def changes():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a')
def conclude():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def bo():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def religious():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def speakers():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def nottingham():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def website():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def restricted():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def victim():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def experiments():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def bridal():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def every():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def realistic():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def mounts():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def attacks():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def suck():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def alliance():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def dale():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l')
def continuously():
	return render_template('index.html')

@app.route('/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/_/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a/l/a')
def rocket():
	return render_template('index.html')

@app.route('/t')
def overcome():
	return render_template('index.html')

@app.route('/t/h')
def vampire():
	return render_template('index.html')

@app.route('/t/h/e')
def tool():
	return render_template('index.html')

@app.route('/t/h/e/f')
def helmet():
	return render_template('index.html')

@app.route('/t/h/e/f/i')
def theory():
	return render_template('index.html')

@app.route('/t/h/e/f/i/r')
def constitute():
	return render_template('index.html')

@app.route('/t/h/e/f/i/r/e')
def bruce():
	return render_template('index.html')

@app.route('/t/h/e/f/i/r/e/f')
def chocolate():
	return render_template('index.html')

@app.route('/t/h/e/f/i/r/e/f/o')
def assignments():
	return render_template('index.html')

@app.route('/t/h/e/f/i/r/e/f/o/r')
def coordinator():
	return render_template('index.html')

@app.route('/t/h/e/f/i/r/e/f/o/r/k')
def copyright():
	return render_template('index.html')

@app.route('/P')
def spread():
	return render_template('index.html')

@app.route('/P/O')
def locked():
	return render_template('index.html')

@app.route('/P/o/C')
def enabling():
	return render_template('index.html')

@app.route('/P/o/C/{')
def highland():
	return render_template('index.html')

@app.route('/P/o/C/{/a')
def relevance():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b')
def fate():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d')
def piano():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e')
def moreover():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l')
def threesome():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k')
def occupied():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v')
def incentive():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i')
def measured():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e')
def summaries():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n')
def critics():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t')
def verbal():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p')
def employer():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a')
def metals():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s')
def butterfly():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a')
def nokia():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l')
def debian():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l/a')
def officials():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l/a/m')
def beverly():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l/a/m/u')
def voted():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l/a/m/u/s')
def shown():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l/a/m/u/s/c')
def solutions():
	return render_template('index.html')

@app.route('/P/o/C/{/a/b/d/e/l/k/v/i/e/n/t/p/a/s/a/l/a/m/u/s/c/u')
def updates():
	return render_template('index.html')

@app.route('/o')
def running():
	return render_template('index.html')

@app.route('/o/n')
def cute():
	return render_template('index.html')

@app.route('/o/n/r')
def teams():
	return render_template('index.html')

@app.route('/o/n/r/i')
def the():
	return render_template('index.html')

@app.route('/o/n/r/i/g')
def molecules():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o')
def aggressive():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l')
def wires():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e')
def colored():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o')
def lenders():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n')
def thrown():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r')
def den():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i')
def launch():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g')
def scanning():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o')
def structures():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l')
def multiple():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e')
def notifications():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o')
def wines():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n')
def pins():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v')
def font():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o')
def cnetcom():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i')
def departmental():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t')
def stock():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p')
def button():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a')
def improvement():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s')
def captured():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l')
def breeding():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e')
def voices():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f')
def kodak():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o')
def monitored():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n')
def pants():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n/d')
def prepare():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n/d/d')
def amazoncom():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n/d/d/u')
def hereby():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n/d/d/u/b')
def ultimately():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n/d/d/u/b/o')
def brave():
	return render_template('index.html')

@app.route('/o/n/r/i/g/o/l/e/o/n/r/i/g/o/l/e/o/n/v/o/i/t/p/a/s/l/e/f/o/n/d/d/u/b/o/l')
def weak():
	return render_template('index.html')

@app.route('/m')
def ppm():
	return render_template('index.html')

@app.route('/m/e')
def reggae():
	return render_template('index.html')

@app.route('/m/e/s')
def deeper():
	return render_template('index.html')

@app.route('/m/e/s/s')
def name():
	return render_template('index.html')

@app.route('/m/e/s/s/i')
def care():
	return render_template('index.html')

@app.route('/m/e/s/s/i/v')
def courage():
	return render_template('index.html')

@app.route('/m/e/s/s/i/v/c')
def calculators():
	return render_template('index.html')

@app.route('/m/e/s/s/i/v/c/r')
def ebay():
	return render_template('index.html')

@app.route('/m/e/s/s/i/v/c/r/7')
def weddings():
	return render_template('index.html')

@app.route('/P')
def magazine():
	return render_template('index.html')

@app.route('/P/O')
def could():
	return render_template('index.html')

@app.route('/P/o/C')
def specs():
	return render_template('index.html')

@app.route('/P/o/C/{')
def board():
	return render_template('index.html')

@app.route('/P/o/C/{/Y')
def popularity():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_')
def says():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4')
def yards():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_')
def diane():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p')
def toolkit():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a')
def jerusalem():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s')
def yn():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_')
def suspected():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d')
def skype():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e')
def insider():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_')
def notification():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F')
def syndicate():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l')
def same():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4')
def separately():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4/g')
def duty():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4/g/_')
def pike():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4/g/_/I')
def breathing():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4/g/_/I/c')
def burton():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4/g/_/I/c/I')
def incorporated():
	return render_template('index.html')

@app.route('/P/o/C/{/Y/_/4/_/p/a/s/_/d/e/_/F/l/4/g/_/I/c/I/}')
def thick():
	return render_template('index.html')

@app.route('/P')
def college():
	return render_template('index.html')

@app.route('/P/O')
def broker():
	return render_template('index.html')

@app.route('/P/o/C')
def pro():
	return render_template('index.html')

@app.route('/P/o/C/{')
def counts():
	return render_template('index.html')

@app.route('/P/o/C/{/C')
def trans():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a')
def circle():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c')
def ignore():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e')
def username():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s')
def rg():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t')
def beatles():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l')
def southampton():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l/e')
def booty():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l/e/f')
def write():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l/e/f/l')
def supreme():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l/e/f/l/a')
def restrictions():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l/e/f/l/a/g')
def definitely():
	return render_template('index.html')

@app.route('/P/o/C/{/C/a/c/e/s/t/l/e/f/l/a/g/_')
def ln():
	return render_template('index.html')

@app.route('/A')
def tv():
	return render_template('index.html')

@app.route('/A/h')
def revolution():
	return render_template('index.html')

@app.route('/A/h/b')
def kirk():
	return render_template('index.html')

@app.route('/A/h/b/a')
def fisher():
	return render_template('index.html')

@app.route('/A/h/b/a/t')
def dr():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a')
def packing():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r')
def barbara():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d')
def beyond():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d/t')
def fixed():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d/t/u')
def investigated():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d/t/u/m')
def trails():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d/t/u/m/e')
def discover():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d/t/u/m/e/f')
def fight():
	return render_template('index.html')

@app.route('/A/h/b/a/t/a/r/d/t/u/m/e/f/u')
def oklahoma():
	return render_template('index.html')

@app.route('/P')
def explorer():
	return render_template('index.html')

@app.route('/P/O')
def europe():
	return render_template('index.html')

@app.route('/P/o/C')
def describe():
	return render_template('index.html')

@app.route('/P/o/C/{')
def ethiopia():
	return render_template('index.html')

@app.route('/P/o/C/{/A')
def specification():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l')
def blow():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l')
def expenditures():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l/e')
def dinner():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l/e/z')
def outcome():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l/e/z/l')
def consistency():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l/e/z/l/_')
def bin():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l/e/z/l/_/O')
def alleged():
	return render_template('index.html')

@app.route('/P/o/C/{/A/l/l/e/z/l/_/O/L')
def vitamin():
	return render_template('index.html')

@app.route('/P')
def copied():
	return render_template('index.html')

@app.route('/P/O')
def playstation():
	return render_template('index.html')

@app.route('/P/o/C')
def grades():
	return render_template('index.html')

@app.route('/P/o/C/{')
def material():
	return render_template('index.html')

@app.route('/P/o/C/{/p')
def jazz():
	return render_template('index.html')

@app.route('/P/o/C/{/p/i')
def stretch():
	return render_template('index.html')

@app.route('/P/o/C/{/p/i/p')
def ons():
	return render_template('index.html')

@app.route('/P/o/C/{/p/i/p/i')
def geological():
	return render_template('index.html')

@app.route('/P/o/C/{/p/i/p/i/p')
def compatible():
	return render_template('index.html')

@app.route('/P/o/C/{/p/i/p/i/p/i')
def hb():
	return render_template('index.html')

@app.route('/P/o/C/{/p/i/p/i/p/i/p')
def rhythm():
	return render_template('index.html')

@app.route('/P')
def robertson():
	return render_template('index.html')

@app.route('/P/O')
def glasses():
	return render_template('index.html')

@app.route('/P/o/C')
def limit():
	return render_template('index.html')

@app.route('/P/o/C/{')
def scholarships():
	return render_template('index.html')

@app.route('/P/o/C/{/p')
def permission():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a')
def tracked():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p')
def prerequisite():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a')
def sex():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p')
def kidney():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a')
def dozens():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p')
def dame():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a')
def understood():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p')
def regards():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a')
def acquisitions():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p')
def mo():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p/a')
def mauritius():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p/a/p')
def ch():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p/a/p/a')
def fleet():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p/a/p/a/p')
def quantities():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p/a/p/a/p/a')
def stores():
	return render_template('index.html')

@app.route('/P/o/C/{/p/a/p/a/p/a/p/a/p/a/p/a/p/a/p/a/p')
def ur():
	return render_template('index.html')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4009))
    app.run(debug=True, host='0.0.0.0', port=port)
