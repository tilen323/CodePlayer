import re
import json

from handlers.base import BaseHandler
from models.ny_image_list import NyImageList
from models.ny_high_score import NyHighScore

class NyGameHandler(BaseHandler):
    def get(self):
        return self.render_template("ny_game.html")

    def post(self):
        data = json.loads(self.request.body)
        ny_name_score = data["name"]
        ny_score = float(data["score"])
        message = "Score saved!"

        NyHighScore.addNyHighScore(first_name=ny_name_score, high_score=ny_score)

        self.response.write(json.dumps({"message": message}))


class NyGameMenuHandler(BaseHandler):
    def get(self):
        return self.render_template("ny_game_menu.html")


class NyGameEditorHandler(BaseHandler):
    def get(self):
        return self.render_template("ny_game_editor.html")

    def post(self):
        data = json.loads(self.request.body)
        username = data["name"]
        user_image = data["image"]
        message = "Image saved!"

        NyImageList.addNyImage(first_name=username, image_string=user_image)

        self.response.write(json.dumps({"message": message}))