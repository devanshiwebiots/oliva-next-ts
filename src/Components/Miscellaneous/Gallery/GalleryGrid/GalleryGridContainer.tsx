"use client";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { MyGallery } from "./MyGallery";
import { Gallery, ImageGallery } from "@/Constant/constant";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const GalleryGridContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Gallery} parent={Gallery} title={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card className="custom-image-gallery">
              <CommonCardHeader title={ImageGallery} />
              <CardBody className="gallery my-gallery mb-3 pb-0">
                <Row>
                  <MyGallery /> 
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryGridContainer;
