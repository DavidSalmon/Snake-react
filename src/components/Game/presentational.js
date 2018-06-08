import React, {Component} from 'react'
import Map from '../Map'

class Game extends Component{
    constructor(props){
        super(props)
        console.log(this.props.looseGif)
    } 

    render(){
        switch(this.props.status) {
            case 'IN_GAME':
              return <Map/>
            case 'GAME_OVER':
              return <div><h1>GAME OVER ! <button onClick={this.handlePlayButtonClick}>Try again</button></h1>
              <img src={this.props.looseGif}  height="42" width="42"/></div>
            case 'HOME':
              return <button onClick={this.handlePlayButtonClick}>Play</button>
        }
    }

    handlePlayButtonClick = (ev) =>{
        console.log('handlePlayButtonClick')
        this.props.updateStatus('IN_GAME')
    }
}

export default Game