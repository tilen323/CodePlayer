from google.appengine.ext import ndb

class HighScore(ndb.Model):
    first_name = ndb.StringProperty()
    high_score = ndb.FloatProperty()


    @classmethod
    def addHighScore(cls, first_name, high_score):
        newHighScore = HighScore(first_name=first_name, high_score=high_score)

        newHighScore.put()
        return newHighScore