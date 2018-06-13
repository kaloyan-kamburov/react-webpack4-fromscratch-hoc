import React from 'react';

const Bla = ({ showModal, showModalUpdater}) => {
    return(
        <div>
            <button onClick={showModalUpdater}>Toggle</button>
            <div style={{display: showModal ? 'block' : 'none'}}>
                MODAL
            </div>
        </div>
    )
}

export default Bla; 