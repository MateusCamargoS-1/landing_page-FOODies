import ChamadaStyled from "./ChamadaStyled";

const Chamada = () =>{
    return (
        <ChamadaStyled>
            <div>
                <h1>
                    <span>Welcome</span> to<br/> The world of<br/> Testy & Fresh Food.
                </h1>
                <p>
                    Keep it easy with these simple but delicius recipes From make-ahead lunches and mindweek meals to fuss-free sides.
                </p>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Search, Burguer"/>
                    <button>Search</button>
                </form>
            </div>
        </ChamadaStyled>
    );
}

export default Chamada;