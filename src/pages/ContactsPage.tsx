import { Link, useLoaderData } from "react-router-dom"
import { getContacts } from "../api/contacts/contactsApi"


export const contactsLoader = async()=> {
    const contacts = await getContacts();

    return {
        contacts
    }
}

export const ContactsPage = () => {
    
    const {contacts} = useLoaderData() as Awaited<ReturnType<typeof contactsLoader>>;
    
    return (
        <div>
              <h1 className="mb-4">Contacts list:</h1>
                <ul>
                    {contacts.map((contactItem)=>{
                        return <li key={contactItem.login.uuid}>
                                    <Link to={`/React-JS-Course/contacts/${contactItem.login.uuid}`}>{contactItem.name.first} {contactItem.name.last}</Link>
                                </li>
                    })}
                </ul>
        </div> 
    )
}