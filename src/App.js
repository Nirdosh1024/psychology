import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//axios
import axios from "axios";

//components
import Filter from "./components/filter";
import Results from "./components/results";
import Graph from "./components/graph";

//styles
import { GlobalStyles } from "./Global.styles";
import { Wrapper, Heading } from "./App.style";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [personsToShow, setPersonsToShow] = useState([]);
    const [flag, setFlag] = useState(false);
    const [results, setResults] = useState();

    const handleFilterChange = (value, flag) => {
        if (value) {
        setPersonsToShow(value);
        setFlag(flag);
        }
    };

    let mean = Array.from(
        persons.reduce(
        (acc, obj) =>
            Object.keys(obj).reduce(
            (acc, key) =>
                typeof obj[key] == "number"
                ? acc.set(
                    key,
                    // immediately invoked function:
                    (([sum, count]) => [sum + obj[key], count + 1])(
                        acc.get(key) || [0, 0]
                    )
                    ) // pass previous value
                : acc,
            acc
            ),
        new Map()
        ),
        ([name, [sum, count]]) => ({ name, average: sum / count })
    );

    let median = Array.from(
        persons.reduce(
        (acc, obj) =>
            Object.keys(obj).reduce(
            (acc, key) =>
                typeof obj[key] == "number"
                ? acc.set(
                    key,
                    // immediately invoked function:
                    ((value) => [...value, obj[key]])(
                        acc.get(key) || []
                    )
                    ) // pass previous value
                : acc,
            acc
            ),
        new Map()
        ),
        ([name, value]) => ({
        name,
        median: value.reduce((med, ele, index, arr) => {
            arr = [...arr].sort((a, b) => a - b)
            let mid = arr.length >> 1;
            med = arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
            return med;
        }),
        })
    );

    const handleCardClick = (value) => {
        setResults(value);
    };

    useEffect(() => {
        axios.get("https://backserve.herokuapp.com/data").then((response) => {
        setPersons(response.data);
        });
    }, []);

    return (
        <>
        <BrowserRouter>
            <GlobalStyles />
            <Wrapper>
            <Heading>Dashboard</Heading>
            <Filter persons={persons} handleFilterChange={handleFilterChange} />
            </Wrapper>
            <Routes>
            <Route
                path="/"
                element={
                <Results
                    personsToShow={personsToShow}
                    flag={flag}
                    handleCardClick={handleCardClick}
                />
                }
            ></Route>
            <Route
                path="/Graph"
                element={<Graph results={results} ideal={persons[0]} mean={mean} median={median}/>}
            ></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
    };

export default App;
