import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import { FollowUsTitle } from '@/Constant/constant'

const FollowUs = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 border-0' title={FollowUsTitle} />
                <CardBody>
                    <ul className="blog-follow">
                        <li><a href="https://en-gb.facebook.com/login/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-square" /></a></li>
                        <li><a href="https://twitter.com/LOGIN" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a></li>
                        <li><a href="https://www.skype.com/en/" target="_blank" rel="noreferrer"><i className="fa fa-skype" /></a></li>
                        <li><a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}
export default FollowUs;