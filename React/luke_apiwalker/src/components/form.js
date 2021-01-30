import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Form = props => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState('1');

    const search = event => {
        event.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return (
        <div className="jumbotron">
            <form onSubmit={search}>
                <label>Search For  :   </label>
                <select className="form-control" onChange={e => setCategory(e.target.value)} value={category} >
                    <option value='people'> People </option >
                    <option value='planets'> Planets </option >
                </select>
                <label> ID :   </label>
                <input className="form-control" type='number' min='1' onChange={e => setId(e.target.value)} value={id} />
                <input type="submit" className="btn btn-info" value="Search" />
            </form>
        </div>
    )
}

export default Form;