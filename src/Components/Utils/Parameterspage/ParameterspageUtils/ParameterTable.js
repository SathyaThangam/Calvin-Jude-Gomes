import React from 'react'

const ParameterTable = ({ Headings, Body }) => {

    let i = 0;
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {Headings.map(heading => <th key={i++}>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    Body.map(elem => <tr key={i++}>{elem.map(rowval => <td key={i++}>{rowval}</td>)}</tr>)
                }
            </tbody>
        </table>
    )
}


export default ParameterTable;