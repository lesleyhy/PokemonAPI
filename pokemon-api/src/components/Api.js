import React, {useState, useEffect} from "react";
import axios from 'axios';

const Api = (props) => {
    const [state, setState] = useState("");

    // useEffect(()=>{
    //     fetch("https://pokeapi.co/api/v2/pokemon/")
    //     .then(response =>{
    //         return response.json()
    //     })
    //     .then(response =>{
    //         setState({
    //             poke: response.results
    //         })
    //     })
    // });

    const handleFetch = (e) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=> {setState(res.data.results)})
        .catch((error)=>{console.log(error)});
    }
    return(
        <div>
            <button onClick={(e)=>{
                handleFetch(e);
            }}>Fetch Pokemon</button>
            {state && state.map((item,i)=>{
                return (
                    <div key={i}>{item.name}</div>
                )})
            }
        </div>
    )
}

export default Api;