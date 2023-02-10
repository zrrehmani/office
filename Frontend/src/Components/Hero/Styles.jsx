import styled from "styled-components";
const Main = styled.div`
  background-color: #ecf8fc;
  padding-top: 10rem;
  padding-bottom: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin-top: 2rem;
`;
const StepL = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`;
const Step = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SIcon = styled.div`
  width: 10%;
  padding: 1rem;
  background-color: white;
  color: #ff6868;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 1000;
  padding: 1rem;
  margin-right: 1rem;
`;
const Button = styled.button`
  background-color: #ff6868;
  border: none;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;
  width: 20%;
  color: white;
  padding-right: 1rem;
  cursor: pointer;
  :hover {
    background-color: #ff4d4d;
  }
  // on click shrink and grow
  :active {
    transform: scale(0.95);
  }
`;
const ButtonP = styled.p`
  margin: 0;
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
`;
const ButtonIcon = styled.p`
  margin: 0.5em 0 0.5em 1.5rem;
  font-size: 1.5rem;
  font-weight: 1000;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  color: #8c8a8a;
  font-size: 1.5rem;
  font-weight: 7000;
  margin: 3em;
`;
const IcomImg = styled.img`
  border: 1px solid #8c8a8a;
  width: 10%;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 50%;
`;
export {
  Main,
  Icons,
  StepL,
  Step,
  SIcon,
  Button,
  ButtonP,
  ButtonIcon,
  P,
  IcomImg,
};
