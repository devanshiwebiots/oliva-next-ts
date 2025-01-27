import { ImagePath } from "@/Constant/constant";
import { CommonProductSlideProp } from "@/Types/EcommerceType";
import DynamicNumber from "@/utils/DynamicNumber";
import Image from "next/image";
import React from "react";
import { Col, Row } from "reactstrap";

const CommonProductSlide: React.FC<CommonProductSlideProp> = ({ data }) => {
  return (
    <Row className="product-box">
      <Col md={4} className="product-img">
        <Image className="img-fluid img-100" src={`${ImagePath}/ecommerce/${data.image}`} width={100} height={109} alt="product" />
      </Col>
      <Col md={7} className="product-details text-start">
        <span>
          {DynamicNumber(5).map((index) => (
            <i className="fa fa-star font-warning me-1" key={index} />
          ))}
        </span>
        <p className="mb-0">{data.title}</p>
        <div className="product-price">{data.text}</div>
      </Col>
    </Row>
  );
};
export default CommonProductSlide;
