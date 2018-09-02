import React from 'react';
import IndividualAvenger from './individualavenger.js';

const AvengerList = (props) => {
    return(
        <div>
            {props.avengers.map(avenger => {
                return(
                    <IndividualAvenger avenger={avenger} />
                )
            })
        }
        </div>
    )
}

export default AvengerList;