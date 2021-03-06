import os as __os

from flask import Flask as __Flask

from utils import Console, blue2, white

SHL = Console("FlaskApp")

SHL.info(f"Creating FlaskApp.")

app = __Flask(__name__)
app.config['SECRET_KEY'] = '1234567890!"§$%&/()=?'
app.config['JSON_SORT_KEYS'] = False
app.config['UPLOAD_FOLDER'] = __os.path.join("", "storage", "uploads")
app.config['MAX_CONTENT_LENGTH'] = 3.5 * 1024 * 1024  # 3.5 Mb limit
