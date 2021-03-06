import { useEffect, useState } from "react";
import TableContacts from "./tableContacts/TableContacts";


export const Contacts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const getContacts = async() => {
            
        try {
            setIsLoading(true);
            const response = await fetch('https://randomuser.me/api/?results=100');
            const { results, error } = await response.json();
            if (error) {
                throw new Error(error)
            }
            setData(results);
            setIsError(false);
            }
            catch (error) {
            setIsError(true);    
            }
            finally {
            setIsLoading(false);

            }
        };
        getContacts();
    }, [])
    if (isLoading) {
        return <div>...Loading</div>
    }

    if (isError) {
        return <div>...Error</div>
    }

    return (
        <>
         <div>
        <TableContacts data={data}/>
        </div>
        </>
    )
    }

