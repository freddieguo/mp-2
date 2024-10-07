import ArtworksList from './components/artworks-list.tsx';
import {useEffect, useState} from "react";
import {styled} from "styled-components";
import {Artwork} from './types.ts';
import HeaderTitle from "./components/artworks-header.tsx";
import ArtworksFooter from "./components/artworks-footer.tsx";

const ParentDiv=styled.div`
    width: 100%;
    margin: auto;
    border: 6px #231b0b solid;

    @media (max-width: 700px) {
        border: 4px #231b0b solid;
    }
`;

export default function App() {
    const [data, setData] = useState<Artwork[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const rawData = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`);
                const {objectIDs}: { objectIDs: number[] } = await rawData.json();

                const pickArtworks: Artwork[] = [];
                for (let i = 0; i < objectIDs.length && pickArtworks.length < 20; i += 600) {
                    try {
                        const rawArtwork = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDs[i]}`);
                        const artwork: Artwork = await rawArtwork.json();

                        if (artwork.primaryImage && artwork.title && artwork.artistDisplayName) {
                            pickArtworks.push(artwork);
                        }
                    } catch (e) {
                        console.error(`Failed to fetch artwork with ID ${objectIDs[i]}: ${e}`);
                    }
                }
                setData(pickArtworks);
            } catch (e) {
                console.error("There was an error fetching the data: " + e);
            }
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.error("There was an error: " + e));
    }, []);

    return(
        <ParentDiv>
            <HeaderTitle/>
            <ArtworksList data={data}/>
            <ArtworksFooter/>
        </ParentDiv>
    )
}
