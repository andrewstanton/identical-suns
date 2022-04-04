import React from "react"
import styled from "styled-components"

import bandcampImg from "../../../images/bandcamp.png"
import itunesImg from "../../../images/itunes.png"
import amazonImg from "../../../images/amazon.png"

import { Color, Grid, Col, Type } from "../../utilities"

const StyledBuyNow = styled.div`
  padding: 2rem 0;

  h4 {
    color: ${Color.orange};
    font-family: ${Type.header};
    text-align: center;
    margin-bottom: 1.5rem;
  }

  ${Col} {
    text-align: center;

    img {
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const BuyNow = ({
  bandcamp = "https://bandcamp.com",
  amazon = "http://amazon.com",
  itunes = "http://itunes.com",
  ...props
}) => (
  <StyledBuyNow {...props}>
    <h4>BUY NOW</h4>
    <Grid modifiers="thirds">
      <Col>
        <a href={bandcamp} target="_blank">
          <img src={bandcampImg} alt="Bandcamp" />
        </a>
      </Col>
      <Col>
        <a href={amazon} target="_blank">
          <img src={amazonImg} alt="Amazon" />
        </a>
      </Col>
      <Col>
        <a href={itunes} target="_blank">
          <img src={itunesImg} alt="iTunes" />
        </a>
      </Col>
    </Grid>
  </StyledBuyNow>
)
