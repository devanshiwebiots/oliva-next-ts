'use client'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductSlider from './ProductSlider'
import ProductDetails from './ProductDetails'
import BrandShipping from './BrandShipping'
import ProductPageTabs from './ProductPageTabs'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { Ecommerce, ProductPageTitle } from '@/Constant/constant'

const ProductPageContainer = () => {
    return (
        <>
            <Breadcrumbs pageTitle={ProductPageTitle} parent={Ecommerce} title={ProductPageTitle} />
            <Container fluid>
                <div>
                    <Row className="product-page-main p-0">
                        <Col xxl={4} md={6} className="box-col-12">
                            <Card>
                                <CardBody>
                                    <ProductSlider />
                                </CardBody>
                            </Card>
                        </Col>
                        <ProductDetails />
                        <BrandShipping />
                    </Row>
                </div>
                <ProductPageTabs />
            </Container>
        </>
    )
}
export default ProductPageContainer;