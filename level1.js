//Direction Changers Here
DirectionChanger(x=-.3,y=.1,direcitonChange='Down')
DirectionChanger(x=.3,y=.1,direcitonChange='Right')
DirectionChanger(x=.3,y=.0,direcitonChange='Up')

//End Points Here
EndPoint(x=-.3,y=-.2,blockcolor=color.blue, id='blue')
EndPoint(x=.5,y=.1,blockcolor=color.red, id='red')

//Squares Here
Square(blockcolor=color.blue,x=.1,y=.1,direction='Left', id='blue')
Square(blockcolor=color.red,x=-.1,y=0,direction='Right', id='red')