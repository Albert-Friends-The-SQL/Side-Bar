import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const Content = () => {
  const hide = () => {
    $('.findSizeChart').css({
      "visibility": "hidden",
      "opacity": "0"
    });
  }
  const SizeContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
  height: 20%;
  position: relative;
`
  return (
    <SizeContent>
      <img src="https://adidasicons.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-17+at+4.27.17+PM.png"></img>
    </SizeContent>
  )
}

export default Content;