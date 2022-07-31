import React, { useState } from "react";
import { Link } from "react-router-dom";


//styles
import {Container, Grid, Column, Name, Information, Heading, Instruction, Text, Wrapper, More} from "./results.style";

//image
import Barchart from "../../images/barchart.png";

const Results = ({ personsToShow, flag, handleCardClick }) => {
    const onCardClick = (person) => {
        handleCardClick(person);
    }

    if (personsToShow.length && flag) {
        return (
            <Container>
                <Grid>
                {personsToShow.map((person, index) => (
                <Column key={index} onClick={() => onCardClick(person)} >
                    <Link to="/Graph">
                    <div>
                        <img src={Barchart} alt="icon" width={90} height={90} />
                    </div>
                <Name>
                    <span>Name </span>
                        {person.Name}
                </Name>
                </Link>
                </Column>
            ))}
            </Grid>
            </Container>
        );
    } 
    else if(!flag) {
    return (
        <Wrapper>
        <Information>
            <Heading>Results are out !!!</Heading>
            <Instruction>Get Your results</Instruction>
            <Text>The results of your psychometric Test are out now. Get your results by Entering your name in the field provided. Get a insight in your personality. Hope we provided you with some exciting facts about your Personality. Have a great day.</Text>
            <More>Search Your Name to View Results</More>
        </Information>
        </Wrapper>
        );
    }
    else {
        return (
            <Wrapper>
            <Information>
                <Heading>No Such Person exists in the database</Heading>
                <Instruction>Try Searching different name</Instruction>
                <Text>Please check your spelling or try another person</Text>
            </Information>
        </Wrapper>
        ) 
    }
};

export default Results;
