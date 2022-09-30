import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: white
}

button:hover {
    cursor: pointer;
}

:root {
    --primary-color: #27AE60;
    --primary-color-50: #93D7AF;
    --secundary-color: #EB5757;

    --gray-100: ##333333;
    --gray-50: ##828282;
    --gray-20: ##E0E0E0;
    --gray-0: ##F5F5F5;

}
`;

export default GlobalStyles;
