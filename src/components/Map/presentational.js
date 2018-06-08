import React, {Component} from 'react'
import MapSquare from '../MapSquare'
import SnakeSquare from '../SnakeSquare'





class Map extends Component{
    constructor(props){
        super(props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    handleKeyPress = (event) => {
        event.preventDefault()
        switch(event.key){
            case 'q':
                this.props.changeDirection('left')
                break
            case 's':
                this.props.changeDirection('down')
                break
            case 'd':
                this.props.changeDirection('right')
                break
            case 'z':
                this.props.changeDirection('up')
                break
            case ' ':
                if(this.props.map.pause){
                    let time = setInterval(this.props.moveSnake,500)
                    this.props.setTimer(time)
                }
                this.props.togglePause()
            
        }
        event.target.value=''
      }

      componentDidMount(){
         let timer = setInterval(this.props.moveSnake,500)
         this.props.setTimer(timer)
      }

      componentWillUnmount(){
          clearInterval(this.props.timer)
      }
      

    render(){
        return (
            <div>Touches : ZQSD pour se déplacer, espace pour mettre en pause
                <br/><input placeholder="Mettre le curseur ici pour jouer" onKeyPress={this.handleKeyPress} />
                <h1 style={{textAlign: 'center'}}>{this.props.map.pause?'Pause':''}</h1>
                <ul className="row" >
                    {this.props.map.mapArray.map((casee,i) => <li style={{display : "inline-block"}} key={i}>{casee.map((c,j) => this.props.snake.position.findIndex(sn => sn.x===i && sn.y===j )!==-1? <SnakeSquare x={j} y={i} isHead={this.props.snake.position.findIndex(sn => sn.x===i && sn.y===j )===0} key={'line_'+j}/>:<MapSquare x={j} y={i} key={'line_'+j}/>)}</li>)}
                </ul>
            </div>
        )
    }
}

export default Map