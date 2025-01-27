import React, { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { OpenModalForm } from "./OpenModalForm";
import { Button } from "reactstrap";
import { OpenModalForOliva, OlivaSignUp } from "@/Constant/constant";

const OpenModalOliva = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);

  return (
    <>
      <Button color="primary" onClick={openModalToggle}>{OpenModalForOliva}</Button>
      <CommonModal isOpen={openModal} toggle={openModalToggle} modalBodyClassName="p-0" heading="Oliva SIGN-UP">
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <h3 className="modal-header justify-content-center border-0">{OlivaSignUp}</h3>
          <OpenModalForm modal={openModalToggle}/>
        </div>
      </CommonModal>
    </>
  );
};

export default OpenModalOliva;
