import React from 'react';
import styled from 'styled-components';
import leftImg from '../../images/barra_izq.png';
import rightImg from '../../images/barra_der.png';

const Wrapper = styled.section`
background-color:${(props) => props.theme.mahroon} !important;
padding:50px 0px 180px 0px;
`;

const Image = styled.img`
 width:50%
`;

const MainHeading = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '31'}px !important;
  @media (max-width: 1315px ) {
    font-size:28px !important;
  }
  @media (max-width: 1075px ) {
    font-size:20px !important;
    font-weight:normal !important;
  }

  @media (max-width: 570px ) {
    font-size:19px !important;
    font-weight:normal !important;
  }
`;

const ChockDiv = styled.div`
   border-right:1px solid #fff !important;
   @media (max-width: 570px ) {
    border-right:0;
    border-bottom:1px solid #fff;
    margin-bottom:25px !important;
    padding-bottom:20px !important;
  }

`;

const DescDiv = styled.div`

 width: 75% !important;
  
 @media (max-width:970px) {
   width: 100% !important;
 }
`;

const SubHeading = styled.h3`
letter-spacing:1px !important;
font-size: ${({ fontSize }) => fontSize || '22'}px !important;
@media (max-width: 1315px ) {
  font-size:21px !important;
}
@media (max-width: 1075px ) {
  font-size:15px !important;
  font-weight:normal !important;
}
`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col d-flex justify-content-end">
          <Image src={leftImg} alt="left-image" className="" />
        </div>
        <div className="col">
          <Image src={rightImg} alt="left-image" />
        </div>
      </div>
      <DescDiv className="row mx-auto justify-content-center mt-5">
        <ChockDiv className="col-sm-4 d-flex flex-column align-items-center">
          <MainHeading>AYUDA A LA</MainHeading>
          <SubHeading>RECUPERACION</SubHeading>
          <MainHeading fontSize={33}>MUSCULAR</MainHeading>
          <SubHeading fontSize={20}>ENTRENAMIENTO</SubHeading>
        </ChockDiv>
        <ChockDiv className="col-sm-4 d-flex flex-column align-items-center">
          <MainHeading>COMPLEMENTA</MainHeading>
          <SubHeading fontSize={24}>EL APORTE DIARIO</SubHeading>
          <SubHeading fontSize={18}>DE ENERIA Y PROTEINSA</SubHeading>
          <MainHeading fontSize={40}>DE LA DIETA</MainHeading>
        </ChockDiv>
        <ChockDiv className="col-sm-4 d-flex flex-column align-items-center">
          <MainHeading>COMPENSA EL</MainHeading>
          <SubHeading>DEFICIT PROTEICO</SubHeading>
          <MainHeading>EN PERSONAS</MainHeading>
          <SubHeading fontSize={26}>VEGETARIANOS</SubHeading>
        </ChockDiv>
      </DescDiv>
    </div>
  </Wrapper>
);

export default Index;
