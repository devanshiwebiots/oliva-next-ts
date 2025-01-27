import { ShareIt } from '@/Constant/constant';
import React from 'react'
import { Col, Form, Row } from 'reactstrap'

const SocialIcons = () => {
    return (
        <Row>
            <Col md={4}>
                <h6 className="product-title">{ShareIt}</h6>
            </Col>
            <Col md={8}>
                <div className="product-icon">
                    <ul className="simple-list flex-row product-social">
                        <li className="d-inline-block">
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li className="d-inline-block">
                            <a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a>
                        </li>
                        <li className="d-inline-block">
                            <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="d-inline-block">
                            <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li className="d-inline-block">
                            <a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a>
                        </li>
                    </ul>
                    <Form className="d-inline-block f-right"></Form>
                </div>
            </Col>
        </Row>
    )
}
export default SocialIcons;