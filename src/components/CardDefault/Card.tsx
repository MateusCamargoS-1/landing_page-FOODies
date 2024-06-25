import CardStyled from "./CardStyle";

interface CardProps {
    title: string;
    imgCard: string;
    description: string;
}

const Card = ({title, imgCard, description}: CardProps) => {
    return (
        <CardStyled>
            <h1>{title}</h1>
            <div>
                <img src={imgCard} alt="Delicious Pizza" />
            </div>
            <p>
                {description}
            </p>
            <div className="indicators">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </CardStyled>
    );
}

export default Card;
