'use client'
import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactSideBar from "./ContactSideBar";
import TabComponent from "./TabComponent";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchContactApiData } from "@/Redux/Reducers/ContactSlice";
import { Apps, Contact } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ContactContainer = () => {
  const [activeTab, setActiveTab] = useState("2");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContactApiData());
  }, [dispatch]);

  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle={Contact} parent={Apps} title={Contact}/>
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl="3" className="box-col-3">
              <ContactSideBar callback={callback} />
            </Col>
            <Col xl="9" md="12" className="box-col-12">
              <TabComponent activeTab={activeTab} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ContactContainer;