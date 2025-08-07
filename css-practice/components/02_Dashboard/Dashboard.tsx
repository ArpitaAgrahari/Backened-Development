import './dashboard.css'
import React, {useState,useEffect} from 'react';
import CryptoCard from '../02_Dashboard/CryptoCard'

export interface Coin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
    image: string;
}

const Dashboard : React.FC = ()=>{
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchCrypto = async() => {
        try{
            const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            const data: Coin[] = await res.json(); 
            console.log(data);
            setCoins(data.slice(0,5));
            setLoading(false);
        }catch(error){
            console.log("Error while fetching crypto data: ",error);
            setLoading(false); 
        }
    };

    useEffect(()=>{
        fetchCrypto();
        const interval = setInterval(fetchCrypto, 10000);
        return () => clearInterval(interval);
        
    },[]);
        
    return (
        <main className='app'>
            <h1>I am dashboard</h1>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='card-container'>
                        {coins.map((coin) => (
                            <CryptoCard key={coin.id} coin={coin}/>
                        ))}
                    </div>
                )
            }
        </main>
    );
}

export default Dashboard;