import React from 'react'
import { Button, Col } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';

const Invoice6Button = ({ handlePrint }: { handlePrint: VoidFunction }) => {
  return (
    <Col sm={12} className="text-center mb-4">
      <Button color="primary" className="me-2" onClick={() => handlePrint()}>
        {"Print"}
      </Button>
      <Button color="secondary">{"Cancel"}</Button>
    </Col>
  );
};
export default Invoice6Button;