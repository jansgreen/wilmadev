from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_bootstrap import Bootstrap



app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/servicios')
def servicios():
    return render_template("servicios.html")


if __name__ == '__main__':
    app.run(port=5500, debug=True)

bootstrap = Bootstrap(app)
