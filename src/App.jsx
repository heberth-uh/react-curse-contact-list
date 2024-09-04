import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <div className="bg-zinc-900 h-screen">
      <div className='container mx-auto p-10'>
        <ContactForm/>
        <ContactList/>
      </div>
    </div>
  )
}

export default App
