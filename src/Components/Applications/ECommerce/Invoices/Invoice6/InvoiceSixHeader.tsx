import React from 'react'
import { Col, Row } from 'reactstrap'
import CountUp from 'react-countup';
import Image from 'next/image';
import { ImagePath } from '@/Constant/constant';

const InvoiceSixHeader = () => {
    return (
        <div>
            <Row>
                <Col sm={6}>
                    <div className="d-flex">
                        <div className="media-left">
                            <Image width={80} height={24} className='media-object img-80 for-light' src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
                            <Image width={80} height={24} className='media-object img-80 for-dark' src={`${ImagePath}/logo/logo.png`} alt="logo" />
                        </div>
                        <div className="flex-grow-1 m-l-20 text-right">
                            <h3 className="media-heading">{'Oliva'} </h3>
                            <p>{'hello@Oliva.in'}<br /><span>{'289-335-6503'}</span></p>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="text-md-end text-xs-center">
                        <h3>
                            {'Invoice'}<CountUp end={1069} prefix='#' className='counter' />
                        </h3>
                        <p>{'Issued: May'}<span> {'27, 2023'}</span><br /> {'Payment Due: June'} <span>{'27, 2023'}</span></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default InvoiceSixHeader;