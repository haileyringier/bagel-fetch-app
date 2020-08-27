import React from 'react'

export default function Bagel({ type, rating}){
    
    return(
        <li>
            <p>Type: {type} , Rating: {rating}</p>
        </li>
    )
}