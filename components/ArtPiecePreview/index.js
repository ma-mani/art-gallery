import Image from "next/image";

export default function ArtPiecePreview({ data }) {
  return (
    <>
      <div key={data.slug}>
        <Image
          src={data.imageSource}
          width={350}
          height={200}
          alt="art piece image"
        ></Image>
        <div>{data.name}</div>
        <div>{data.artist}</div>
      </div>
    </>
  );
}
