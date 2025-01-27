import { Filters, ImagePath } from '@/Constant/constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { toggleSidebar } from '@/Redux/Reducers/EcommerceReducer/FilterReducer';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ProductCategory from './ProductCategory';
import NewProductSlides from './NewProductSlides';
import ProductSearch from './ProductSearch';
import Image from 'next/image';

const ProductSidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <Row>
      <Col sm={3}>
        <div className='product-sidebar'>
          <div className="filter-section">
            <Card>
              <div className="card-header">
                <h6 className="mb-0 f-w-600">{Filters}
                  <span className="pull-right">
                    <i className="fa fa-chevron-down toggle-data" onClick={() => { dispatch(toggleSidebar()); }} />
                  </span>
                </h6>
              </div>
              <div className="left-filter">
                <CardBody className="filter-cards-view animate-chk custom-scrollbar">
                  <ProductCategory />
                  <NewProductSlides /> 
                  <div className="product-filter text-center mt-2">
                    <Image className='img-fluid banner-product' src={`${ImagePath}/ecommerce/banner.jpg`} width={295} height={446} alt='' />
                  </div>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </Col>
      <ProductSearch />
    </Row>
  )
}
export default ProductSidebar;