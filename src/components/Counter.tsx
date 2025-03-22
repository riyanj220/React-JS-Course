import { useState } from "react";



const Counter = () => {


    const [counterValue , setCounterValue] = useState(0);


    const increment = () => {
        setCounterValue(counterValue+1);
    }

    const decrement = () => {
        setCounterValue(counterValue-1);
    }

    const reset = () => {
        setCounterValue(0);
    }

    return (
    <>
        <section className="mb-10 flex flex-col">
            <h2 className="text-2xl">Count is</h2>
            <p className="text-xl">{counterValue}</p>
            <div className="flex gap-4 mb-4 justify-center">
                <button onClick={decrement} className="bg-blue-500 text-black border">- Decrement</button>
                <button onClick={increment} className="bg-blue-500 text-black border">+ Increment</button>
            </div>

            <div className="flex justify-center">
                <button onClick={reset} className="bg-blue-500 text-black border"> Reset</button>
            </div>

        </section>
    </>

    )
}   

export default Counter