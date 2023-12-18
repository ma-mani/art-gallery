import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSwr from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export default function App({ Component, pageProps }) {
  const { data: pieces, isLoading, error } = useSwr(URL, fetcher);
  if (error) return <p>failed...</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
      <Layout />
    </SWRConfig>
  );
}
