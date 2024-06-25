import Card from "../../components/CardDefault/Card";
import CardapioStyled from "./CardapioStyled";
import cardapio from "../../config/cardapio";

const Cardapio = () => {

    return (
        <CardapioStyled>
            {
                cardapio.map((item, index)=> (
                    <Card key={index} title={item.title} imgCard={item.imgCard} description={item.description}/>
                ))
            }
        </CardapioStyled>
    );
}

export default Cardapio;