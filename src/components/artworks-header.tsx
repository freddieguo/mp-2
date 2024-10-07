import {styled} from "styled-components";

const HeaderDiv = styled.div`
    background-color: rgba(206, 136, 2, 0.44);
    border-bottom: 6px #231b0b solid;
    padding: 2.5%;
    font: italic small-caps bold calc(16px + 2vw) Papyrus, fantasy;
    p {
        font: italic calc(8px + 1vw) Papyrus, fantasy;
    }    
    @media (max-width: 700px) {
        border-bottom: 4px #231b0b solid;
        font: italic small-caps bold calc(10px + 2vw) Papyrus, fantasy;
        p {
            font: italic calc(10px + 1vw) Papyrus, fantasy;
    }
`;

export default function HeaderTitle(){
    return(
        <HeaderDiv>
            The Metropolitan Museum of Art Collection
            <p>Created by Freddie Guo</p>
        </HeaderDiv>
    )
}