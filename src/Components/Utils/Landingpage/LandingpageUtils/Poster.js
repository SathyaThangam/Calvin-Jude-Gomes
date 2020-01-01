import React from 'react'
import PosterImage from '../../../../Images/poster.jpg';

const Poster = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={PosterImage} alt="" />
            </div>
            <div className="col-md-8">
                <h3 style={{ 'color': '#777' }}>Poster API</h3>
                <p>The Poster API is only available to patrons.</p>
                <br />
                <p>Currently over 280,000 posters, updated daily with resolutions up to 2000x3000.</p>
            </div>
        </div>
    )
}

export default Poster;