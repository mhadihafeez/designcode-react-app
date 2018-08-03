import React, { PureComponent } from 'react';
import styled from 'styled-components'


const Title = styled.h1`
  font-weight: 600;
  font-size: 42px;
  text-transform: uppercase;
  color: white;
  text-align: center;
  padding-top: 100px;
  margin: 0;
`

const Background = styled.div`
  background:black;
  height: 180px;
`

class Workshops extends PureComponent {

  render() {
    return (
      <div>
        <Background>
          <Title>Workshops</Title>
        </Background>
      </div>
    );
  }

}

export default Workshops;
