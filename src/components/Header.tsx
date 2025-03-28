import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="navbar bg-base-100 shadow-lg px-6 py-4">
            <div className="flex-1">
                <Link to= {'/React-JS-Course'} className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className="menu-item">
                        <Link to={'/React-JS-Course/contacts'}>Contacts</Link>
                    </li>
                    
                </ul>
            </div>
        </header>
    );
};
