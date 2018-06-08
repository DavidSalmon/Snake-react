import React, {PureComponent} from 'react'



const MapSquare = (props)=>(
    <div style={{width: 50,height:50,border: '1px solid black'}} >{props.x},{props.y}</div>
)

export default MapSquare