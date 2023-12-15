import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art"
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher)
  if (error) return <p>failed...</p>
  if (isLoading) return <p>loading...</p>
  
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
