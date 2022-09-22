import React from "react" ;

import {Container,H1,Image,ContainerItens,Inputlabel,Input,Button} from "./styles";

import Casal1 from './assets/casal1.svg'
import Arrow from './assets/arrow.svg'

function App() {
  return (
    <Container>
      <Image alt="logo-casal1" src={Casal1}/>

         <ContainerItens>

          <H1>Olá</H1>

            <Inputlabel> Nome</Inputlabel>
            <Input placeholder="Nome"/>

            <Inputlabel>Idade</Inputlabel>
            <Input placeholder="Idade"/>

            <Button> < img alt= "Seta" src={Arrow}/> </Button>
         </ContainerItens>
      </Container>       
     
);
}
export default App;  
