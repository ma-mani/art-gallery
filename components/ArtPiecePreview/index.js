import Image from "next/image"

export default function ArtPiecePreview({ image, title, artist }) {
 return (
    <>
    <Image src={image} width={350} height={200} alt="art piece image"></Image>
    <div>{title}</div>
    <div>{artist}</div>
    </>
 )
}