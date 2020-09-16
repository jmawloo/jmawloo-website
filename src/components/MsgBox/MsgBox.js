import React from 'react';


const MsgBox = (props) => {
    return (
        <div className="text-box message-box">
            <h1>{props.landCopy.header}</h1>
            <p>{props.landCopy.blurb}</p>
        </div>
    );
}

export default MsgBox;