import React from 'react'

const AttentionList = ({ Values }) => {
    // console.log(Dates);
    let i = 0;
    return (
        <div>
            {Values.map(value => <p key={i++}>{value}</p>)}
        </div>
    )
}

export default AttentionList;