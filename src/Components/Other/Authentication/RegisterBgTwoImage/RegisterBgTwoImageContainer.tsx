import React from "react";
import { Col, Container, Row } from "reactstrap";
import { RegisterForm } from "../Common/RegisterForm";

const RegisterBgTwoImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" className="b-center bg-size p-0 loginImageBg"></Col>
        <Col xl="5" className="p-0">
          <div className="login-card login-dark">
            <RegisterForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterBgTwoImageContainer;
