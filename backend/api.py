from flask import Flask
from resources import *

app = Flask(__name__)

@app.route("/") 

def home():
	return "Hello, world!"

def process_text():
	pass

app.run(port=5000)