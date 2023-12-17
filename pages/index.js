import useSWR from "swr";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <p>failed...</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight data={data} />
    </div>
  );
}
