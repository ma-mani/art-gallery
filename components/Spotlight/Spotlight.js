import ArtPiecePreview from "../ArtPiecePreview";

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ data }) {
  const piece = getRandom(data);
  return <ArtPiecePreview data={piece}/>
}

