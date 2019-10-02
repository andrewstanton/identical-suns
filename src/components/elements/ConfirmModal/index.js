import React from "react";
import styled from "styled-components";

import { Modal, Grid, Col, Button } from "../../utilities";

const ModalText = styled.div`
  margin-bottom: 1rem;
`;

export const ConfirmModal = ({ toggle, on, onConfirm, children }) => {
  return (
    <Modal on={on} toggle={toggle}>
      <h3>Confirm Delete?</h3>
      <ModalText>{children}</ModalText>
      <Grid>
        <Col>
          <Button
            modifiers={["danger", "block"]}
            onClick={e => onConfirm({ toggle })}
          >
            Confirm
          </Button>
        </Col>
        <Col>
          <Button modifiers={["default", "block"]} onClick={toggle}>
            Cancel
          </Button>
        </Col>
      </Grid>
    </Modal>
  );
};
