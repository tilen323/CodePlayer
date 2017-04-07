from handlers.base import BaseHandler
from utils.decorators import validate_csrf

from models.high_score import HighScore

class ReactionTestHandler(BaseHandler):
    def get(self):

        highScoreList = HighScore.query().order(HighScore.high_score).fetch()

        params = {"highScoreList": highScoreList}
        return self.render_template("reaction_test.html", params=params)

    @validate_csrf
    def post(self):

        first_name = self.request.get("name")
        score = float(self.request.get("hiddenTime"))

        HighScore.addHighScore(first_name=first_name, high_score=score)

        return self.redirect_to("reaction-test")