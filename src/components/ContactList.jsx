/* eslint-disable react/prop-types */
import Contact from "./Contact";

const listItemStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 25,
};
// eslint-disable-next-line react/prop-types
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul style={listItemStyles}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
