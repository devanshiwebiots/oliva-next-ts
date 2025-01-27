'use client'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductListHeader from './ProductListHeader'
import ProductListTable from './ProductListTable'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { Ecommerce, ProductListTitle } from '@/Constant/constant'

const ProductListContainer = () => {
    return (
        <>
            <Breadcrumbs pageTitle={ProductListTitle} parent={Ecommerce} title={ProductListTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <ProductListHeader />
                                <ProductListTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductListContainer;