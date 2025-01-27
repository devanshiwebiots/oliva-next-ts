import RatioImage from '@/CommonComponent/RatioImage'
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import { CreditCardTitle, ImagePath } from '@/Constant/constant'
import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'

const CreditCard = () => {
    return (
        <Col xl={8} className="box-col-80">
            <Card>
                <CommonCardHeader headClass='pb-0' title={CreditCardTitle} />
                <CardBody>
                    <Row>
                        <Col md={7} className="order-md-0 order-1">
                            <Form className="theme-form mega-form">
                                <FormGroup>
                                    <Input type="text" placeholder="Card number" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="First Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="date" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="Name on card" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type='select' size={1}>
                                        <option>{'Select Type'}</option>
                                        <option>{'Master'}</option>
                                        <option>{'Visa'}</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={5} className="text-center">
                            <RatioImage className="img-fluid" src={`${ImagePath}/ecommerce/card.png`} alt="" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CreditCard;