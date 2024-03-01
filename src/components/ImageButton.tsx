interface ImageButtonProps {
    imageUrl: string;
    alt: string;
    onClick: () => void;
}

const ImageButton = ({imageUrl, alt, onClick}: ImageButtonProps) => {
    return (
        <button className="imageButton" onClick={onClick}>
            <img src={imageUrl}  alt={alt}/>
        </button>
    );
}

export default ImageButton;