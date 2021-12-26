import React, { useState } from 'react'
import './Coin.css'

const Coin = ({ color, colors }) => {
    function flipCoin() {
        const num = Math.random();
        return (num > 0.5 ? 'heads' : 'tails')
    }

    let [headCount, setHeadCount] = useState(0);
    let [tailCount, setTailCount] = useState(0);
    let [face, setFace] = useState(flipCoin)
    const isHeads = face === 'heads';



    function handleClick() {
        const whichFace = flipCoin()
        if (whichFace === 'heads') setHeadCount(headCount + 1)
        if (whichFace === 'tails') setTailCount(tailCount + 1)
        setFace(whichFace)
    }

    return (
        <div className='Coin'
            onClick={() => handleClick()}>
            <p className='Coin-msg'>{isHeads ? 'H' : 'T'}</p>
            <p>H: {headCount}</p>
            <p>T: {tailCount}</p>
        </div>
    )

}

export default Coin;