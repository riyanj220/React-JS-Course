import { useEffect, useState } from "react"


export const useFetch = <T>(url:string) => {
    const[data, setData] = useState<T | null>(null);
    const[loading , setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            }catch(error){
                console.error('Error fetching data', error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            // cleanup function
        }
    },[url]);

    return { data, loading };
}