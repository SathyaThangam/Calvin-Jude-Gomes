import React from 'react';
import InputApi from './examplespageUtils/ApiInput';

const Examplespage = () => {
    const styles = {
        general: {
            'textAlign': 'left',
            'padding': '100px 100px 10px 100px'
        }
    }
    return (
        <div id="examplesPage" style={styles.general}>
            <InputApi SubHeading={'Title'} />
            {/* <InputApi SubHeading={'Title'} CustomInput={['Title', 'Year']} /> */}
            {/* <InputApi SubHeading={'ID'} CustomInput={['ID']} /> */}
        </div>
    )
}

export default Examplespage;