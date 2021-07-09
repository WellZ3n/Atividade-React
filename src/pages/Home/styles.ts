import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-left: 25px;
  float: left;
  color: #f5f5f5;
  font-size: 48px;
  max-width: 300px;
  line-height: 56px;

  margin-top: 0px;
`;

export const Form = styled.form`
  margin-left: 550px;
  max-width: 700px;
  margin-top: 80px;
  margin-right: 50px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #a10000;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#940000')}
    }
  }
`;

export const Pokemons = styled.div`
  margin-top: 80px;
  max-width: 100%;

  a {
    float: left;
    margin-left: 2%;
    margin-bottom: 1%;
    background: #fff;
    border-radius: 10px;
    width: 30%;
    padding: 5px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    transition: transform 0.5s;

    &:hover {
      transform: translate(15px);
    }

  img {
    width: 100px;
    height: 100px;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong{
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
}
`;
