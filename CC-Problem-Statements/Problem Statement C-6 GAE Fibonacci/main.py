import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        n = 10
        self.response.write('Fibonacci of first {} elements'.format(n))
        self.response.write('<ul>')
        fibo = [0, 1]
        self.response.write('<li>Fibo1 : {}</li>'.format(fibo[0]))
        self.response.write('<li>Fibo2 : {}</li>'.format(fibo[1]))
        for i in range(2, n):
            fibo.append(fibo[-1] + fibo[-2])
            self.response.write('<li>Fibo{} : {}</li>'.format(i+1, fibo[-1]))
        self.response.write('</ul>')

app = webapp2.WSGIApplication([('/',MainPage)], debug=True)
