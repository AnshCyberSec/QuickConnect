import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";




const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        return contactLists;
        });

        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);


  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const filteredContacs = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

        setContacts(filteredContacs);
        return filteredContacs;
        });
  }

  return (
    <>
    
    
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className=" ml-1 absolute text-3xl text-white " />
          <input
          onChange={filterContacts}
            type="text"
            placeholder="Search contacts..."
            className=" h-10 flex-grow  rounded-md border border-white bg-transparent text-white pl-9"
          />
        </div>
        <AiFillPlusCircle 
        onClick={onOpen}
        className="cursor-pointer text-5xl text-white" />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
      <ToastContainer position="bottom-center"/>
    </>
  );
};

export default App;
