import React from 'react';
import List from './AttentionList';

const Attention = () => {

    const values = [
        '04/08/19 - Added support for eight digit IMDb IDs.',
        '01/20/19 - Supressed adult content from search results.',
        '01/20/19 - Added Swagger files (YAML, JSON) to expose current API abilities and upcoming REST functions.'
    ];

    const styles = {
        general: {
            'backgroundColor': '#5BC0DE',
            'width': '100%',
            'padding': '30px'
        }
    }
    return (
        <div className="" style={styles.general}>
            <h3>Attention Users</h3>
            <br />
            <List Values={values} />
            {/* <p>04/08/19 - Added support for eight digit IMDb IDs.</p> */}
            {/* <p>01/20/19 - Supressed adult content from search results.</p> */}
            {/* <p>01/20/19 - Added Swagger files (YAML, JSON) to expose current API abilities and upcoming REST functions.</p> */}
        </div>
    )
}

export default Attention;
