import React from 'react';
import './card.css';

const Card: React.FC = () => {
    return (
        <article className='outer-line-card'>
            <article className='inner-line-card'>
                <header className='header-card'>
                <h2 className='heading'>Blog #1</h2>
                </header>
                <figure className='figure-image'>
                    <img src="https://img.freepik.com/free-vector/gold-botanical-cover-collection-template_23-2148825548.jpg" alt="image1" aria-describedby='Blog1 Image'></img>
                </figure>
                <section className='content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi quas sed officiis veniam nihil voluptas molestiae maxime labore saepe ipsa ! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum quo quam, quidem voluptate tempore magnam ducimus? Neque sapiente quibusdam nostrum commodi, delectus ad cum alias! Illo similique sed placeat!</p>
                </section>
                <footer>
                    <button>Learn More</button>
                </footer>
            </article>
        </article>
    );
}

export default Card;