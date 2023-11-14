import React, { useState } from 'react';

const MyComponent = ({props}) => {
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <div>
            <button onClick={toggleText} type="button" class="btn btn-secondary btn-lg">Услуги</button>
            {showText && <div style={{
                backgroundColor: '#f1f1f1',
                color: '#333',
                marginTop: "4%",
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                whiteSpace: "pre-wrap"
            }}>{props}</div>}
        </div>
    );
};

export default MyComponent;
