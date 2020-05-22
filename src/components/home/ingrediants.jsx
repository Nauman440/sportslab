import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/menu-logo.png';
import Single from '../../images/single.png';
import Arrow from '../../images/arrow.png';
import ArrowRight from '../../images/arrow-right.png';
import LeftTable from '../../images/tablas-left.png';
import RightTable from '../../images/tablas-right.png';

const Wrapper = styled.section`
 margin-top:50px !important;
`;
const Container = styled.div``;

const ImageContainer = styled.img``;

const ProductHeading = styled.h2`
font-size:20px !important;

@media (max-width:900px){
  font-size: 12px !important;
}
`;

const Paragraph = styled.p`
margin:0px !important;
font-weight:bold;

@media (max-width:900px){
  font-size: 9px !important;
}

`;

const Index = () => (
  <Wrapper>
    <Container className="container">
      <div className="row">
        <div className="col-md-12 justify-content-center">
          <ImageContainer src={Logo} alt="imaage wrapper" className="mx-auto d-block" width="50%" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-end">
          <div className="mt-5">
            <ProductHeading>PRESENTACION: </ProductHeading>
            <Paragraph>Barras de 70 g.</Paragraph>
            <Paragraph>Sabor: Chocolate y Galletas con Crerna.</Paragraph>
          </div>

          <div className="mt-5">
            <ImageContainer src={LeftTable} alt="table" className="img-fluid" />
          </div>

          <div className="mt-5">
            <ProductHeading>MODO DE USO </ProductHeading>
            <Paragraph>
              Consumir 1 barra antes, durante o despues
              de la actividad fisica. Tambien como reemplazo
              a una comida o como snack de media manana o tarde.
            </Paragraph>
            <Paragraph>(*)Recomendaciones del fabricante</Paragraph>
          </div>

        </div>
        <div className="col d-flex flex-column justify-content-center align-items-end">
          <ImageContainer src={Single} alt="single choc" className="img-fluid" />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="mt-5">
            <ProductHeading>CONTRAINDICACIONES: </ProductHeading>
            <Paragraph>Personas con fenilcetonuria y alergicos a la leche y soya</Paragraph>

          </div>

          <div className="mt-5">
            <ImageContainer src={RightTable} alt="table" className="img-fluid" />
          </div>

          <div className="mt-5">
            <ProductHeading>PRESENTACION: </ProductHeading>
            <Paragraph>Barras de 70 g.</Paragraph>
            <Paragraph>Sabor: Chocolate y Galletas con Crerna.</Paragraph>
          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
);

export default Index;
