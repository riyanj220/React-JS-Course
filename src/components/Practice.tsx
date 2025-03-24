import { useState } from "react"


export const Practice = () => {
    const [value , setValue] = useState(false);

    const toggleValue = () => {
        setValue(!value);
    }

    return (
        <>
            <button onClick={toggleValue}>Click Me </button>
            <p>{value ? 'True' : 'False'}</p>
        </>
    );
}