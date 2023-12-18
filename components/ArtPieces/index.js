import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview pieces={piece} />
        </li>
      ))}
    </ul>
  );
}
