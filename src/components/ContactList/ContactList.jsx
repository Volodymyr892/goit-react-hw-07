import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectVisibleContacts } from "../../redux/contactsSlice"



export default function ContactList() {
    
    const visibleContacts = useSelector(selectVisibleContacts)
    return (
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
  }
