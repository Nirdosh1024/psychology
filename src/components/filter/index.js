import React, { useState, useEffect } from "react";


//styles
import { Input } from "./filter.style";


const Filter = ({ persons, handleFilterChange }) => {

    const [ filter, setFilter ] = useState('');
    
    const onFilterChange = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {
        if(filter) {
            const searchTerm = filter.toUpperCase();
            const filtered = () => persons.filter(function(person) {
                if(person.Name) {
                    const name = person.Name.toUpperCase();
                    return name.startsWith(searchTerm);
                }
            })
            handleFilterChange(filtered, true);
        }
        else {
            handleFilterChange([], false);
        }
    }, [filter])
    return (
        <>
        <Input><input value={filter} onChange={onFilterChange} placeholder="Filter By Name"/></Input>
        </>
    )
}

export default Filter; 