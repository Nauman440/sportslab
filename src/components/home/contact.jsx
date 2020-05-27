import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section``;

const SlantedDiv = styled.div`
position: relative;
width: 100%;
height: auto;
background-color:${(props) => props.theme.mahroon} !important;
box-sizing: border-box;
padding: 30px;
color: #fff;

&:after {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: inherit;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform: skewY(4deg);
}
`;

const ContactForm = styled.div`
background-color: #333;
width:100%;
height:500px !important;
`;

const FormHeading = styled.h1`
 font-weight:normal !important;
`;

const Form = styled.form`
`;

const Button = styled.button`
background-color:${(props) => props.theme.mahroon} !important;
`;

const Input = styled.input`
 padding:10px !important;
 border-radius:15px !important;
 margin-bottom:10px;

 ::placeholder {
   padding:-50px !important;
   margin:-20px !important;
   color:#000 !important;
   display:flex;
   justify-content: flex-start
 }
`;

const Index = () => (
  <Wrapper>
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-md-12">
          <SlantedDiv />
        </div>
        <div className="col-md-12">
          <ContactForm className="d-flex align-items-center justify-content-center">
            <div className="w-100 d-flex flex-column align-items-center">
              <FormHeading>Contactanos</FormHeading>
              <Form className="mt-5 w-50">
                <div className="form-row">
                  <div className="col">
                    <Input type="text" className="form-control" placeholder="Nombre" />
                    <Input type="text" className="form-control" placeholder="Celular" />
                    <Input type="text" className="form-control" placeholder="Correo" />
                    <Button type="submit" className="btn rounded-pill mt-4 d-block mx-auto">Send Message</Button>
                  </div>
                </div>
              </Form>
            </div>

          </ContactForm>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Index;
