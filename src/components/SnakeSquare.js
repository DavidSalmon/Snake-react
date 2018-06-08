import React, {PureComponent} from 'react'

const styles = (props,state)=>{
    backgroundColor: 'black';
}

const SnakeSquare = (props)=>(
    <div style={{width: 50,height:50,border: '1px solid black',backgroundColor:props.isHead?'red':'black'}} >{props.isHead?'head':''}</div>
)

export default SnakeSquare