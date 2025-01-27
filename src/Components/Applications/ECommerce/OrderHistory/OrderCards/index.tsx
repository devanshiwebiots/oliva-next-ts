import React, { useState } from 'react'
import { Badge, Card, CardBody, Col, Row } from 'reactstrap'
import { X } from 'react-feather'
import { orderHistoryData } from '@/Data/Applications/Ecommerce/OrderHistoryData';
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import Image from 'next/image';
import { Href, ImagePath, InStock, Price } from '@/Constant/constant';

const OrderCards = () => {
    const [closedCards, setClosedCards] = useState<number[]>([]);
    const toggleCard = (index: number) => {
        setClosedCards((prevClosedCards) =>
            prevClosedCards.includes(index)
                ? prevClosedCards.filter((item) => item !== index)
                : [...prevClosedCards, index]
        );
    };
    const isCardClosed = (index: number) => closedCards.includes(index);
    return (
        <Col sm={12}>
            {orderHistoryData.map((item) => (
                <Card key={item.id}>
                    <CommonCardHeader title={item.heading} />
                    <CardBody>
                        <Row className="g-sm-4 g-3">
                            {item.details.map((product) => (
                                <Col xxl={4} md={6} key={product.id}>
                                    {!isCardClosed(product.id) && (
                                        <div className="prooduct-details-box">
                                            <div className="d-flex">
                                                <Image className="align-self-center img-fluid img-60" width={60} height={60} src={`${ImagePath}/ecommerce/product-table-${product.image}`} alt="#" />
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="product-name">
                                                        <h6><a href={Href}>{product.name}</a></h6>
                                                    </div>
                                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                                    <div className="price d-flex p-0 border-0">
                                                        <div className="text-muted me-2">{Price}</div>: {'210$'}
                                                    </div>
                                                    <div className="avaiabilty">
                                                        <div className="text-success">{InStock}</div>
                                                    </div>
                                                    <Badge color={`light-${product.color}`} className={`txt-${product.color}`}>{product.avaiabilty}</Badge>
                                                    <X className='close' onClick={() => toggleCard(product.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </CardBody>
                </Card>
            ))}
        </Col>
    )
}
export default OrderCards;