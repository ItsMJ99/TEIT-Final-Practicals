import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write('<h2>Student Info</h2>');
        n=10
        self.response.write('<ul>')
        for i in range(1,n+1):
            self.response.write('<li>Record : {}</li>'.format(i))
            self.response.write('<li>Student Name : Madhav Jadhav</li>')
            self.response.write('<li>Student Seat No. : T190058634</li>')
            self.response.write('<li>Student Department : Information Technology</li>')
            self.response.write('<br>')
            n-=1
        self.response.write('</ul>')

app = webapp2.WSGIApplication([('/',MainPage)],debug=True)