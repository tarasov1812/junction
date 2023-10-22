import flask
from flask import Flask, request, render_template, render_template_string
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

@app.post("/login/")
def post_login():
    email = request.form.get("email")
    print(email)
    return "ok"
    #return render_template_string("All good")
    #return render_template("loginpage.html")

@app.get("/app/")
def get_app():
    return render_template_string("all good")

if __name__ == '__main__':
    app.run()

