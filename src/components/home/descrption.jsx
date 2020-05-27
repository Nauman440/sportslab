import React from 'react';
import styled from 'styled-components';
import Desc from '../../images/desc.jpg';

const Wrapper = styled.section`
margin-top:-110px;
`;

const ProductHeading = styled.h2``;


const DescCol = styled.div`
background-image:url(${Desc});
background-position:center;
background-size:cover;

@media (max-width:980px) {
  display:none !important;
}
`;

const RowContainer = styled.div`
 width: 75% !important;
 border:7px solid #fff;
 box-shadow: 3px 5px 10px #555;
 @media(max-width: 568px) {
   width:100% !important; 
 }
`;

const DescWraper = styled.div`

@media (max-width:980px){
background-image:linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${Desc});
background-position:center;
background-size:cover;
}
`;

const Paragraph = styled.p`
@media (max-width:980px) {
  color: #fff !important;
}
`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid">
      <RowContainer className="row mx-auto bg-white">
        <DescCol className="col-lg-6" />
        <DescWraper className="col-lg-6 pt-4">
          <ProductHeading>DESCRIPCION DEL PRODUCTO: </ProductHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            {' '}

          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
        </DescWraper>
      </RowContainer>
    </div>
  </Wrapper>
);

export default Index;
