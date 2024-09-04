import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

function ContactCard({ contact }) {

    const { deleteContact } = useContext(ContactContext)

    const handleDelete = () => {
        deleteContact(contact.id)
    }

    return (
        <div className="bg-gray-700 text-white p-4 rounded-md" >
            <h2 className="text-xl font-bold capitalizes">{contact.name}</h2>
            <p className="text-gray-400 text-sm">{contact.phone}</p>
            <button
                className="bg-red-600 py-1 px-2 mt-3 rounded float-right hover:bg-red-500"
                onClick={handleDelete}
            >
                Eliminar
            </button>
        </div>
    )
}

export default ContactCard