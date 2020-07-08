import React, { useEffect, useState } from 'react';
import './App.css';

const ADD_COUNT = 5;
let itemId = 6;
function App() {
    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    useEffect(() => {
        const onScroll = () => {
            const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
            console.log(clientHeight, scrollTop, scrollHeight);

            if (clientHeight + scrollTop >= scrollHeight) {
                // Load More...
                console.log('Load More');
                more();
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const more = () => {
        const newItems = [];
        for (let i = 0; i < ADD_COUNT; i++) {
            newItems.push(itemId++);
        }

        setItems(prev => {
            return [...prev, ...newItems];
        });
    };

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
