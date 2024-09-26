//Worked on Contact List WS w/Joy, Kristen, Blake, Bertha, and Alexis


import { useState } from "react";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";
import "./App.css";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          setSelectedContactId={setSelectedContactId}
          selectedContactId={selectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
