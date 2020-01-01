import React from 'react';
import { changeLog } from './ChangelogUtil/ChangelogData.js';

const Changelogpage = () => {
    let i = 0;
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
        <div id="changeLogPage" style={styles.general}>
            <div className="row" style={{ 'paddingBottom': '30px' }}>
                <h1>Change Log</h1>
            </div>
            <ul>
                {changeLog.map(arr => <div key={i++}><li>{arr.date}</li>{arr.body.map(value => <li key={i++} style={{ 'marginLeft': '30px' }}>{value}</li>)}</div>)}
            </ul>
        </div>
    )
}

export default Changelogpage;