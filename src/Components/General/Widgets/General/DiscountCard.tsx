import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Slider from 'react-slick';
import { DiscountCardData, DiscountSliderOptions } from '@/Data/General/Dashboard/DashboardData';
import { DealOfTheDay, ImagePath, SpecialDiscount } from '@/Constant/constant';
import Image from 'next/image';
import RatioImage from '@/CommonComponent/RatioImage';

export const DiscountCard=()=> {
    return (
        <Card className="discount-card">
            <CardBody>
                <div className="owl-carousel owl-theme" id="owl-carousel-dashboard">
                    <Slider {...DiscountSliderOptions}>
                        {DiscountCardData.map((item) => (
                            <div className="special-offer" key={item.id}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <h3>{item.brand}</h3>
                                        <h5>
                                            {'$'}{item.discount}
                                            <del>{'$'}{item.price}</del>
                                        </h5>
                                        <h6 className="bg-light">{SpecialDiscount} </h6>
                                        <p>{DealOfTheDay} <span>{'$'}{item.deal} </span></p>
                                        <ul>
                                            {item.time.map((count) => (
                                                <li key={count.id}> 
                                                    <h5>{count.digit}</h5><span>{count.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div><RatioImage className='img-fluid' src={`${ImagePath}/dashboard-2/product/${item.image}`} alt="" />
                                </div>
                                <div className="product-slider">  
                                    <div className="shap-block">
                                        <div className="rounded-shap animate-bg-secondary"><i></i><i></i><i></i></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </CardBody>
        </Card>
    )
}
