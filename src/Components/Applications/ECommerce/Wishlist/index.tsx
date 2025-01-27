'use client'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import WishlistCards from './WishlistCards'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { Ecommerce, WishlistTitle } from '@/Constant/constant'
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'

const WishlistContainer = () => {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={WishlistTitle} parent={Ecommerce} title={WishlistTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={WishlistTitle} />
                            <CardBody>
                                <WishlistCards />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default WishlistContainer;