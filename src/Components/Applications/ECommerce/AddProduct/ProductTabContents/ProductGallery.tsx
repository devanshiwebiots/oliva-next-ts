import React, { useState } from "react";
import { Button, Form } from "reactstrap";
import { productGalleryData } from "@/Data/Applications/Ecommerce/ProductData";
import { ActiveCallbackProp } from "@/Types/EcommerceType";
import SVG from "@/CommonComponent/SVG/Svg";
import { Next, Previous } from "@/Constant/constant";
import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";

const ProductGallery: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
  return (
    <div className="sidebar-body">
      {productGalleryData.map((item) => (
        <div key={item.id} className="product-upload">
          <p>{item.title} </p>
          <Form>
            <CommonFileUpload />
          </Form>
        </div>
      ))}
      <div className="product-buttons">
        <Button color="transparent" className="me-1" onClick={() => activeCallBack(1)}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SVG iconId="back-arrow" /> {Previous}
          </div>
        </Button>
        <Button color="transparent" onClick={() => activeCallBack(3)}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SVG iconId="front-arrow" /> {Next}
          </div>
        </Button>
      </div>
    </div>
  );
};
export default ProductGallery;
