import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} width={350} height={200} alt="art piece image"></Image>
      <div>{artist} </div>
    </div>
  );
}
