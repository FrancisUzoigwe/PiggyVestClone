import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import pic from "../../Assets/piggyLogo.svg"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Wrap1>
            <Logo src={pic}/>
            <Navigation>
              <Navs to={"/save"}>Save</Navs>
              <Navs to={"/invest"}>Invest</Navs>
              <Navs to={"/stories"}>Stories</Navs>
              <Navs to={"/faqs"}>FAQs</Navs>
              <Navs to={"/resources"}>Resources</Navs>
            </Navigation>
          </Wrap1>
          <ButtonHold>
            <SignButton>Sign in</SignButton>
            <CreateButton>Create free account</CreateButton>
          </ButtonHold>
        </Main>
      </Container>
    </div>
  );
};

export default Header;
const SignButton = styled.div`
width: 100px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
background: white;
border: 1px solid black;
font-weight: 600;
border-radius: 10px;
transition: all 450ms;
border: 1px solid silver;

:hover{
  border: 1px solid #0D60D8;
  color: #0D60D8;
  cursor: pointer;
}
`;

const CreateButton = styled.div`
width: 200px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
background: rgb(41, 41, 41);
color: white;
font-weight: 600;
border-radius: 10px;
transition: all 450ms;

:hover{
  background: #0D60D8;
  cursor: pointer;
}
`;


const ButtonHold = styled.div`
width: 27%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Logo = styled.img`
width: 150px;
height: 30px;
object-fit: contain;

:hover{
    cursor: pointer;
}
`;


const Navs = styled(NavLink)`
color: black;
text-decoration: none;
font-weight: 600;
font-size: 18px;
`;


const Navigation = styled.div`
width: 100%;
height: 40px;
display: flex;
margin-left: 40px;
justify-content: space-between;
align-items: center;
`;


const Wrap1 = styled.div`
display: flex;
width: 57%;
justify-content: space-between;
align-items: center;
`;

const Main = styled.div`
  width: 85%;
  height: 80px;
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
