
const Button = ({text}: {text:string}) => {

    if(!text){
        text = "Submit";
    }

    return (
        <>
            <button className="bg-blue-500">{text}</button>
        </>
    );
}

export default Button