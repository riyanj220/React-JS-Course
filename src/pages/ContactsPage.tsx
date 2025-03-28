import { Link } from "react-router-dom"
import { CONTACTS } from "../data/contacts"


export const ContactsPage = () => {
    return (
        <div>
              <h1>Contacts list:</h1>
                <ul>
                    {CONTACTS.map((contactItem)=>{
                        return <li key={contactItem.id}>
                                    <Link to={`/React-JS-Course/contacts/${contactItem.id}`}>{contactItem.name}</Link>
                                </li>
                    })}
                </ul>
        </div> 
    )
}