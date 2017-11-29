from google.appengine.ext import ndb

class NyHighScore(ndb.Model):
    first_name = ndb.StringProperty()
    high_score = ndb.FloatProperty()


    @classmethod
    def addNyHighScore(cls, first_name, high_score):
        newNyHighScore = NyHighScore(first_name=first_name, high_score=high_score)

        newNyHighScore.put()
        return newNyHighScore