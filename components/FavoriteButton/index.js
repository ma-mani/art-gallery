import Image from "next/image"


export default function FavoriteButton({ isFavorite, onClick }) {
    return (
    <button type="button" isFavorite={isFavorite} onClick={onClick}>
        <Image src="/assets/heart.svg" width={30} height={20} alt="heart button"/>
    </button>
    )
}
