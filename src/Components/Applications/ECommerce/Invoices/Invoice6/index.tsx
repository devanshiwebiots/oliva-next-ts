'use client'
import Breadcrumbs from '@/CommonComponent/Breadcrumb';
import { Ecommerce, InvoicesTitle } from '@/Constant/constant';
import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import InvoiceSixHeader from './InvoiceSixHeader';
import UserDetails from './UserDetails';
import InvoiceSixTable from './InvoiceSixTable';
import Invoice6Button from './Invoice6Button';
import { useReactToPrint } from 'react-to-print';

const Invoice6Container = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
      contentRef,
    });
    return (
      <>
        <Breadcrumbs pageTitle={InvoicesTitle} parent={Ecommerce} title={InvoicesTitle} />
        <Container>
          <div ref={contentRef}>
            <Row>
              <Col sm={12}>
                <Card>
                  <CardBody>
                    <div className="invoice">
                      <div>
                        <InvoiceSixHeader />
                        <hr />
                        <UserDetails />
                        <InvoiceSixTable />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <Invoice6Button handlePrint={handlePrint} />
        </Container>
      </>
    );
}
export default Invoice6Container;