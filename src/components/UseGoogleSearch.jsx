import {useState, useEffect} from 'react'
import API_KEY from './key'
const CONTEXT_KEY= '3f1793916a2a35d59'

    const UseGoogleSearch = (term) => {

        const [data, setData] = useState(null);
    
        useEffect(() => {
            const fetchData = async () => {
                fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                    .then(response => response.json())
                    .then(response => {
                        setData(response)
                    })
            }
    
            fetchData().then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            });
        }, [term])
    
        return {data};
    };
    

export default UseGoogleSearch
