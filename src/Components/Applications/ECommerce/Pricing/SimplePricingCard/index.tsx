import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { Dollar, Plan, Purchase, SimplePricingTitle } from '@/Constant/constant';
import { simplePricingData } from '@/Data/Applications/Ecommerce/PricingData';

const SimplePricingCard = () => {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={SimplePricingTitle} />
            <CardBody className="pricing-content">
                <Row className="g-sm-4 g-3">
                    {simplePricingData.map((data) => (
                        <Col lg={3} sm={6} className="box-col-3" key={data.id}>
                            <Card className="text-center pricing-simple">
                                <CardBody>
                                    <h3>{data.title}</h3>
                                    <h2>{Dollar}{data.amount}</h2>
                                    <h3 className="mb-0">{data.title} {Plan}</h3>
                                </CardBody>
                                <Button size="lg" color="primary" block>
                                    {Purchase}
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}
export default SimplePricingCard;