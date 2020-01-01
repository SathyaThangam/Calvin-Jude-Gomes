import React from 'react'

const Footer = () => {
    const styles = {
        general: {
            'backgroundColor': '#ccc',
            'padding': '40px 100px 40px 100px',
            'textAlign': 'left'
        }
    }
    return (
        <div style={styles.general}>
            <p>API by Brian Fritz.</p>
            <p>All content licensed under CC BY-NC 4.0.</p>
            <p>This site is not endorsed by or affiliated with IMDb.com.</p>
        </div>
    )
}

export default Footer;