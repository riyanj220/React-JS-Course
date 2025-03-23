import { useEffect, useState } from "react";



const AutoCounter = () => {


    const [counterValue , setCounterValue] = useState(0);


    const startCounter = () => {
        const timer = setInterval(() => {
            setCounterValue(counterValue => {
                return counterValue + 1;
            });
            console.log('Counter value updated');
        },1000);
        return timer;
    }

    const stopCounter = () => {
        setCounterValue(counterValue-1);
    }

    const resetCounter = () => {
        setCounterValue(0);
    }

    useEffect(() => {
        // mount pe run hoga
        const timer = startCounter();

        // unmount pe run hoga
        return () => {
            clearInterval(timer);
        }
    },[]);

    return (
    <>
        <section className="mb-10 flex flex-col">
            <h2 className="text-2xl">Count is</h2>
            <p className="text-xl">{counterValue}</p>
            <div className="flex gap-4 mb-4 justify-center">
                <button onClick={startCounter} className="bg-blue-500 text-black border">Start Counter</button>
                <button onClick={stopCounter} className="bg-blue-500 text-black border"> Stop Counter</button>
            </div>

            <div className="flex justify-center">
                <button onClick={resetCounter} className="bg-blue-500 text-black border"> Reset Counter</button>
            </div>

        </section>
    </>

    )
}   

export default AutoCounter