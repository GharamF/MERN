import React, { useState, useEffect } from 'react';
import axion from 'axios';

const People = props => {
    const [person, setPerson] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => { 
        setError(false);
        axion.get(`https://swapi.dev/api/people/${props.id}`).then(responde=> {
            console.log(responde);
            setPerson(responde.data);
        }).catch(error=>{
            if(error.response && error.response.status=== 404){
                setError(true);
            }else {
                console.error(error)
            }
        })
    } , [props]);

    return (
        <div className="jumbotron">
            {
                !error ? 
                <>
                <h3>{person.name}</h3> <br/>
                <p>Height: {person.height}<br/>
                Mass: {person.mass}<br/>
                Hair color: {person.hair_color}<br/>
                Skin color: {person.skin_color}<br/></p>
                </>:
                <p>These aren't the droids you're looking for</p>
            }
        </div> 
    )

}
export default People ; 