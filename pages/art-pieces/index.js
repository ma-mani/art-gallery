import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function ArtPiecesPage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <p>failed...</p>;
  if (isLoading) return <p>loading...</p>;
  return <ArtPieces data={data} />;
}