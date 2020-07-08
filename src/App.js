import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

const ADD_COUNT = 5;
const ROW_COUNT = 20;
const ROW_HEIGHT = 350;
const initData = [1, 2, 3, 4, 5];
let itemId = 6;
let lastRow = initData.length;
function App() {
    const [start, setStart] = useState(0);
    const [paddingTop, setPaddingTop] = useState(0);
    const [paddingBottom, setPaddingBottom] = useState(0);
    const [items, setItems] = useState(initData);
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
            updatePaddingBottom(currentStart);
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
        lastRow = items.length - 1;
    }, [items]);

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
        // 현재 스크린에 있는 아이템의 번호가 10번이라면, 1~9번에 차지하는 높이를 그대로 paddingTop 으로 사용.
        const start =
            Math.floor(currentStart) - ROW_COUNT / 2 < 0
                ? 0
                : Math.floor(currentStart) - ROW_COUNT / 2;
        setPaddingTop(start * ROW_HEIGHT);
    };

    const updatePaddingBottom = currentStart => {
        const s =
            Math.floor(currentStart) - ROW_COUNT / 2 < 0
                ? 0
                : Math.floor(currentStart) - ROW_COUNT / 2;
        let currentViewLastRow = s + ROW_COUNT;

        // 현재 마지막 번호가 노출되는 최대 번호보다 같거나 작으면 paddingBottom 이 필요없음.
        // 현재까지 받아온 마지막 row 번호 - 현재 노출되어 있는 마지막 row 번호
        if (lastRow <= currentViewLastRow) {
            currentViewLastRow = 0;
        } else {
            currentViewLastRow = lastRow - currentViewLastRow;
        }
        setPaddingBottom(currentViewLastRow * ROW_HEIGHT);
    };

    return (
        <div
            className="App"
            style={{ paddingTop: paddingTop + 'px', paddingBottom: paddingBottom + 'px' }}
        >
            {slicedItems.map(item => (
                <div key={`item-${item}`} className="item">
                    <h1>{item}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;
