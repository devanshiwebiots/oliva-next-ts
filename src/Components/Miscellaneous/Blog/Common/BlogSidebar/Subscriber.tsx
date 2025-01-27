import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { SubscriberTitle } from '@/Constant/constant';
import React from 'react'
import { Button, Card, CardBody, Col, Input } from 'reactstrap'

const Subscriber = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 border-0' title={SubscriberTitle} />
                <CardBody>
                    <p className="mb-2">{'To get more detail for new types of blogs.'}</p>
                    <Input type="email" placeholder="Enter your email" />
                    <Button color='primary' className="w-100 mt-3">{'Get Started'}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Subscriber;