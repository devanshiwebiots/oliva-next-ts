'use client'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CartTable from './CartTable'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { CartTitle, Ecommerce } from '@/Constant/constant'
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'

const CartContainer = () => {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CartTitle} parent={Ecommerce} title={CartTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={CartTitle} headClass='pb-0' />
                            <CardBody>
                                <CartTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default CartContainer;