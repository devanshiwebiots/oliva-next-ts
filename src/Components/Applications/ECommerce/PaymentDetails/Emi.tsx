import RatioImage from '@/CommonComponent/RatioImage';
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { EmiTitle, ImagePath, Submit } from '@/Constant/constant';
import { bankName, paymentOption, selectCard, selectDuration } from '@/Data/Applications/Ecommerce/ProductData';
import React from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'

const Emi = () => {
    return (
        <Col xl={4} lg={6} className="box-col-33">
            <Card>
                <CommonCardHeader headClass='pb-0' title={EmiTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="First Name" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="text" placeholder="Last Name" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="Pincode" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {bankName.map((item, i) => (<option key={i}>{item}</option>))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {selectCard.map((item, i) => (<option key={i}>{item}</option>))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {selectDuration.map((item, i) => (<option key={i}>{item}</option>))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <ul className="payment-opt simple-list flex-row">
                                        {paymentOption.map((item, index) => (
                                            <li key={index}>
                                                <RatioImage src={`${ImagePath}/ecommerce/${item}.png`} alt="" />
                                            </li>
                                        ))}
                                    </ul>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <Button color='primary' block>{Submit}</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Emi;