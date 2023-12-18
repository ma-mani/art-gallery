import useSWR from "swr";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight pieces={pieces} />
    </div>
  );
}
