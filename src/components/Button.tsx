
const Button = ({text = "submit"}) => {
    return (
        <>
            <button className="bg-blue-500">{text}</button>
        </>
    );
}

export default Button