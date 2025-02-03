import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto p-10 flex flex-col justify-between min-h-screen">
      <div>
        <ContactForm />
        <ContactList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
