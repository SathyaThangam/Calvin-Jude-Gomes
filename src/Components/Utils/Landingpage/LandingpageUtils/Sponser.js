import React from 'react'

const Sponser = () => {
    const styles = {
        general: {
            'width': '100%',
            'padding': '10px 0px 10px 0px',
            // 'paddingBottom': '100px'
        },
        header: {
            'backgroundColor': '#47AC65',
            'margin': 'none'
        },
        links: {
            'backgroundColor': 'white',
            'border': '1px solid #47AC65',
            'paddingTop': '10px'
        },
        anchors: {
            'textDecoration': 'none'
        }
    }
    return (
        <div className="" style={styles.general}>
            <div style={styles.header}>
                <h5 style={{ 'marginBottom': '0px', 'padding': '10px' }}>Sponsers</h5>
            </div>
            <div className="" style={styles.links}>
                <p style={{ 'padding': '10px' }}>
                    <a href="https://emby.media/" style={styles.anchors}>Emby</a>,&nbsp;
                    <a href="https://trakt.tv/" style={styles.anchors}>Trakt</a>,&nbsp;
                    <a href="http://filebot.net/" style={styles.anchors}>FileBot</a>,&nbsp;
                    <a href="https://www.cordcutting.com/" style={styles.anchors}>Cordcutting.com</a>,&nbsp;
                    <a href="https://reelgood.com/" style={styles.anchors}>Reelgood</a>,&nbsp;
                    <a href="http://xirvik.com/" style={styles.anchors}>Xirvik Servers</a>,&nbsp;
                    <a href="https://www.yidio.com/" style={styles.anchors}>Yidio</a>,&nbsp;
                    <a href="https://indexed.dk/" style={styles.anchors}>Indexed</a>,&nbsp;
                    <a href="https://mi.tv/co/programacion" style={styles.anchors}>mi.tv</a>,&nbsp;
                    <a href="https://couchpop.com/" style={styles.anchors}>Couchpop</a>,&nbsp;
                    <a href="https://key.video/" style={styles.anchors}>Key Video</a>,&nbsp;
                    <a href="https://www.whats-on-netflix.com/" style={styles.anchors}>What's on Netflix</a>,&nbsp;
                    <a href="https://www.iflicksapp.com/" style={styles.anchors}>iFlicks</a>,&nbsp;
                    <a href="https://paperleaf.ca" style={styles.anchors}>Paper Leaf</a>,&nbsp;
                    <a href="https://edureviewer.com" style={styles.anchors}>Edu Reviewer</a>,&nbsp;
                    <a href="https://craftresumes.com/resume-help/" style={styles.anchors}>CraftResumes</a>,&nbsp;
                    <a href="https://flixboss.com" style={styles.anchors}>Flixboss</a>,&nbsp;
                    <a href="https://dvdlady.com/" style={styles.anchors}>DVD Lady</a>,&nbsp;
                    <a href="https://StreamingMoviesRight.com/" style={styles.anchors}>StreamingMoviesRight</a>,&nbsp;
                    <a href="https://github.com/tritonmedia/triton/" style={styles.anchors}>TRITON</a>,&nbsp;
                    <a href="https://wpsetup.org" style={styles.anchors}>WP Setup</a>
                </p>
            </div>
        </div>
    )
}

export default Sponser;