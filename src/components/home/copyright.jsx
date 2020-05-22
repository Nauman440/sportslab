import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: #333 !important;
padding:5px !important;
`;

const Paragraph = styled.p`
color: #fff !important;
font-size:20px !important;
`;

const Container = styled.div``;

const Index = () => (
  <Wrapper>
    <Container className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Paragraph className="mx-auto">
            La informacion contenida es solo referencial.No presigue
            ni intenta diagnostico o tratamient. Consulte siempre a su
            medico o framaceutico.
          </Paragraph>
        </div>
      </div>
    </Container>
  </Wrapper>
);

export default Index;
