import ContactCard from './ContactCard'
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

function ContactList() {

  const { contacts } = useContext(ContactContext)

  if (contacts.length === 0) {
    return <h2>No hay contactos</h2>
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      }
    </div>
  )
}

export default ContactList
