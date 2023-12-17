import ArtPiecePreview from "../ArtPiecePreview"

export default function ArtPieces({ data }) {
    console.log(data)
    return (
        <ul>
        {data.map((piece) => 
        <li key={piece.slug}>
            <ArtPiecePreview data={piece}/>
        </li>)}
        </ul>
    )
    }
