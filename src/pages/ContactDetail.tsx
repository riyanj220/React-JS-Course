import { Params, useLoaderData } from "react-router-dom";
import { getContactById } from "../api/contacts/contactsApi";


type loaderArgs ={
    params: Params<string>
}

export const contactDetailsLoader = async({params}:loaderArgs)=> {
    const {contactId} = params;

    if(!contactId){
        throw new Error(`Contact ID not provided`);
    }

    const contact = await getContactById(contactId);

    if(!contact){
        throw new Error("Contact not found");
    }

    return {
        contact
    }
}

export const ContactDetailPage = () => {

    const {contact} = useLoaderData() as Awaited<ReturnType<typeof contactDetailsLoader>>;

    return (
        <>
            <h1>{contact?.name.first} {contact?.name.last}</h1>
            <p>{contact?.email}</p>
        </>
    );
}