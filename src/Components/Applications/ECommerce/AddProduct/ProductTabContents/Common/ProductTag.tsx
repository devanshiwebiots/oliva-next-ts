import React, { useState } from "react";
import { Col, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { ProductTagProp } from "@/Types/EcommerceType";
import { productTagItem } from "@/Data/Applications/Ecommerce/ProductData";

const ProductTag: React.FC<ProductTagProp> = ({ title, subTitle }) => {
  return (
    <Col sm={6}>
      <Row className="g-2 product-tag">
        <Col xs={12}>
          <Label className="d-block m-0">{title}</Label>
        </Col>
        <Col xs={12}>
          <Typeahead labelKey="name" options={productTagItem} multiple defaultSelected={productTagItem.slice(0, 4)} />
          {subTitle && <p className="f-light">{"Products can be tagged"}</p>}
        </Col>
      </Row>
    </Col>
  );
};
export default ProductTag;
