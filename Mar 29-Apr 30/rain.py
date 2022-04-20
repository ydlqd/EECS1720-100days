# 20220318 rain

class rain():
    def renew(self):
        self.begin = random(255)
        self.x = random(800)
        self.y = random(800)
        self.life = 500
        self.flag = False        

R = []
s = 50

def setup():
    global R,s
    size(800,800)
    background(255)
    for i in range(s):    
        r = rain()
        r.renew()
        R.append(r)
    

def draw():
    global R
    fill(255,255,255,100)
    noStroke()
    rect(0,0,800,800)
    noFill()
    

    for i in range(s):
        r=R[i]
        r.begin = r.begin-1
        if r.begin < 1:
            r.flag = True
        if r.flag:    
            r.life = r.life-1 
            #c = (0.5*r.life+10*sin(r.life/10))%255/2  #tou ming du
            c = r.life%500/2  #tou ming du
            #stroke(random(255),random(255),random(255),r.life)
            for i in range(3):
                stroke(0,0,0,(c-60*(3-i))/3)
                d = 500-r.life-20*i
                if(d>0):
                    circle(r.x,r.y,d)

        if r.life<1:
            r.renew()