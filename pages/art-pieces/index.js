import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function ArtPiecesPage({ pieces }) {
  return <ArtPieces pieces={pieces} />;
}
