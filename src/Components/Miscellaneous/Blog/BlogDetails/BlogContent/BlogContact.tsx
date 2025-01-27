import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import { LeaveYourComment } from '@/Constant/constant'
import React from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const BlogContact = () => {
    return (
        <Col sm={12}>
            <Card className="blog-contact">
                <CommonCardHeader headClass='pb-0 border-0' title={LeaveYourComment} />
                <CardBody>
                    <Form className="default-form">
                        <Row>
                            <Col md={4} sm={4}>
                                <FormGroup>
                                    <Label htmlFor="name">{'Name'}</Label>
                                    <Input id="name" type="text" placeholder="Enter your name" required />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={4}>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" required />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={4}>
                                <FormGroup>
                                    <Label htmlFor="emailid">Website</Label>
                                    <Input id="emailid" type="text" placeholder="Enter your website" required />
                                </FormGroup>
                            </Col>
                            <div className="col-12">
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlTextarea1">Comment</Label>
                                    <Input type='textarea' id="exampleFormControlTextarea1" placeholder="Write your comment" rows={6}></Input>
                                </FormGroup>
                                <Button color='primary'>{'Post Comment'}</Button>
                            </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BlogContact