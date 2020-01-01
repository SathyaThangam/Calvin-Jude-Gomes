import React from 'react'
import Intro from './LandingpageUtils/Intro';
import Poster from './LandingpageUtils/Poster';
import Attention from './LandingpageUtils/Attention';
import Sponser from './LandingpageUtils/Sponser';

const Landingpage = () => {
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
        <div id="landingPage" style={styles.general}>
            <div className="row">
                <div className="col-md-6" style={styles.paddingBottom}><Intro /></div>
                <div className="col-md-6" style={styles.paddingBottom}><Poster /></div>
            </div>
            <div className="row" style={styles.paddingBottom}>
                <Attention />
            </div>
            <div className="row">
                <Sponser />
            </div>
        </div>
    )
}

export default Landingpage;