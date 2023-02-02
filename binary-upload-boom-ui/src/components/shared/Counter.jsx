import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [ count, setCount ] = useState(2);

    useEffect( () => {
        document.title = `${count} anchovy pizzas right out of the oven`
    })

    return (
        <div>
            The penguins are currently making {count} anchovy pizzas! 
            <button onClick={() => setCount(count + 1)}>
                Go higher
            </button>
        </div>
    );
}

// Learned about useState from https://reactjs.org/docs/hooks-state.html