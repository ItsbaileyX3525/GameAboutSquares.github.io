//Direction Changers Here
DirectionChanger(x=-.5,y=.4,direcitonChange='Right')
DirectionChanger(x=0,y=.2,direcitonChange='Left')
DirectionChanger(x=.2,y=.4,direcitonChange='Down')
DirectionChanger(x=0,y=.3,direcitonChange='Down')
DirectionChanger(x=-.6,y=.2,direcitonChange='Down')

//End Points Here
EndPoint(x=-.6,y=-.2,blockcolor=color.red, id='red')
EndPoint(x=-.3,y=-.4,blockcolor=color.orange, id='orange')
EndPoint(x=.2,y=.3,blockcolor=color.blue, id='blue')
EndPoint(x=-.5,y=.2,blockcolor=color.pink, id='pink')

//Squares Here
Square(blockcolor=color.red,x=.6,y=.3,direction='Left', id='red')
Square(blockcolor=color.blue,x=-.5,y=-.4,direction='Up', id='blue')
Square(blockcolor=color.pink,x=0,y=0,direction='Up', id='pink')
Square(blockcolor=color.orange,x=-.3,y=.2,direction='Down', id='orange')