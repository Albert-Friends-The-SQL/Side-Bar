import React from 'react';
import styled from 'styled-components';
import sizeTable from '../../../../../size.json'
import Size from './Size.jsx'
import $ from 'jquery';

const Content = () => {

  const hide = () => {
    $('.outofstock').css({
      "visibility": "hidden",
      "opacity": "0"
    });
  }

  const Header = styled.div`
    font-size: 28px;
    font-weight: bold;
    height: 8%;
  `

  const SubHeading = styled.div`
    margin-bottom: 10px;
  `
  const SizeChart = styled.div`
    height: 25%;
  `
  const SizeHeader = styled.div`
    margin: 5px 0px;
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
    font-family:'Rubik', sans-serif;
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
    font-family: 'Rubik';
  `
  return (
    <div>
      <Header>Find My Size</Header>
      <Exit onClick={hide}>X</Exit>
      <SubHeading>Select your size and we'll email you if it's back in stock</SubHeading>

      <SizeChart>
        <SizeHeader>Size <Required>*</Required></SizeHeader>
        {sizeTable.map((shoe, index) => { return <Size shoe={shoe} key={index}>size</Size> }
        )}
      </SizeChart>
      <div>
        <Email type="email" placeholder="Email" required></Email>
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
      <Button>Sign Up →</Button>
      <p>By clicking Sign Up, you have read and agreed to the adidas <u>Privacy Notice</u></p>
    </div>

  )
}

export default Content;