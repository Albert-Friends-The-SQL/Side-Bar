import React from 'react';
import styled from 'styled-components';
import Content from './Content.jsx';

const ContentContainer = () => {
  const ContentContainer = styled.div`
    padding: 5px;
    display: flex;
    position: relative;
  `
  return (
    <ContentContainer>
      <Content/>
    </ContentContainer>
  )
}

export default ContentContainer;