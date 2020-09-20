import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactItem = (props) => {
    return (
        <div className="contact-item">
            <a className="icon" href={props.link}>
                <FontAwesomeIcon className="fa-icon" icon={props.icon} size="4x" />
                <FontAwesomeIcon className="fa-icon-mobile" icon={props.icon} size="3x" />
            </a>
            <p><strong>{props.name}</strong></p>
        </div>
    );
};

export default ContactItem;