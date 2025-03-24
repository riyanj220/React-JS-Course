import { useEffect, useState } from "react"

export const Practice = () => {

    const[button , toggleButton] = useState(true);
    const[effectContent , setEffectContent] = useState('');

    const handleClick = () => {
        toggleButton(!button);
    }

    useEffect(() => {
        if(button){
            setEffectContent('Button is True');
        }
        else{
            setEffectContent('Button is False');
        }
    },[button])

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <p>{button? 'True': 'False'}</p>

            <div className="mt-50">
                <p>Use Effect </p>
                <p>{effectContent}</p>
            </div>
        </>
    )
}