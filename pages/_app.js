import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSwr from "swr";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug ? { slug, isFavorite: !piece.isFavorite } : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }

    console.log(artPiecesInfo);
  }

  const { data: pieces, isLoading, error } = useSwr(URL, fetcher);
  if (error) return <p>failed...</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </SWRConfig>
  );
}
