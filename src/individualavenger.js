import React from 'react';

const IndividualAvenger = (props) => {
    return(
        <div>
            <p>Name: {props.avenger.name}</p>
            <p>Hair: {props.avenger.hair}</p>
            <br></br>
        </div>
    )
}

export default IndividualAvenger;