export function getNewSnakePosition(snakeOldPosition,direction){
    var newSnake =[]
    newSnake.push({})
    //newSnake.push({x:snake[0].x+1,y: snake[0].y})
    for(var i=0;i<snakeOldPosition.length-1;i++){
        newSnake.push(snakeOldPosition[i])
    }
    switch(direction){
        case 'right':
            newSnake[0].x=snakeOldPosition[0].x+1
            newSnake[0].y=snakeOldPosition[0].y
            return newSnake
        case 'left':
            newSnake[0].x=snakeOldPosition[0].x-1
            newSnake[0].y=snakeOldPosition[0].y
            return newSnake
        case 'up':
            newSnake[0].x=snakeOldPosition[0].x
            newSnake[0].y=snakeOldPosition[0].y-1
            return newSnake
        case 'down':
            newSnake[0].x=snakeOldPosition[0].x
            newSnake[0].y=snakeOldPosition[0].y+1
            return newSnake


    }   
}