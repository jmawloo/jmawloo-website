import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactItem = (props) => {
    return (
        <div className="contact-item">
            <a className="icon" href={props.link}>
                <FontAwesomeIcon icon={props.icon} size="4x" />
            </a>
            <p><strong>{props.name}</strong></p>
        </div>
    );
};

export default ContactItem;