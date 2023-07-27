//Direction Changers Here
DirectionChanger(x=-.1,y=.3,direcitonChange='Down')
DirectionChanger(x=-.1,y=-.3,direcitonChange='Right')
DirectionChanger(x=0,y=-.3,direcitonChange='Up')
DirectionChanger(x=.2,y=.3,direcitonChange='Left')
DirectionChanger(x=.1,y=.4,direcitonChange='Right')
DirectionChanger(x=.3,y=.4,direcitonChange='Down')
DirectionChanger(x=.3,y=.2,direcitonChange='Left')
DirectionChanger(x=0,y=.2,direcitonChange='Down')
DirectionChanger(x=0,y=-.2,direcitonChange='Right')

//End Points Here
EndPoint(x=0,y=-.2,blockcolor=color.red, id='red')
EndPoint(x=.3,y=-.2,blockcolor=color.green, id='green')
EndPoint(x=0,y=.2,blockcolor=color.pink, id='pink')
EndPoint(x=0,y=-.3,blockcolor=color.yellow, id='yellow')

//Squares Here
Square(blockcolor=color.red,x=.2,y=-.3,direction='Up', id='red')
Square(blockcolor=color.yellow,x=.1,y=.3,direction='Left', id='yellow')
Square(blockcolor=color.pink,x=.3,y=.3,direction='Down', id='pink')
Square(blockcolor=color.green,x=.1,y=.2,direction='Up', id='green')