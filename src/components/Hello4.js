import React from 'react';

import HelloContext from './HelloContext';

const Hello4 = () => {

    const HelloContextUsed = React.createContext(HelloContext);
    return (
        <div>
            <p>Hello4 Component</p>
            <p style={HelloContextUsed.myStyle}>Style applied to this element</p>
        </div>
    )
}

export default Hello4;
