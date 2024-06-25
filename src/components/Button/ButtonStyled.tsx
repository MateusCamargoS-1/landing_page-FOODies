import styled from "styled-components";

const ButtonStyled = styled.button`
    border: none;
    border-radius: 8px;
    padding: 3px 15px;
    background-color: #ffa39dd3;
    border: 2px solid #ffa39dd3;
    color: #333;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #fff;
        border: 2px solid #ffa39dd3;
    }
`;

export default ButtonStyled;