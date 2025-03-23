import { SyntheticEvent, useState } from "react"
import { Button } from "./Button";


export const LoginForm2 = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitForm = (ev:SyntheticEvent) => {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        console.log(target , {
            email,
            password
        })
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <input
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Enter your email"
            />
            <input
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="Enter your password"
            />
            <Button text ="Submit"/>
        </form>
    );
}