
import { useEffect } from 'react'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Error from '../Error/Error';
import Loader from '../Loader/Loader'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';

export default function App(){
   const dispatch = useDispatch()
   const isloading = useSelector(selectLoading);
   const isError = useSelector(selectError)

   useEffect (()=>{
        dispatch(fetchContacts())
   },[dispatch])
   

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