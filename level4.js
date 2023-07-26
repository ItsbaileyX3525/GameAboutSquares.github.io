//Direction Changers Here
DirectionChanger(x=-.3,y=-.2,direcitonChange='Right')
DirectionChanger(x=-.3,y=.1,direcitonChange='Down')
DirectionChanger(x=0,y=.4,direcitonChange='Down')
DirectionChanger(x=-.3,y=.3,direcitonChange='Down')
DirectionChanger(x=-.3,y=.2,direcitonChange='Right')

//End Points Here
EndPoint(x=0,y=-.2,blockcolor=color.red, id='red')
EndPoint(x=.2,y=-.2,blockcolor=color.green, id='green')
EndPoint(x=0,y=.2,blockcolor=color.pink, id='pink')
EndPoint(x=.1,y=-.2,blockcolor=color.blue, id='blue')

//Squares Here
Square(blockcolor=color.red,x=0,y=.3,direction='Up', id='red')
Square(blockcolor=color.blue,x=-.3,y=.1,direction='Down', id='blue')
Square(blockcolor=color.pink,x=.3,y=.3,direction='Left', id='pink')
Square(blockcolor=color.green,x=.1,y=.1,direction='Left', id='green')