import React, { Fragment } from "react"

import { Body } from "../Body"
import { Footer } from "../Footer"
import { GlobalStyles } from "../../elements"

export const Page = ({ children, ...props }) => (
  <div>
    <GlobalStyles />
    <Body {...props}>
      <Fragment>{children}</Fragment>
    </Body>
    <Footer />
  </div>
)
