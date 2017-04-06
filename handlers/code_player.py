from handlers.base import BaseHandler


class CodePlayerHandler(BaseHandler):
    def get(self):
        return self.render_template("code_player.html")