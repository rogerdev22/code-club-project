import React from "react" ;

import {Container,H1,P} from "./styles";

function App() {
   const hello="hello React com CSS 16:16 20/09 Localizado erro as 20:44 no Hh1";
  return (
    <Container>

      <H1>{hello}</H1>

     <P> Esse é o primeiro parágrafo</P>
     <P> Esse é o segundoo parágrafo</P>
    </Container>
  );
}
export default App;  
