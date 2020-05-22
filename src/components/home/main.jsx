import React from 'react';
import styled from 'styled-components';
import main from '../../images/cover.png';

const Wrapper = styled.section`
margin:10px 0px !important;
`;

// const Heading = styled.h1`
//   font-size:30px;
// `;

const Image = styled.img`
// transform: rotate(130deg);
`;

const Container = styled.div`
margin:0px !important;
padding:0px !important;
`;


const Index = () => (
  <Wrapper>
    <Container className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Image src={main} alt="main image" className="img-fluid" />
        </div>
      </div>
    </Container>
  </Wrapper>
);

export default Index;
