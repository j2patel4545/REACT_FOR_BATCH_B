import React, { useContext, useEffect } from 'react'
import DigiContext from '../context/digiContext';

function One() {
    const { setAbc } = useContext(DigiContext);

           setAbc(1000);


    return (
        <div>
            hello from One
        </div>
    )
}

export default One;