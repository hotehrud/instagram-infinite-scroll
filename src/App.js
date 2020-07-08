import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

const ADD_COUNT = 5;
const ROW_COUNT = 20;
const ROW_HEIGHT = 350;
let itemId = 6;
function App() {
    const [start, setStart] = useState(0);
    const [paddingTop, setPaddingTop] = useState(0);
    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    const slicedItems = useMemo(() => {
        const s = Math.floor(start) - ROW_COUNT / 2 < 0 ? 0 : Math.floor(start) - ROW_COUNT / 2;
        const e = s + ROW_COUNT;
        return items.slice(s, e);
    }, [start, items]);

    useEffect(() => {
        const onScroll = () => {
            const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
            const currentStart = Math.floor(scrollTop / ROW_HEIGHT);

            updatePaddingTop(currentStart);
            setStart(currentStart);

            if (clientHeight + scrollTop >= scrollHeight) {
                // Load More...
                more();
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        const s = Math.floor(start) - ROW_COUNT / 2 < 0 ? 0 : Math.floor(start) - ROW_COUNT / 2;
        setPaddingTop(s * ROW_HEIGHT);
    }, [start]);

    const more = () => {
        const newItems = [];
        for (let i = 0; i < ADD_COUNT; i++) {
            newItems.push(itemId++);
        }

        setItems(prev => {
            return [...prev, ...newItems];
        });
    };

    const updatePaddingTop = currentStart => {
        const start =
            Math.floor(currentStart) - ROW_COUNT / 2 < 0
                ? 0
                : Math.floor(currentStart) - ROW_COUNT / 2;
        setPaddingTop(start * ROW_HEIGHT);
    };

    return (
        <div className="App" style={{ paddingTop: paddingTop + 'px' }}>
            {slicedItems.map(item => (
                <div key={`item-${item}`} className="item">
                    <h1>{item}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;
