'use client'
import Breadcrumbs from '@/CommonComponent/Breadcrumb';
import { Ecommerce, PricingTitle } from '@/Constant/constant';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap'
import BecomeMember from './BecomeMember';
import SimplePricingCard from './SimplePricingCard';

const PricingContainer = () => {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={PricingTitle} parent={Ecommerce} title={PricingTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <BecomeMember />
                        <SimplePricingCard />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default PricingContainer;