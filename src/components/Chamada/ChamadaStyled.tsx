import styled from 'styled-components';

const ChamadaStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  text-align: start;
    margin-left: 120px;
  h1 {
    font-size: 3.8em;
    font-weight: 500;
  }

  span {
    color: #df3f34;
  }

  p {
    margin-top: -20px;
    width: 380px;
  }

  input {
    width: 300px;
    padding: 10px 20px;
    border-right: none;
    border: 2px solid #fff;
  }

  button {
    cursor: pointer;
    padding: 10px 30px;
    border: 2px solid #df3f34;
    background-color: #df3f34;
    border-left: none;
    color: #eee;
  }

  input, button {
    box-shadow: 0px 0px 10px #989898;
  }

  input:focus {
    outline: none;
  }

  form {
    margin-top: 20px;
  }
`;

export default ChamadaStyled;
