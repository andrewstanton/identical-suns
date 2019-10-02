import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { applyStyleModifiers } from "styled-components-modifiers";

import { Color, Button, Portal } from "../";

const MODAL_MODIFIERS = {
  large: () => `
    width: 1400px;
  `,
};

const ModalWindow = styled.div`
  position: relative;
  background-color: ${Color.white};
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 600px;
  max-width: 90%;
  margin-top: 50px;
  padding: 2rem;

  ${applyStyleModifiers(MODAL_MODIFIERS)};
`;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2000;
  overflow: auto;
`;

const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const Modal = ({ toggle, on, children, modifiers }) => (
  <Fragment>
    {on && (
      <Portal>
        <ModalBackdrop>
          <ModalWindow modifiers={modifiers}>
            <ModalClose>
              <Button modifiers="default" onClick={toggle}>
                <FontAwesomeIcon icon="times" />
              </Button>
            </ModalClose>
            {children}
          </ModalWindow>
        </ModalBackdrop>
      </Portal>
    )}
  </Fragment>
);
