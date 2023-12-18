import Link from "next/link";
import Image from "next/image";

const ArtPieceDetails = ({ piece }) => {
  return (
    <div>
      <Link href={"/art-pieces"}>⬅</Link>
      <Image
        src={piece.imageSource}
        width={300}
        height={300}
        alt="Art Details"
      ></Image>
      <span>{piece.name}</span>
      <span>{piece.artist}</span>
      <span>{piece.year}</span>
      <span>{piece.genre}</span>
    </div>
  );
};

export default ArtPieceDetails;
