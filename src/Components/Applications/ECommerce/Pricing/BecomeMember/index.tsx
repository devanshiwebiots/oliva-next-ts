import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { BecomeMemberTitle, Dollar, EmailAccounts, Maintenance, SignUp, SubDomains } from '@/Constant/constant';
import { becomeMemberData } from '@/Data/Applications/Ecommerce/PricingData';
import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const BecomeMember = () => {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={BecomeMemberTitle} />
            <CardBody className="pricing-content">
                <Row className='pricing-col'>
                    {becomeMemberData.map((data) => (
                        <Col lg={3} sm={6} className='box-col-3' key={data.id}>
                            <div className="pricingtable">
                                <div className="pricingtable-header">
                                    <h3 className="title">{data.title}</h3>
                                </div>
                                <div className="price-value">
                                    <span className="currency">{Dollar}</span>
                                    <span className="amount">{data.amount}</span>
                                    <span className="duration">{"/mo"}</span>
                                </div>
                                <ul className="pricing-content">
                                    <li>{data.content}</li>
                                    <li>{EmailAccounts}</li>
                                    <li>{Maintenance}</li>
                                    <li>{SubDomains}</li>
                                </ul>
                                <div className="pricingtable-signup">
                                    <Button color="primary" size="lg">
                                        {SignUp}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}
export default BecomeMember;