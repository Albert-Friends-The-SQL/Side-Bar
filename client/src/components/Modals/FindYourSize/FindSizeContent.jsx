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
    </SizeContent>
  )
}

export default Content;