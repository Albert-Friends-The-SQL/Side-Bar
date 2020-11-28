import React from 'react';
import data from '../../../../../sizeguide.json';
import styled from 'styled-components';
import Cell from './Cell.jsx';


const Table = ({category, index, sizes, header}) => {

  const Head = styled.div`
  /* border-right: 1px solid black; */
  background-color: ${header ? 'black !important' : 'white'};
  color: ${header ? 'white !important' : 'black'};
  display: flex;
  width: 130px;
  justify-content: center;
  height: 50px;
  align-items: center;
  position: sticky;
  left: 0;
  border-right: 2px solid black;
  background-color: white;
  font-family: 'AdihausDIN';
`

  return (
    <Container>
      <Chart>
        <Row >
          <Head >{category.name}</Head>
          {category.size.map((size, index)=> {
            return <Cell size={size} key={index} index={index} header={category.name === 'Measurement'}></Cell>
          })}
        </Row>
      </Chart>
    </Container>
  )
}

export default Table;

const Container = styled.div`
    display: flex;
    width: 80%
    font-size: 14px;

  `
  const Chart = styled.div`
    /* border: 1px solid black; */
    display: flex;
  `
  const Row = styled.div`
    /* border: 1px solid black; */
    display: flex;
    /* width: max-content; */
    align-items: stretch;
    min-width: 100%;
    /* position: relative; */
  `

