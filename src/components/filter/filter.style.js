import styled from "styled-components";

export const Input= styled.div`
    padding: 1.2rem 0;
    background-color: #219ebc;
    input {
        display: block;
        width: 50%;
        height: 4rem;
        margin: 0 auto;
        background-color: #ECFAFF;
        border: 2px solid #b3b3b3;
        font-size: 2rem;
        border-radius: 5px;
        &:hover {
            border-color: #0077b6;
            box-shadow: 2px 2px 5px rgba(0, 139, 248, 0.4);
        }
    }
`;