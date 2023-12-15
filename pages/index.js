import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getRandomPiece(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <p>failed...</p>;

  if (isLoading) return <p>loading...</p>;
  console.log(getRandomPiece(pieces));
  const piece = getRandomPiece(pieces);
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
      <Spotlight image={piece.imageSource} artist={piece.artist} />
    </div>
  );
}
