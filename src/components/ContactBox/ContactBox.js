import React from "react";
import ContactItem from "./ContactItem";
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import contactList from "../../static/copy/contact-links.json";

// Unfortunately you have to import the icons from the source code :(
const icons = [faFilePdf, faLinkedin, faGithub, faEnvelope];

const ContactBox = () => {
    const renderContactItems = (contacts, icons) => {
        let key = -1;
        return contacts.map((contact) => {
            key += 1;
            return (
                <ContactItem key={key} icon={icons[key]} name={contact.title} link={contact.link} />
            );
        })
    }

    return (
        <div className="content-box contact-box">
            {renderContactItems(contactList.contacts, icons)}
        </div>
    );
};

export default ContactBox;