import { createContext, useState, useEffect } from 'react'
import { contacts as data } from "../data/contacts.js";

export const ContactContext = createContext()

export function ContactContextProvider( props ) {

  const [contacts, setContacts] = useState([])
  
  useEffect(() => {
    setContacts(data)
  }, [])

  function createContact(name, phone) {
    const newContact = {
      'id': contacts.length + 1,
      name,
      phone
    } 
    setContacts([...contacts, newContact])
  }

  function deleteContact(id) {
    const updateContacts = contacts.filter(t => t.id != id)
    console.log(id, updateContacts)
    setContacts(updateContacts)
  }

  return (
    <ContactContext.Provider value={{
      contacts,
      createContact,
      deleteContact
    }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}
