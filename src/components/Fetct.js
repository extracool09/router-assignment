import React, {useState, useEffect} from "react";
import axios from "axios";


function Fetch() {
    const [data, setData]  = useState(null);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=20')
        .then((response) => {
            console.log(response)
            setData(response.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
        
    return(
        <div>
            <ul>
                {
                    data.map(data => <li key={data.id}>{data.results}</li> )
                }
            </ul>
            </div>
    )

}

export default Fetch;