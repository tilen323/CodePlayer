from handlers.base import BaseHandler


class NyGameHandler(BaseHandler):
    def get(self):
        return self.render_template("ny_game.html")