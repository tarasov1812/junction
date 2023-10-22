import flask
from flask import Flask, request, render_template
from PIL import Image, ImageDraw, ImageFont
import io
import share_blueprint
# from flask_ngrok import run_with_ngrok

app = Flask(__name__, static_url_path="")
# run_with_ngrok(app)

app.register_blueprint(share_blueprint.shareBlueprint)

@app.get("/")
def get_login():
    return render_template("loginpage.html")


if __name__ == '__main__':
    app.run()

