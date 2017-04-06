from handlers.base import BaseHandler


class ReactionTestHandler(BaseHandler):
    def get(self):
        return self.render_template("reaction_test.html")