import re
import json

from handlers.base import BaseHandler
from models.ny_image_list import NyImageList

class NyGameHandler(BaseHandler):
    def get(self):
        return self.render_template("ny_game.html")

    def post(self):
        data = json.loads(self.request.body)
        username = data["name"]
        user_image = data["image"]
        message = "Image saved!"

        NyImageList.addNyImage(first_name=username, image_string=user_image)

        self.response.write(json.dumps({"message": message}))