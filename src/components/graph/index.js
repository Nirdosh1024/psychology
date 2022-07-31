import React from "react";
import { useNavigate } from 'react-router-dom';

//components
import BarChart from "../BarChart";


//styles
import { GraphBackGround, Container, Button, Title, Chart } from './graph.style';


const Graph = ({ results, ideal, mean, median }) => {
    let navigate = useNavigate();
    return (
        <GraphBackGround>
            <Container>
                <Button onClick={() => navigate('/')}> X </Button>
                <Title>{results.Name}</Title>
                <Chart><BarChart results={results} ideal={ideal} mean={mean} median={median} /></Chart>
            </Container>
        </GraphBackGround>
    )
}

export default Graph;