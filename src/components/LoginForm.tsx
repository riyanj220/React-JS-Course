import { SyntheticEvent, useState } from "react";


export const LoginForm = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const [errorMsg , setErrorMsg] = useState('');


    const submitForm = (ev:SyntheticEvent) => {
        ev.preventDefault();

        const target = ev.target as HTMLFormElement;

        if(!email){
            setErrorMsg("Please enter your email");
            return;
        }

        else if(!password){
            setErrorMsg("Please enter your password");
            return;
        }

        console.log(target ,email ,password);
    }

    return (
        <form className="flex flex-col gap-4 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={submitForm}>
            <input
                onChange={(ev)=> {
                    setEmail(ev.target.value);
                }} 
                value={email}
                type="email" 
                placeholder="Enter your email" 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
                onChange={(ev) =>{
                    setPassword(ev.target.value);
                }}
                value={password}
                type="password" 
                placeholder="Enter your password" 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {
                errorMsg? 
                <p className="text-red-500">{errorMsg}</p>:null
            }

            <button 
                type="submit" 
                className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </form>
    );
    
}