//Direction Changers Here
DirectionChanger(x=-.3,y=0,direcitonChange='Down')
DirectionChanger(x=-.3,y=-.3,direcitonChange='Right')
DirectionChanger(x=0,y=-.3,direcitonChange='Up')
DirectionChanger(x=.3,y=.2,direcitonChange='Down')
DirectionChanger(x=.3,y=-.3,direcitonChange='Left')
DirectionChanger(x=.1,y=-.3,direcitonChange='Up')
DirectionChanger(x=.1,y=.3,direcitonChange='Left')
DirectionChanger(x=.4,y=.1,direcitonChange='Up')
DirectionChanger(x=.4,y=.3,direcitonChange='Left')

//End Points Here
EndPoint(x=0,y=.3,blockcolor=color.red, id='red')
EndPoint(x=.1,y=0,blockcolor=color.orange, id='orange')
EndPoint(x=-.3,y=.3,blockcolor=color.pink, id='pink')
EndPoint(x=.2,y=.3,blockcolor=color.blue, id='blue')

//Squares Here
Square(blockcolor=color.blue,x=.1,y=.1,direction='Right', id='blue')
Square(blockcolor=color.red,x=-.1,y=0,direction='Left', id='red')
Square(blockcolor=color.orange,x=-.3,y=.2,direction='Right', id='orange')
Square(blockcolor=color.pink,x=.3,y=.3,direction='Down', id='pink')