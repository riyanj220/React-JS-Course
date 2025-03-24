import { useContext } from "react";
import StickyNote from "./StickyNote";
import { AppContext } from "../AppContext";



export const Notes= () => {

    const {notes} = useContext(AppContext);
    
    return (
        <>
            <ul className="mx-auto place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {notes.map((noteItem)=> {
                    return(
                        <StickyNote  key = {noteItem.id} note = {noteItem}/>
                    );
                })}
            </ul>
        </>
    )
}