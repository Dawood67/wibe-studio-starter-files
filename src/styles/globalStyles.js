import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script"
import "@fontsource/sirin-stencil"

const GlobalStyle=createGlobalStyle`
  
  *,*::before,*::after
  {
    padding: 0;
    margin: 0;
  }

  body 
  {
      font-family: "Sirin Stencil";
      overflow-x: hidden;
  }

  h1,h2,h3,h4,h5
  {
    padding: 0;
    margin: 0;
  }

  a{
      color: inherit;
      text-decoration: none;
  }

`
export default GlobalStyle;