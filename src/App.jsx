import "./App.css";
import basicContacts from "./basicContacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const reqContacts = localStorage.getItem("contactList");
    if (reqContacts !== null) return JSON.parse(reqContacts);

    return basicContacts;
  });

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contacts));
    setFilteredContacts(contacts);
  }, [contacts]);

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const searchVal = e.target.value;
    setSearchValue(() => searchVal);

    setFilteredContacts(() =>
      contacts.filter((elem) => {
        return elem.name.toLowerCase().includes(searchVal.toLowerCase());
      })
    );
  };

  const handleSubmit = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const handleDelete = (id) => {
    setContacts((prev) =>
      prev.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleSubmit} />
      <SearchBox value={searchValue} handler={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
