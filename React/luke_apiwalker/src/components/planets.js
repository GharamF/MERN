import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Planets = props => {
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(res => {
                console.log(res);
                setPlanet(res.data);
            }).catch(error => {
                if (error.response && error.response.status === 404) {
                    setError(true);
                } else {
                    console.error(error)
                }
            })
    }, [props]);

    return (
        <div className="jumbotron">
            {
                !error ?
                    <>
                        <h3>{planet.name} </h3>
                        <p> Climate : {planet.climate}<br />
                        Terrain : {planet.terrain}
                            <br />
                        Surface Water :{planet.surface_water}
                            <br />
                        Population : {planet.population} </p>
                        <br />
                    </> :
                        <p>These aren't the droids you're looking for</p>
            }
        </div>
    )
}

export default Planets
