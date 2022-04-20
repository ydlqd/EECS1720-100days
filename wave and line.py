t = 0

class node: 
    b_x = 0
    b_y = 0
    node_x = 0
    node_y = 0
    node_l = 0
    node_b = 0
    
    def renew(self,x,y,l,b):
        self.node_l += l
        self.node_b = b
        self.b_x += x
        self.b_y += y
        self.node_x = self.b_x+self.node_l*sin(self.node_b)
        self.node_y = self.b_y+self.node_l*cos(self.node_b)
        
    
    def elli(self,c):
        ellipse(self.node_x,self.node_y,c,c)

n1 = node()
n2 = node()
n3 = node()
                
n1.renew(400,400,0,0)
n2.renew(400,400,100,0)
n3.renew(n2.node_x,n2.node_y,100,0)

def n_line(n1,n2):
    line(n1.node_x,n1.node_y,n2.node_x,n2.node_y)

def setup():
    size(800,800)
    background(255)

def draw():
    background(255)
    #global t,t1,x1,y1
    global t,n1,n2
    n_line(n1,n2)
    n_line(n2,n3)
    fill(0)
    n1.elli(10)
    fill(100)
    n2.elli(10)
    n3.elli(10)
    n2.renew(0,0,0,0.5*(noise(t)-0.7))
    n3.renew(0,0,0,1.5*(noise(t)-0.7))
    t += 0.01