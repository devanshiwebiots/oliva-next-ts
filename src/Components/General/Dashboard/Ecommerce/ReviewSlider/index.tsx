import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Slider from 'react-slick'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { ClientReviewTitle, ImagePath } from '@/Constant/constant'
import { MonthlyDropdownList, reviewSlider, reviewSliderData, socialReviewList } from '@/Data/General/Dashboard/DashboardData'
import Image from 'next/image'

const ReviewSlider = () => {
    return (
        <Col xxl={3} sm={6} className="box-col-4">
            <Card className="review-slider">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={ClientReviewTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    <div className="owl-carousel owl-theme" id="owl-carousel-dashboard">
                        <Slider {...reviewSlider}>
                            {reviewSliderData.map((item) => (
                                <div className="review" key={item.id}>
                                    <div>
                                        <Image className="img-fluid" src={`${ImagePath}/dashboard-2/user/${item.image}`} width={72} height={72} alt="" />
                                        <div className="review-content">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="d-flex">
                                            <h5>{item.rate}</h5> 
                                            <span className="pull-right mx-2"><i className="fa fa-star font-warning" /></span>
                                            <div className="flex-grow-1">
                                                <h5>{item.number}</h5>
                                            </div>
                                        </div>
                                        <div className="social-review">
                                            <ul>
                                                {socialReviewList.map((data) => (
                                                    <li key={data.id}>
                                                        <a href={data.link} target="_blank" rel="noreferrer">
                                                            <i className={`fa fa-${data.icon}`} />
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ReviewSlider;