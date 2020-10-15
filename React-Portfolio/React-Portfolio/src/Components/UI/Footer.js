import React from 'react';
import Radium from 'radium';

const styles = {
    footer : {
        backgroundColor : 'purple',
        color : 'white',
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        height : '10vh'
    }
}


const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>footer</p>
        </footer>
    )
};

export default Radium(Footer);