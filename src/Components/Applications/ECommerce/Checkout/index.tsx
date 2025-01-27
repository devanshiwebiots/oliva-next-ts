'use client'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import { BillingDetails, CheckoutTitle, Ecommerce } from '@/Constant/constant'
import React, { Fragment } from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import CheckoutForm from './CheckoutForm'
import CheckoutDetails from './CheckoutDetails'

const CheckoutContainer = () => {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CheckoutTitle} parent={Ecommerce} title={CheckoutTitle} />
            <Container fluid>
                <Card>
                    <CommonCardHeader title={BillingDetails} headClass='pb-0' />
                    <CardBody>
                        <Row>
                            <CheckoutForm />
                            <CheckoutDetails />
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    )
}
export default CheckoutContainer;