import React from 'react';

const URLField = ({ SubHeading, Urls }) => {
    let i = 0;
    return (
        <div>
            {Urls.map(url => <div key={i++}><p>{SubHeading}</p><p style={{ 'border': '1px solid #aaa', 'padding': '10px', 'color': '#777' }}>{url}</p></div>)}
        </div>
    )
}

export default URLField;