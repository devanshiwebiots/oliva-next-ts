import RatioImage from '@/CommonComponent/RatioImage';
import { ImagePath } from '@/Constant/constant';
import { animateImageList } from '@/Data/General/Dashboard/DashboardData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const WelcomeCard = () => {
    return (
        <Col xxl={5} md={4} sm={6} className="box-col-4">
            <Card className="welcome-card">
                <CardBody>
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <h1>{'Good day, Lena Miller'}</h1>
                            <p>{'Welcome to the Admin clan! We appreciate your interest in our dashboard.'}</p>
                            <Link className="btn" href={`/app/ecommerce/product-list`}>{'Go Premium'}</Link>
                        </div>
                        <div className="animate-img">
                            {animateImageList.map((item, index) => (
                                <RatioImage key={index} src={`${ImagePath}/dashboard/${item}.png`} alt="" />
                            ))}
                        </div>
                        <div className="flex-shrink-0">
                            <Image src={`${ImagePath}/dashboard/welcome.png`} width={240} height={234} alt="" />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default WelcomeCard;