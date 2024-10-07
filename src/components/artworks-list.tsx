import { Artwork } from "../types";
import { styled } from "styled-components";

const ArtworkPreviewDiv = styled.div`
    background-color: #d79d61;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

const SingleArtworkDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 33%;
    margin: 2%;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.78);
    border: 6px #231b0b solid;
    border-radius: 25px;
    text-align: center;
    h1 {
        font: italic small-caps bold calc(16px + 2vw) Papyrus, fantasy;
    }
    p {
        font: italic calc(8px + 1vw) Papyrus, fantasy;
    }

    @media (max-width: 700px) {
        max-width: 80%;
        margin: 10px auto;
        border: 4px #231b0b solid;
        h1 {
            font: italic small-caps bold calc(26px + 2vw) Papyrus, fantasy;
        }
        p {
            font: italic calc(10px + 1vw) Papyrus, fantasy;
        }
    }
`;

export default function ArtworksList(props : { data:Artwork[] } ){
    return (
        <ArtworkPreviewDiv >
            {
                props.data.map((art: Artwork) =>
                    <SingleArtworkDiv key={art.objectID}>
                        <h1>{art.title}</h1>
                        <p>{art.medium}</p>
                        <img src={art.primaryImage} alt={`image of ${art.title}`} />
                        <p>{art.objectDate} {art.period}</p>
                        <p>{art.artistPrefix} {art.artistDisplayName}</p>
                    </SingleArtworkDiv>
                )
            }
        </ArtworkPreviewDiv>
    );
}