import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///cleanData/db/GroupedYear.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
# Samples_Metadata = Base.classes.sample_metadata
# Samples = Base.classes.samples


@app.route("/")
def home():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/wordcloud")
def wordcloud():
    """Go to wordcloud"""
    return render_template("wordcloud.html")

@app.route("/analysis")
def analysis():
    """Go to analysis"""
    return render_template("analysis.html")

@app.route("/map")
def map():
    """Go to map"""
    return render_template("map.html")

@app.route("/conclusion")
def conclusion():
    """Go to conclusion"""
    return render_template("conclusion.html")

if __name__ == "__main__":
    app.run()