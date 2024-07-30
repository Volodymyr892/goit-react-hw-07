
import { useEffect } from 'react'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Error from '../Error/Error';
import Loader from '../Loader/Loader'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';

export default function App(){
   const dispatch = useDispatch()
   const isloading = useSelector((state) => state.contacts.loading);
   const isError = useSelector((state) => state.contacts.error)

   useEffect (()=>{
        dispatch(fetchContacts())
   },[dispatch])
    // const [contacts, setContacts] = useState(() => {
    //         const savedContacts = localStorage.getItem('contacts');
    //         return savedContacts ? JSON.parse(savedContacts) : contact;
    //     });
    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    // const addContact = (newContact) =>{
    //     setContacts((prevContacts)=>{
    //         return[...prevContacts, newContact ]
    //     })}
    
    // const deleteContact =(contactId)=> {
    //     setContacts((prevContacts)=>{
    //         return prevContacts.filter(contact => contact.id !== contactId)
    //     }

    //     )
    // }

    // const visibleContacts = contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()))

    return(
        <div className={css.appContainer}>
         <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox/>
        {isloading && <Loader/>}
        {isError && <Error/>}
        <ContactList  />
        </div>
    )
}