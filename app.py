import os
import pymysql
import pandas as pd
import numpy as np
import pymysql
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__)



conn = pymysql.connect('localhost', 'root', '########', 'Project_2_DB')
#################################################
# Database Setup
#################################################

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///cleanData/db/GroupedYear.sqlite"

# db = SQLAlchemy(app)

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# # Save references to each table
# CombinedGunsVG = Base.classes.combined_guns_vg
# GroupedYears = Base.classes.grouped_years
# GunsYears = Base.classes.guns_years


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

@app.route("/MassShootingData")
def MassShootingdata():
    # [{
    #     "x": ['2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01'],
    #     'Killed': [288, 265, 366, 456, 437, 76],
    #     'Injured': [961, 1083, 1324, 1537, 1802, 221],
    #     'Mass shootings': [253, 270, 332, 383, 346, 54]}]
    
    data = [{
        'year': '2013-01-01',
        'Killed': 200,
        'Injured': 200,
        'Mass shootings': 400
        }, {
        'year': '2014-01-01',
        'Killed': 100,
        'Injured': 300,
        'Mass shootings': 400
        }, {
        'year': '2015-01-01',
        'Killed': 300,
        'Injured': 200,
        'Mass shootings': 500
        }, {
        'year': '2016-01-01',
        'Killed': 400,
        'Injured': 100,
        'Mass shootings': 500
        },]
    return jsonify(data)

@app.route("/TotalShootingsData")
def TotalShootingdata():
    data2 = [{
        "x": ['2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01'],
        'Killed': [317, 12228, 13840, 15020, 15537, 3528],
        'Injured': [979, 21705, 26350, 29970, 30429, 6026],
        'Total shootings': [278, 32495, 40067, 45435, 46951, 10318]}]
    return jsonify(data2)

@app.route("/na_sales")
def North_American_sales():
    """Return the homepage."""
   
    
    na_sales = pd.read_sql('SELECT * FROM grouped_years', con=conn)
    na_salesjson = na_sales.to_dict(orient='records')

    return jsonify(na_salesjson) 

@app.route("/esrb_sales")
def ESRB_sales():
    """Return the homepage."""
   
    esrb_sales = pd.read_sql('SELECT * FROM grouped_esrb', con=conn)
    esrb_salesjson = esrb_sales.to_dict(orient='records')

    return jsonify(esrb_salesjson) 

@app.route("/guns_vg")
def guns_vg():
    combinedguns_vg = pd.read_sql('SELECT * FROM combined_guns_vg', con=conn)
    combinedguns_vgjson = combinedguns_vg.to_dict(orient='records')

    return jsonify(combinedguns_vgjson) 

if __name__ == "__main__":
    app.run()