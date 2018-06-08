import {getNewSnakePosition} from '../../services/snakeService'
import {checkGameOver} from './map'

export const MOVE_SNAKE = 'my-Snake/Snake/MOVE_SNAKE'
export const EAT_FOOD = 'my-Snake/Snake/EAT_FOOD'
export const CHANGE_DIRECTION = 'my-Snake/Snake/CHANGE_DIRECTION'
export const RESET_SNAKE ='my-Snake/Snake/RESET_SNAKE'


//Reducer 
const initial = {
    position :  [{x:5,y:3},{x:4,y:3},{x:3,y:3},{x:2,y:3},{x:1,y:3},{x:0,y:3}],
    eating : false,
    direction : 'right'
}

export default function reducer (state = initial, action = {}) {
    switch (action.type) {
        case MOVE_SNAKE:
            return {
                ...state,
                position: getNewSnakePosition(state.position,state.direction)
                }
        case CHANGE_DIRECTION:
            if((state.direction==='left'&&action.direction==='right')||(state.direction==='right'&&action.direction==='left')||(state.direction==='up'&&action.direction==='down')||(state.direction==='down'&&action.direction==='up')){
                return state
            }
            return {
                ...state,
                direction:action.direction
            }
            case RESET_SNAKE :
                return initial
            
        default:
            return state
    }
}

// Actions creators
export const moveSnake = (snake,direction) => {
    return (dispatch, getState) => {
        dispatch({
            type: MOVE_SNAKE
        })
        dispatch(checkGameOver(getState().snake.position[0]))
        if(getState().map.status === 'GAME_OVER')
            dispatch(resetSnakePosition())
        
    }
    
}

export const eatFood = (foodPosition) =>({
    type: EAT_FOOD,
    foodPosition
})

export const resetSnakePosition = ()=>({
    type: RESET_SNAKE
})

export const changeDirection = (direction) =>({
    type: CHANGE_DIRECTION,
    direction
})






