"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginBgImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" className="loginImageBg b-center bg-size p-0"></Col>
        <Col xl="5" className="p-0">
          <div className="login-card login-dark">
            <LoginForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBgImageContainer;
