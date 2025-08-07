import React from 'react';
import './dashboard.css';
import { Coin } from './dashboard';

interface Props{
    coin: Coin;
}

const CryptoCard :React.FC<Props>=({coin})=>{
    return (
        <main className='card'>
            <img src={coin.image} alt={coin.name} className='coin-image' />
            <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
            <p>💰 Price: ${coin.current_price.toLocaleString()}</p>
            <p>📊 Market Cap: ${coin.market_cap.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h >= 0 ? "green" : "red"}>
                {coin.price_change_percentage_24h >= 0 ? "🔼" : "🔽"} {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
        </main>
    );
}

export default CryptoCard;