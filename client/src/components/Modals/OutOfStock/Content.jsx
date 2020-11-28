import React from 'react';
import styled from 'styled-components';
import sizeTable from '../../../../../size.json'
import Size from './Size.jsx'
import $ from 'jquery';
import ReactDOM from 'react-dom';

const Content = ({open, onClose}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <Overlay>
      <Container>
      <Header>Find My Size</Header>
      <Exit onClick={onClose}>X</Exit>
      <SubHeading>Select your size and we'll email you if it's back in stock</SubHeading>
      <SizeHeader>Size <Required>*</Required></SizeHeader>
      <SizeChart>
        {sizeTable.map((shoe, index) => { return <Size shoe={shoe} key={index}>size</Size> }
        )}
      </SizeChart>
      <div>
        <Email type="email" placeholder='Email' required></Email>
      </div>
      <AgeDiv>
        <form>
          <input type="checkbox" name="age" />
          <label htmlFor="age">Yes, I am over 13 years old <Required>*</Required></label>
        </form>
      </AgeDiv>
      <AgeDiv>
        <form>
          <input type="checkbox" name="signup" />
          <label htmlFor="signup">Sign me up to adidas Creators Club, featuring exclusive offers, latest product info, news about upcoming events and more. Please see our Terms & Conditions and Privacy Policy and Creators Club Terms & Conditions for more details. I agree to receive personalised email marketing messages from adidas America, Inc. and runtastic GmbH ("runtastic"). <Required>*</Required></label>
        </form>
      </AgeDiv>
      <Button className="signUpButton"><Wrapper><SignUp>SIGN UP</SignUp> <Arrow>→</Arrow></Wrapper></Button>
      <Paragraph>By clicking Sign Up, you have read and agreed to the adidas <u>Privacy Notice</u></Paragraph>
      </Container>
    </Overlay>
    </>,
    document.getElementById('portal')
  )
}

export default Content;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
background-color: #fefefe;
margin: 12% auto; /* 15% from the top and centered */
padding: 1%;
border: 1px solid black;
width: 50%; /* Could be more or less, depending on screen size */
height: 60%;
position: relative;
transition: visibility 1s, opacity 0.5s;
`

const Overlay = styled.div`
display: flex;
position: fixed;
z-index: 1000;
left: 0;
top: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.5);
justify-content: center;
align-items: center;
`

const Header = styled.div`
    font-size: 28px;
    font-family: 'adineue PRO KZ Bold';
    height: 8%;
  `

  const SubHeading = styled.div`
    margin-bottom: 10px;
    font-family: "AdihausDIN";

  `
  const SizeChart = styled.div`
    display:flex;
    height: 17%;
    flex-wrap: wrap;

  `
  const SizeHeader = styled.div`
    margin: 5px 0px;
    font-family: "AdihausDIN";
  `
  const Required = styled.span`
    color: red;
  `

  const AgeDiv = styled.div`
    margin-top: 10px;
  `
  const Email = styled.input`
    width: 100%;
    min-height: 50px;
    font-size: 20px;
  `
  const Button = styled.button`
    margin-top: 40px;
    height: 50px;
    width: 200px;
    color: white;
    background-color: black;
    justify-content: space-between;
    font-family: "AdihausDIN";
    font-size: 18px;
    position: relative;
    cursor: pointer;
  `
  const Span = styled.span`
  height: 10%;
  width: 100%;
  `
    const Exit = styled.button`
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid black;
    top: 5px;
    right: 5px;
    font-size: 32px;
    font-family: 'Arial';
  `
  const Paragraph = styled.p`
    font-family: "AdihausDIN";
  `

  const SignUp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    letter-spacing: 2px;
    margin-left: 5%;
  `
  const Arrow = styled.div`
  font-size: 13px;
  margin-right: 5%;
`

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `