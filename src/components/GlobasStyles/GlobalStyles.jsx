import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    body {
        overflow-x: hidden;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    h1{
      margin-block: 40px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
`;

export default GlobalStyle;
