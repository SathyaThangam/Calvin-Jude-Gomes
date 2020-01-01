import React from 'react';
import URLField from './UsagepageUtils/URLField';

const Usagepage = () => {
    const subHeading = 'Send all data requests to:';
    const urls = [
        'http://www.omdbapi.com/?apikey=[yourkey]&',
        'http://img.omdbapi.com/?apikey=[yourkey]&'
    ]
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
        <div id="usagePage" style={styles.general}>
            <div className="row">
                <h1>Usage</h1>
            </div>
            <div>
                <URLField SubHeading={subHeading} Urls={urls} />
                {/* <p>Send all data requests to:</p>
                <p style={{ 'border': '1px solid #aaa', 'padding': '10px', 'color': '#777' }}>http://www.omdbapi.com/?apikey=[yourkey]&</p>
                <p>Send all data requests to:</p>
                <p style={{ 'border': '1px solid #aaa', 'padding': '10px', 'color': '#777' }}>http://img.omdbapi.com/?apikey=[yourkey]&</p> */}
            </div>
        </div>
    )
}

export default Usagepage;