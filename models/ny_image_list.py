from google.appengine.ext import ndb

class NyImageList(ndb.Model):
    first_name = ndb.StringProperty()
    image_string = ndb.StringProperty()


    @classmethod
    def addNyImage(cls, first_name, image_string):
        newNyImage = NyImageList(first_name=first_name, image_string=image_string)

        newNyImage.put()
        return newNyImage