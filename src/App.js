import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    useEffect(() => {
        const onScroll = () => {
            console.log('scroll');
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="App">
            {items.map(item => (
                <div key={`item-${item}`} className="item">
                    <h1>{item}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;
