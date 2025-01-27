'use client'
import Breadcrumbs from '@/CommonComponent/Breadcrumb';
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { AddProductTitle, Ecommerce, ProductForm } from '@/Constant/constant';
import React, { Fragment, useCallback, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductFormNav from './ProductFormNav';
import ProductTabContents from './ProductTabContents';

const AddProductContainer = () => {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AddProductTitle} parent={Ecommerce} title={AddProductTitle} />
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CommonCardHeader title={ProductForm} />
                            <CardBody>
                                <Row className="g-xl-5 g-3">
                                    <ProductFormNav steps={steps} setSteps={setSteps} />
                                    <ProductTabContents steps={steps} activeCallBack={activeCallBack} />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default AddProductContainer;