import React from 'react';
import './card.css';


const Card: React.FC =()=>{
    return (
        <section className='main-body'>
            <h1 className='header'>I am Card header</h1>
            <section className='container'>
                <div className='box'>BOX 1</div>
                <div className='box'>BOX 2</div>
                <div className='box'>BOX 3</div>
                <div className='box'>BOX 4</div>
                <div className='box'>BOX 5</div>
                <div className='box'>BOX 6</div>
                <div className='box'>BOX 7</div>
                <div className='box'>BOX 8</div>
                <div className='box'>BOX 9</div>
            </section>
        </section>
    );
}

export default Card;