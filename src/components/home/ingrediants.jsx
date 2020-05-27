import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/menu-logo.png';
import Single from '../../images/single.png';
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

i {
  font-size:25px !important;
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
        <div className="col d-flex flex-column justify-content-center">
          <div className="mt-5">

            <ProductHeading className="d-flex justify-content-between">
              PRESENTACION:
              {' '}
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </ProductHeading>
            <Paragraph>Barras de 70 g.</Paragraph>
            <Paragraph>Sabor: Chocolate y Galletas con Crerna.</Paragraph>
          </div>

          <div className="mt-5">
            <ImageContainer src={LeftTable} alt="table" className="img-fluid" />
          </div>

          <div className="mt-5">
            <ProductHeading className="d-flex justify-content-between">
              MODO DE USO
              {' '}
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </ProductHeading>
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
            <ProductHeading className="d-flex justify-content-between">
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
              CONTRAINDICACIONES:
              {' '}

            </ProductHeading>
            <Paragraph>Personas con fenilcetonuria y alergicos a la leche y soya</Paragraph>

          </div>

          <div className="mt-5">
            <ImageContainer src={RightTable} alt="table" className="img-fluid" />
          </div>

          <div className="mt-5">
            <ProductHeading className="d-flex justify-content-between">
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
              PRESENTACION:
              {' '}

            </ProductHeading>
            <Paragraph>Barras de 70 g.</Paragraph>
            <Paragraph>Sabor: Chocolate y Galletas con Crerna.</Paragraph>
          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
);

export default Index;
