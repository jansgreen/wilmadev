from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_bootstrap import Bootstrap



app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/servicios')
def servicios():
    return render_template("servicios.html")

@app.route('/Nosotros')
def Nosotros():
    return render_template("Nosotros.html") 

@app.route('/Contactanos')
def Contactanos():
    return render_template("Contactanos.html")

@app.route('/Plan')
def Plan():
    data_nav = "data_nav"
    visivilidad = "Fase" 
    return render_template("Plan.html", visivilidad=visivilidad, data_nav=data_nav ) 


if __name__ == '__main__':
    app.run(port=5500, debug=True)

bootstrap = Bootstrap(app)
