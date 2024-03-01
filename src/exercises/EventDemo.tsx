import { useState } from "react";
import ImageButton from "../components/ImageButton.tsx";

const EventDemo = ({ title }: BaseProps) => {
    const [textFromBtn, setTextFromBtn] = useState("");
    return (
        <>
            <h2>{title}</h2>
            <ImageButton
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                alt="WhatsApp"
                onClick={() => setTextFromBtn("Phone Button")}
            />
            <ImageButton
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dc/Teacup.svg"
                alt="TeaCup"
                onClick={() => setTextFromBtn("TeaCup Button Clicked!")}
            />
            <ImageButton
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d4/Star_by_Gis%C3%A8le.png"
                alt="Star"
                onClick={() => setTextFromBtn("Start Button Clicked!")}
            />
            <ImageButton
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6c/Thumbs_up_green_with_plus_sign.svg"
                alt="Plus"
                onClick={() => setTextFromBtn("+ Button Clicked!")}
            />
            <ImageButton
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flat_minus_icon_-_red.svg/240px-Flat_minus_icon_-_red.svg.png"
                alt="Minus"
                onClick={() => setTextFromBtn("- Button Clicked!")}
            />
            <h3>{textFromBtn}</h3>
        </>
    );
}

export default EventDemo;
