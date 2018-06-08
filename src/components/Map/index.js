import { connect } from 'react-redux'
import Map from './presentational'
import {moveSnake,changeDirection} from 'store/ducks/snake'
import {setTimer} from 'store/ducks/map'
import { togglePause } from '../../store/ducks/map';

const mapStateToProps =  (state)=>{
    return{
    map : state.map,
    snake: state.snake,
    timer : state.map.timer,
    }
}

const mapDispatchToProps = (dispatch) => ({
    moveSnake : ()=>{dispatch(moveSnake())},
    changeDirection: (direction) =>{dispatch(changeDirection(direction))},
    setTimer: (timer) => {dispatch(setTimer(timer))},
    togglePause: ()=>{dispatch(togglePause())}
})


export default connect(mapStateToProps,mapDispatchToProps)(Map)