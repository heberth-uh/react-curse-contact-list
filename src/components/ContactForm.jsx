import { useState, useContext } from "react";
import { ContactContext } from "../context/ContactContext";

export default function ContactForn() {

	const { createContact } = useContext(ContactContext)
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		createContact(name, phone)
		setName('')
		setPhone('')
	}

	const handleChangePhone = e => {
		const value = e.target.value;
		const regex = /^[0-9]{0,10}$/;

		if (regex.test(value)) {
			setPhone(value)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='bg-zinc-800 my-5 rounded-md p-5'>
			<h2 className="text-xl text-gray-300 font-semibold mb-3">Agregar contacto</h2>
			<input
				className="w-full mb-3 bg-zinc-600 p-3 text-gray-200 text-lg font-semibold rounded outline-none"
				placeholder='Nombre del contacto'
				onChange={(e) => setName(e.target.value)}
				value={name}
				autoFocus required
			/>
			<input
			className="w-full mb-3 bg-zinc-600 p-3 text-gray-300 rounded appearance-none outline-none"
				placeholder="Teléfono"
				onChange={(e) => handleChangePhone(e)}
				value={phone} required
			/>
			<button className="bg-gray-300 text-gray-800 hover:bg-gray-600 hover:text-gray-200 px-2 py-1 rounded">
				Guardar
			</button>
		</form>
	)
}
