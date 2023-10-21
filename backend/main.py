import flask
from flask import Flask, request
from PIL import Image, ImageDraw, ImageFont
import io
import share_blueprint
# from flask_ngrok import run_with_ngrok

app = Flask(__name__)
# run_with_ngrok(app)

app.register_blueprint(share_blueprint.shareBlueprint)

if __name__ == '__main__':
    app.run()

