import {generateMapArray,updateStatusInGame,searchIcon} from '../../services/mapService'

export const SET_MAP = 'my-Map/Map/SET_MAP'
export const CHECK_GAME_OVER ='my-Map/Map/CHECK_GAME_OVER'
export const UPDATE_STATUS ='my-Map/Map/UPDATE_STATUS'
export const SET_TIMER = 'my-Map/Map/SET_TIMER'
export const TOGGLE_PAUSE = 'my-Map/Map/TOGGLE_PAUSE'

//Reducer 
const initial = {
    mapArray : generateMapArray(8,20),
    status: 'HOME',
    timer: 0,
    pause : false,
    looseGif:searchIcon('lose'),
    winGif:searchIcon('win')
}

export default function reducer (state = initial, action = {}) {
    switch (action.type) {
        case SET_MAP:
            return{
                ...state,
                mapArray : generateMapArray(action.nbColumns,action.nbLines)
            }
        case CHECK_GAME_OVER:
            return {
                ...state,
                status: updateStatusInGame(action.headPosition,state.mapArray,state.status)
            }
        case UPDATE_STATUS:
            return{
                ...state,
                status: action.status
            }
        case SET_TIMER:
            console.log('setTimer')
            console.log(action.timer)
            return {
                ...state,
                timer: 0+action.timer
            }
        case TOGGLE_PAUSE:
            if(!state.pause){
                console.log('clearInterval')
                console.log(state.timer)
                clearInterval(state.timer)
            }
                
            return{
                ...state,
                pause: !state.pause
            }
        default:
            return state
    }
}

// Actions creators
export const setMap = (nbColumn,nbLines) =>({
    type: SET_MAP,
    nbColumns,
    nbLines
})

export const checkGameOver = (headPosition)=>{
    return{
        type: CHECK_GAME_OVER,
        headPosition
    }
}

export const updateStatus = (status)=>({
    type: UPDATE_STATUS,
    status
})

export const setTimer = (timer) => ({
    type: SET_TIMER,
    timer
})

export const togglePause = () =>({
    type: TOGGLE_PAUSE
})
