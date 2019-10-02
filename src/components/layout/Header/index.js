import React, { Fragment } from "react"
import styled, { keyframes } from "styled-components"
import { darken } from "polished"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

import logo from "../../../images/logo.png"

import { Color, Type } from "../../utilities"
import { Link, StaticQuery, graphql } from "gatsby"

const ButterBar = styled.div`
  background-color: ${Color.white};
  color: ${Color.white};
  font-family: ${Type.header};
`

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  width: 90%;
  max-width: 1500px;
  margin: auto;
  height: 140px;
`

const SocialMedia = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
`

const AvailableBar = styled.div`
  font-size: 2rem;
  font-family: ${Type.header};
  font-weight: bold;
  background: ${Color.blue};
  color: ${Color.white};
  text-align: center;

  .now {
    font-size: 2rem;
    margin-left: 20px;
  }
`

const logoAnimation = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const LogoContainer = styled.div`
  img {
    animation: ${logoAnimation} 1s linear;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: translateY(-10px);
    }
  }
`

const SocialIcon = styled.a`
  display: inline-block;
  color: ${props => (props.color ? props.color : Color.blue)};
  font-size: 2rem;
  margin-left: 2rem;

  &:hover {
    color: ${props =>
      props.color ? darken(0.2, props.color) : darken(0.2, Color.blue)};
  }
`

export const Header = () => (
  <header>
    <ButterBar>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="Identical Suns" />
          </Link>
        </LogoContainer>
        <SocialMedia>
          <StaticQuery
            query={graphql`
              query getSocialLinks {
                site {
                  siteMetadata {
                    social {
                      facebook
                      youtube
                    }
                  }
                }
              }
            `}
            render={data => {
              const { social } = data.site.siteMetadata
              return (
                <Fragment>
                  <SocialIcon target="_blank" href={social.facebook}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </SocialIcon>
                  <SocialIcon
                    color={Color.red}
                    target="_blank"
                    href={social.youtube}
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </SocialIcon>
                </Fragment>
              )
            }}
          ></StaticQuery>
        </SocialMedia>
      </HeaderContainer>
      <AvailableBar>
        AVAILABLE <span className="now">NOW</span>
      </AvailableBar>
    </ButterBar>
  </header>
)
