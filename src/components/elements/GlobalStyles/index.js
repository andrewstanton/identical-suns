import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

import { Type, Color } from "../../utilities"

export const GlobalStyles = createGlobalStyle`
    ${normalize()};

    @import url('https://fonts.googleapis.com/css?family=Michroma&display=swap');

    *, html, body {
        box-sizing: border-box;
        font-size: ${Type.basesize};
        line-height: 180%;
    }

    html, body {
        font-family: ${Type.text};
        color: ${Color.grey};
        background-color: ${Color.orange};
    }

    fieldset {
        padding: 0;
        border: 0;
    }

    h1, h2, h3, h4, h5, h6, h7, h8, h9 {
        font-family: ${Type.header};
        margin: 0;
        margin-bottom: 0.5em;
        line-height: 1em;
    }

    p {
        font-family: ${Type.text};
        margin: 0;
    }

    a {
        text-decoration: none;
        
        &:hover {
            transition: all 0.2s ease;
            cursor: pointer;
            text-decoration: none;
        }
    }

    h1 {
        font-size: 3.25rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    .text-center {
        text-align: center;
    }
`
