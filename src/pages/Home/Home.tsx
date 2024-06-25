import Chamada from "../../components/Chamada/Chamada";
import Header from "../../components/Header/Header";
import HomeStyled from "./HomeStyled";

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeStyled>
                <Chamada></Chamada>
            </HomeStyled>
        </div>
    );
}

export default Home;