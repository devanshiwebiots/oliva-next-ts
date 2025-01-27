import { ImagePath } from '@/Constant/constant'
import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'reactstrap'

const UserDetails = () => {
    return (
        <Row>
            <Col md={4}>
                <div className="d-flex">
                    <div className="media-left">
                        <Image width={120} height={36} className="media-object rounded-circle img-60" src={`${ImagePath}/user/1.jpg`} alt="user" />
                    </div>
                    <div className="flex-grow-1 m-l-20">
                        <h3 className="media-heading">{'Johan Deo'}</h3>
                        <p>{'JohanDeo@gmail.com'}<br /><span>{'555-555-5555'}</span></p>
                    </div>
                </div>
            </Col>
            <Col md={8}>
                <div className="text-md-end" id="project">
                    <h3>{'Project Description'}</h3>
                    <p>{"You're Only As Good As Your Last Collection, Which Is An EnormousPressure. Jeans Represent Democracy In Fashion.Fashion Is AboutDressing According To What's Fashionable."}</p>
                </div>
            </Col>
        </Row>
    )
}
export default UserDetails;