import React from 'react';
import  ReactDOM from "react-dom";
import App from "./App";
import Globalstyles from './globalstyles';

import createGlobalStyle from './globalstyles'
// ATENÇÃO NO REACT OS COMPONENTES SEMPRE IGUAL SANDUICHE:
// PAO RECHEIO PAO
// 

ReactDOM.render(
<>
<App/> <Globalstyles/>
</>,
document.getElementById("root")

);
