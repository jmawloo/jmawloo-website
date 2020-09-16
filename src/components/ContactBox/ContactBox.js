import React from "react";
import ContactItem from "./ContactItem";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactBox = () => {
    return (
        <div className="text-box contact-box">
            <ContactItem icon={faFilePdf} name={"Resume"} link="somelinktoresume" />
            <ContactItem icon={faLinkedin} name={"LinkedIn"} link="somelinktoresume" />
            <ContactItem icon={faGithub} name={"GitHub"} link="somelinktoresume" />
        </div>
    );
};

export default ContactBox;