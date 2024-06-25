import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    position: absolute;
    top: 20px;
    nav {
        display: flex;
        align-items: center;
    }
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2 {
        margin-left: 130px;
        color: #cc493f;
    }

    a:hover {
        color: #cc493f;
    }
`;

export default HeaderStyled;