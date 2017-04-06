#!/usr/bin/env python
import os
import jinja2
import webapp2

from handlers.base import MainHandler
from handlers.code_player import CodePlayerHandler
from handlers.reaction_test import ReactionTestHandler

app = webapp2.WSGIApplication([
    webapp2.Route('/', MainHandler, name="main-page"),
    webapp2.Route('/code-player', CodePlayerHandler, name="code-player"),
    webapp2.Route('/reaction-test', ReactionTestHandler, name="reaction-test"),
], debug=True)
