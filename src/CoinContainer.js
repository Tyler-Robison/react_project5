import React, { useState } from "react";
import "./CoinContainer.css";
import Coin from "./Coin";

function CoinContainer({ numCoins }) {
    const coinArr = [];

    for (let i = 0; i < numCoins; i++) {
        coinArr.push({ key: i })
    }


    // both arrows go forward, can't do 1 -> 3 or vice-versa
    return (
        <div className="CoinContainer-main">
            <h1>Coin Flipper</h1>
            <div className="CoinContainer">

                {coinArr.map(coin => {
                    return <Coin
                        key={coin.key}
                    />
                })}



            </div>
        </div>
    );
}

export default CoinContainer;