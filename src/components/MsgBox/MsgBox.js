import React from 'react';
// import MsgBoxSVG from '../../static/img/msgbox.svg';
import styled from 'styled-components';

// For Message Box SVG; Experimental:
const StyledMsgBox = styled.div`
    // background-image: url('MsgBoxSVG');
    // background-repeat: no-repeat;
    // background-size: cover;
`;

const MsgBox = (props) => {
    return (
        <StyledMsgBox className="content-box message-box">
            <h1>{props.landCopy.header}</h1>
            <p>{props.landCopy.blurb}</p>
            <p id="more-blurb">{props.landCopy.moreBlurb}</p>
        </StyledMsgBox>
    );
}

export default MsgBox;