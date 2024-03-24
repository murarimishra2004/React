import React, { useState } from 'react';

export default function BoxModel() {
    let [boxmodel, setBoxModel] = useState(false);    
    return (
        <>
            <button className='buttonBox' onClick={() => setBoxModel(!boxmodel)}>
                {boxmodel ? 'Thank you' : 'Enquiry'}
            </button>
            <div onClick={() => setBoxModel(!boxmodel)} className={`BoxModel ${boxmodel ? 'showboxmodel' : ''}`}>
                <div  className={`box ${boxmodel ? 'showbox' : ''}`}>
                    <p>Contact details</p>
                </div>
            </div>
        </>
    );
}
