import ArtPiecePreview from "../ArtPiecePreview";

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo}) {
  const piece = getRandom(pieces);
  return (
    <>
  <ArtPiecePreview pieces={piece} onToggleFavorite={onToggleFavorite} artPiecesInfo={artPiecesInfo}/>
  </>);
}
