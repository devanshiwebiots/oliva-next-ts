import { ImagePath } from '@/Constant/constant';
import { ProductModalProps } from '@/Types/EcommerceType';
import Image from 'next/image';
import React from 'react'
import { Col, Modal, ModalHeader, Row } from 'reactstrap';
import ModalProductDetails from './ModalProductDetails';
import ProductQuantity from './ProductQuantity';

const ProductModal: React.FC<ProductModalProps> = ({ value, setOpenModal, dataId, modelData }) => {
  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal size="lg" isOpen={value} toggle={onCloseModal} centered wrapClassName='product-box'>
      <ModalHeader color='transparent' toggle={onCloseModal}>
        <Row className="product-box">
          <Col lg={6} className="product-img">
            <Image alt="image" className="img-fluid" src={modelData?.image ? `${ImagePath}/${modelData.image}` : ""} width={371} height={405} />
          </Col>
          <Col lg={6} className="product-details text-start">
            <ModalProductDetails modelData={modelData} />
            <ProductQuantity dataId={dataId} modelData={modelData} />
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  )
}
export default ProductModal;