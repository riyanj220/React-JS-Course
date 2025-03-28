import { Contact } from "../../Types.";

const apiUrl = "https://api.randomuser.me/";
const apiSeed = "codewithriyan";
const resultsCount = 10;


export const getContacts = async()=> {

    const url = `${apiUrl}?seed=${apiSeed}&results=${resultsCount}`;
    const resp = await fetch(url)
    const jsonResp = await resp.json();

    return jsonResp.results as Contact[];

}

export const getContactById = async(uuid:string)=> {

    const contacts = await getContacts();
    return contacts.find(contact => contact.login.uuid === uuid);
    
}   