import { Congratulations, ImagePath } from "@/Constant/constant";
import Image from "next/image";
import { Col, Form, Row } from "reactstrap";

const FinishForm = () => {
  return (
    <Form className="stepper-four g-3 needs-validation" noValidate>
      <Row>
        <Col xs="12" className="m-0">
          <div className="successful-form">
            <Image width={140} height={140} className="img-fluid" src={`${ImagePath}/gif/product_list/successful.gif`} alt="successful" />
            <h6>{Congratulations}</h6>
            <p>Well done! You have successfully completed.</p>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default FinishForm;
