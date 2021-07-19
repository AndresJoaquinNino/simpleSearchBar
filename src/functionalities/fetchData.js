import {useState, useEffect} from "react";
const useFetch = (url) =>{
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    useEffect(() =>{
        fetch(url)
        .then(response => {
            if(!response.ok) throw Error ('No encontró datos en la fuente');
            return response.json();
        })
        .then(data => {
            setItems(data.results);
            setError(null);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    },[url])
    return {items, isLoading, error}
}
export default useFetch;