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
    const getParagraphs = () => {
        return props.landCopy.blurb.map(para => {
            return <p>{para}</p>;
        });
    }

    return (
        <StyledMsgBox className="content-box message-box">
            <h1>{props.landCopy.header}</h1>
            {getParagraphs()}
        </StyledMsgBox>
    );
}

export default MsgBox;