import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Modal, ModalBody } from "reactstrap";
import { Cancel, Print, PrintViews } from "@/Constant/constant";
import PrintPreview from "./PrintPreview";
import { PrintModalPropsTypes } from "@/Types/ContactType";

const PrintModal :React.FC<PrintModalPropsTypes> = ({ printModal, selectedUser, toggleCallback }) => {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });

   const printModalToggle = () => {
     toggleCallback(false);
     handlePrint();
   };

   const closePrintModal = () => {
     toggleCallback(false);
   };
  
  return (
    <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <div className="modal-header">
        <h5 className="modal-title">{PrintViews}</h5>
        <Button close color="transparent" onClick={printModalToggle}></Button>
      </div>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} ref={contentRef} />
        <Button color="secondary" className="me-1" onClick={printModalToggle}>
          {Print}
        </Button>
        <Button color="primary" onClick={closePrintModal}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
