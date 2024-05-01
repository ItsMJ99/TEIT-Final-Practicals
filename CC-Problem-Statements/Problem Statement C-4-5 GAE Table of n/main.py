import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        n=10
        self.response.write('<h2>Table of {}</h2>'.format(n));
        self.response.write('<ul>')
        for i in range(1,11):
            self.response.write('<li>{} X {} = {}</li>'.format(n,i,(n*i)))
        self.response.write('</ul>')

app = webapp2.WSGIApplication([('/',MainPage)],debug=True)