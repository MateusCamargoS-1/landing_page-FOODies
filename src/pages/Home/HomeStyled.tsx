import styled from 'styled-components';

import bgHome from '../../assets/img/bgHome.png';

const HomeStyled = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url(${bgHome});
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export default HomeStyled;
