import React from "react"
import styled from "styled-components"
import { darken } from "polished"

import { Color, Type, Wrapper, AlignCenter } from "../../utilities"

const MainFooter = styled.div`
  padding: 1rem 0;
  padding-bottom: 5rem;
  margin-top: 2rem;
  color: ${Color.white};
  font-family: ${Type.text};

  a {
    color: ${Color.white};

    &:hover {
      color: ${darken(0.4, Color.green)};
    }
  }
`

export const Footer = () => (
  <footer>
    <MainFooter>
      <Wrapper>
        <AlignCenter>
          Copyright &copy; {new Date().getFullYear()} - Identical Suns
        </AlignCenter>
      </Wrapper>
    </MainFooter>
  </footer>
)
