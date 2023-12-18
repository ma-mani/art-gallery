import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

const ArtPieceDetailsPage = ({ pieces }) => {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);

  console.log(piece);

  return <ArtPieceDetails piece={piece}></ArtPieceDetails>;
};

export default ArtPieceDetailsPage;
