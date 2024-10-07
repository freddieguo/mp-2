import {styled} from "styled-components";

const FooterDiv = styled.div`
    background-color: rgba(206, 136, 2, 0.44);
    border-top: 6px #231b0b solid;
    padding: 1.5%;
    font: italic small-caps bold calc(10px + 1vw) Papyrus, fantasy;
    @media (max-width: 700px) {
        font: italic small-caps bold calc(12px + 1vw) Papyrus, fantasy;
        border-top: 4px #231b0b solid;
    }
`;

export default function ArtworksFooter(){
    return(
        <FooterDiv>
            <p>The use of the Metropolitan Museum of Art Collection API is subject to these <a href="https://www.metmuseum.org/policies/terms-and-conditions">terms and conditions </a>&#169;</p>
        </FooterDiv>
    )
}