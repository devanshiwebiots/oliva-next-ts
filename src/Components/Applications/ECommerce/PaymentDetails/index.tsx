'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import Cod from './Cod'
import Emi from './Emi'
import NetBanking from './NetBanking'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { Ecommerce, PaymentDetailsTitle } from '@/Constant/constant'

const PaymentDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={PaymentDetailsTitle} parent={Ecommerce} title={PaymentDetailsTitle} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <Cod />
          <Emi />
          <NetBanking />
        </Row>
      </Container>
    </>
  )
}
export default PaymentDetailsContainer;