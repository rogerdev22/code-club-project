import React from "react" ;

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Inputlabel,
  Input,
  Button,
  User
} from "./styles";

import Casal1 from './assets/casal1.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


function App() {
  const users=[
    {id:Math.random(),name:"Rodolfo",age:28},
    {id:Math.ramdow(),name:"Maria",age:21},
  ];
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
            <ul> 
              {users.map((users)=>(
              <User key = { users.id}>
                <p>{users.name} </p> <p> {users.age} </p>
                <button> <img src={Trash} alt="Lata-de-lixo"/> </button>
            </User>
            ))}  
           </ul>

        

      </ContainerItens>

   </Container>  
 );    

}
export default App;  
