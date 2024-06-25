// CardStyle.js
import styled from 'styled-components';

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    max-width: 220px;
    height: 500px;
    margin: 20px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.3em;
        color: #2c3e50;
        margin-bottom: 20px;
        text-align: center;
        color: #ff8a3c;
    }

    img {
        width: 150px;
        height: auto;
        border-radius: 15px;
        margin-bottom: 15px;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }
    }

    p {
        width: 200px;
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
        color: #4a4a4aaa;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .indicators {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 100px;

        span {
            width: 10px;
            height: 10px;
            background-color: #cc493f;
            border-radius: 50%;
            margin: 0 5px;
            transition: background-color 0.3s, transform 0.3s;

            &:hover {
                background-color: #cc493f;
                transform: scale(1.2);
            }
        }
    }
`;

export default CardStyled;
