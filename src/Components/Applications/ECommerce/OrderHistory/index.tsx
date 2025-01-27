'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import OrderCards from './OrderCards'
import DatatableOrderHistory from './DatatableOrderHistory'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { Ecommerce, RecentOrderTitle } from '@/Constant/constant'

const OrderHistoryContainer = () => {
    return (
        <>
            <Breadcrumbs pageTitle={RecentOrderTitle} parent={Ecommerce} title={RecentOrderTitle} />
            <Container fluid>
                <Row>
                    <OrderCards />
                    <DatatableOrderHistory />
                </Row>
            </Container>
        </>
    )
}
export default OrderHistoryContainer;