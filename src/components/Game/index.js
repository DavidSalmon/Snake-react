import { connect } from 'react-redux'
import Game from './presentational'
import {updateStatus} from '../../store/ducks/map'

const mapStateToProps =  (state)=>{
    return{
        status : state.map.status,
        looseGif : state.map.looseGif
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateStatus : (status)=>{dispatch(updateStatus(status))}
})


export default connect(mapStateToProps,mapDispatchToProps)(Game)