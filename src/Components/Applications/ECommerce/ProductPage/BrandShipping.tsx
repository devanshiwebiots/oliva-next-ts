import { Brand } from '@/Constant/constant';
import { brandData, shippingData } from '@/Data/Applications/Ecommerce/ProductData';
import Link from 'next/link';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BrandShipping = () => {
    return (
        <Col xxl={3} md={6} className="box-col-6">
            <Card>
                <CardBody>
                    <div className="filter-block">
                        <h4>{Brand}</h4>
                        <ul className='simple-list'>
                            <Link href={`/app/ecommerce/product`}>
                                {brandData.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </Link>
                        </ul>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className="collection-filter-block">
                        <ul className="pro-services simple-list">
                            {shippingData.map((data) => (
                                <li key={data.id}>
                                    <div className="d-flex">
                                        {data.icon}
                                        <div className="flex-grow-1">
                                            <h5>{data.title}</h5>
                                            <p>{data.subTitle}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BrandShipping;