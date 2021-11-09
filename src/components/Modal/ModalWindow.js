import React from "react";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import errors from "../../utils/errors.json";

function ModalWindow({ error, hendleChangeError }) {
  return (
    <Modal
      size="sm"
      show={error}
      onHide={() => hendleChangeError(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errors.wrongCityName}</Modal.Body>
    </Modal>
  );
}
let mapStateToProps = (state) => {
  return state.weather;
};

let mapDispatchToProps = {
  hendleChangeError: actionsTypes.error,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
