import React, { useState } from "react";

export function useLocalStorage(keyname, initialValue){
    
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    React.useEffect(()=>{
       setTimeout(()=>{
        try{
            const listItems = localStorage.getItem(keyname)
            let parsedItems;
            if(!listItems){
                localStorage.setItem(keyname, JSON.stringify(initialValue))
            }else{
                parsedItems = JSON.parse(listItems)
                setItem(parsedItems)
            }
        setLoading(false)
        }catch{
            setError(true)
            setLoading(false)
        }
       }, 2000)
    }, [])
    
    const saveItem= (newItem)=>{
        localStorage.setItem(keyname, JSON.stringify(newItem))
        setItem(newItem);
    }
    return {item, saveItem, loading, error};
}