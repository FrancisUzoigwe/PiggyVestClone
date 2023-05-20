import React from "react";
import styled from "styled-components";
import img1 from "../Assets/piggyApple.svg"
import img2 from "../Assets/piggyPlaystore.svg"
import girl from "../Assets/girl.png"
import realGirl from "../Assets/realGirl.png"
import myRent from "../Assets/myRent.png"
import investify from "../Assets/investify.png"
const LandingPage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <HolderLeft>
              <Big>
                The Better Way <br /> to Save & Invest.
              </Big>
              <Small>
                PiggyVest helps over 4 million customers achieve their financial
                <br />
                goals by helping them save and invest with ease.
              </Small>
              <CreateButton>Create free account</CreateButton>
              <DownloadHold>
                <Phone>
                  <Icon src={img1}/>
                  <Text>Get on Iphone</Text>
                </Phone>
                <Phone>
                  <Icon src={img2}/>
                  <Text>Get on Andriod</Text>
                </Phone>
              </DownloadHold>
            </HolderLeft>
            <HolderRight>
              <Tight>
              <Sub src={girl}/>
              <Gan src={realGirl}/>
              <Rent src={myRent}/>
              <Invest src={investify}/>
              </Tight>
            </HolderRight>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default LandingPage;
const Invest = styled.img`
width: 200px;
height: 90px;
position: absolute;
margin-left: -70px;
margin-top: 400px;
`;

const Rent = styled.img`
width: 200px;
height: 90px;
position: absolute;
margin-left: -450px;
margin-top: 190px;
`;

const Tight = styled.div`
width: 70%;
height: 90%;
`;
const Gan = styled.img`
position: relative;
width: 100%;
height: 98%;
margin-top: 35px;
margin-left: -30px;
border-radius: 20px;
object-fit: contain;
`;

const Sub = styled.img`
width: 27%;
height: 82%;
position: absolute;
`;

const Big = styled.div`
font-weight: 800;
margin-top: 170px;
font-size: 65px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Small = styled.div`
margin-top: 20px;
font-size: 17px;
font-weight: 500;
color: #2b2b2b;
`;

const Icon = styled.img`

`;

const CreateButton = styled.div`
width: 200px;
height: 45px;
margin-top: 35px;
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
const Text = styled.div``;


const Phone = styled.div`
width: 45%;
height: 40px;
display: flex;
align-items: center;
justify-content: space-evenly;
border: 1px solid silver;
border-radius: 10px;
border: 1px solid silver;
transition: transform 0.4s;

:hover{
  cursor: pointer;
  /* border:1px solid#0D60D8; */
  /* margin-bottom: 5px; */
  transform: translateY(-10px);
}
`;

const DownloadHold = styled.div`
margin-bottom: -9px;
width: 60%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 40px;
`;

const HolderLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;

const HolderRight = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Holder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
