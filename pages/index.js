import useSWR from "swr";

import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces, onToggleFavorite, artPiecesInfo}) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight pieces={pieces} onToggleFavorite={onToggleFavorite} artPiecesInfo={artPiecesInfo}/>
      
    </div>
  );
}
