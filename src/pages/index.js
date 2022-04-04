import React from "react"
import styled, { keyframes, css } from "styled-components"
import { graphql } from "gatsby"
import { lighten } from "polished"

import { Page, Header } from "../components/layout"
import { Wrapper, Grid, Col, Color, Media } from "../components/utilities"
import { BuyNow } from "../components/elements"

// Images
import wkcds from "../images/wk-cds.png"
import iscds from "../images/isuns-cds.png"
import wkimg from "../images/weekminded.jpg"
import isimg from "../images/isuns.jpg"

const Section = styled.div`
  position: relative;
  min-height: 500px;
`

const SectionTextarea = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 3rem 0;
  z-index: 100;

  ${Media.below.tablet`
    max-width: 100%;
    width: 100%;
  `}
`

const SectionFlex = styled.div`
  display: flex;
  height: 100%;
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
`

const bubbleAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const BubbleImage = styled.div`
  width: 600px;
  height: 600px;
  border: 20px solid ${lighten(0.5, Color.grey)};
  border-radius: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
    ${props => (!props.right ? `translateX(-25%)` : `translateX(25%)`)};
  z-index: 0;
  
  animation: ${bubbleAnimation} 1s linear;

  ${props => props.right && `right: 0`}
  ${props =>
    props.bckColor &&
    `
      background-color: ${props.bckColor};
    `}
  ${props =>
    props.back &&
    `
      background-image: url(${props.back});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    `}


  ${Media.below.desktop`
    width: 400px;
    height: 400px;

    transform: translateY(-50%) ${props =>
      !props.right ? `translateX(-10%)` : `translateX(10%)`};
  `}

  ${Media.below.tablet`
    display: none;
  `}
`

const CdImage = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  img {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1) rotate(-8deg);
    }
  }
`

const SectionWrapper = styled(Wrapper)`
  position: relative;
  max-width: 1000px;
`

const CustomSection = ({ justify, back, bckColor, children, ...props }) => (
  <Section {...props}>
    <SectionWrapper>
      <BubbleImage
        back={back}
        bckColor={bckColor}
        right={justify !== "flex-end" && true}
      />
      <SectionFlex justify={justify}>
        <SectionTextarea>{children}</SectionTextarea>
      </SectionFlex>
    </SectionWrapper>
  </Section>
)

const IndexPage = ({ data }) => {
  const { links } = data.site.siteMetadata
  const { weekminded, isuns } = links
  return (
    <Page>
      <Header />
      <CustomSection justify="flex-end" back={wkimg} bckColor={Color.white}>
        <h2 className="text-center">WEEK MINDED</h2>

        <CdImage>
          <img src={wkcds} alt="Week Minded CDs" />
        </CdImage>

        <ol>
          <Grid>
            <Col>
              <li>Saving It Up for Sunday</li>
              <li>Up All Night</li>
              <li>She Makes Me Happy</li>
              <li>No Vacancy</li>
              <li>Maybe Next Time</li>
              <li>Wanted Man</li>
              <li>Halfway There</li>
            </Col>
            <Col>
              <li>Miss Her Reminiscing</li>
              <li>Etched in Stone</li>
              <li>Silence in the Room</li>
              <li>I've Been Thinking</li>
              <li>All of a Sudden</li>
              <li>Endless Road</li>
              <li>Saturday Night Dream</li>
            </Col>
          </Grid>
        </ol>
        <BuyNow
          amazon={weekminded.amazon}
          itunes={weekminded.itunes}
          bandcamp={weekminded.bandcamp}
        />
      </CustomSection>
      <CustomSection back={isimg} bckColor={Color.black}>
        <h2 className="text-center">IDENTICAL SUNS</h2>

        <CdImage>
          <img src={iscds} alt="Identical Suns CDs" />
        </CdImage>

        <ol>
          <Grid>
            <Col>
              <li>Baby I'm Down</li>
              <li>Nothing I Can Do</li>
              <li>Coulda Sent a Reminder</li>
              <li>Show Me a Sign</li>
              <li>Yesterday Ended At Midnight</li>
            </Col>
            <Col>
              <li>E.M.I.L.Y.</li>
              <li>Common Ground</li>
              <li>The Turn</li>
              <li>Unraveled</li>
              <li>After the Lullaby</li>
            </Col>
          </Grid>
        </ol>
        <BuyNow
          amazon={isuns.amazon}
          itunes={isuns.itunes}
          bandcamp={isuns.bandcamp}
        />
      </CustomSection>
    </Page>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        links {
          weekminded {
            amazon
            cdbaby
            itunes
          }
          isuns {
            amazon
            cdbaby
            itunes
          }
        }
      }
    }
  }
`
