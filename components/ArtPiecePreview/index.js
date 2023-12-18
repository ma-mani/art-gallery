import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({ pieces, onToggleFavorite, artPiecesInfo}) {
  const isFavorite = artPiecesInfo.includes(pieces.slug)
  console.log(pieces)
  return (
    <>
      <div key={pieces.slug}>
        <Link href={`/art-pieces/${pieces.slug}`}>
          <Image
            src={pieces.imageSource}
            width={350}
            height={200}
            alt="art piece image"
          ></Image>
        </Link>
        <div>{pieces.name}</div>
        <div>{pieces.artist}</div>
        <FavoriteButton onClick={() => onToggleFavorite(pieces.slug)} />
      </div>
    </>
  );
}
