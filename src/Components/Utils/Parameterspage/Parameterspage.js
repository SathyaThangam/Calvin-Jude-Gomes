import React from 'react';
import Table from './ParameterspageUtils/ParameterTable.js';
import { Headings, Body1, Body2 } from './ParameterspageUtils/TableData.js';

const Parameterspage = () => {

    const styles = {
        general: {
            'textAlign': 'left',
            'padding': '100px 100px 10px 100px'
        },
        paddingBottom: {
            'paddingBottom': '30px'
        }
    }
    return (
        <div id="parametersPage" style={styles.general}>
            <div className="row">
                <h1>Parameters</h1>
            </div>
            <div className="">
                <h3 style={{ 'color': '#777', 'padding': '20px' }}>By ID or Title</h3>
                <Table Headings={Headings} Body={Body1} />
                <p style={{ 'textAlign': 'center', 'paddingTop': '20px' }}>*Please note while both "i" and "t" are optional at least one argument is required.</p>
                <h3 style={{ 'color': '#777', 'padding': '20px' }}>By Search</h3>
                <Table Headings={Headings} Body={Body2} />
            </div>
        </div>
    )
}

export default Parameterspage;