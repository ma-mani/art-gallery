import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview pieces={piece} onToggleFavorite={onToggleFavorite}  />
        </li>
      ))}
    </ul>
  );
}
