# Authored by ‘Robert Rua’, ‘Jeremy Halek’, ‘Gaston Alvarado’, ‘Yevgeniy Khmelnitskiy’,  ‘Anthony Uhuegbue’
import os
import pymysql
import pandas as pd
import numpy as np
import pymysql
import json



from flask import Flask, jsonify, render_template

app = Flask(__name__)


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


@app.route("/na_sales")
def North_American_sales():
    """API Call"""
    conn = pymysql.connect('localhost', 'root', 'Worldcup1!', 'Project_2_DB')
    na_sales = pd.read_sql('SELECT * FROM grouped_years', conn)
    
    na_salesjson = na_sales.to_dict(orient='records')
    conn.close()
    return jsonify(na_salesjson) 
    
@app.route("/esrb_sales")
def ESRB_sales():
    """API Call"""
    conn = pymysql.connect('localhost', 'root', 'Worldcup1!', 'Project_2_DB')
    esrb_sales = pd.read_sql('SELECT * FROM grouped_esrb', conn)

    esrb_salesjson = esrb_sales.to_dict(orient='records')
    conn.close()
    return jsonify(esrb_salesjson) 
    
@app.route("/guns_vg")
def guns_vg():
    """API Call"""
    conn = pymysql.connect('localhost', 'root', 'Worldcup1!', 'Project_2_DB')
    combinedguns_vg = pd.read_sql('SELECT * FROM combined_guns_vg', conn)

    combinedguns_vgjson = combinedguns_vg.to_dict(orient='records')
    conn.close()
    return jsonify(combinedguns_vgjson) 
    
if __name__ == "__main__":
    app.run()