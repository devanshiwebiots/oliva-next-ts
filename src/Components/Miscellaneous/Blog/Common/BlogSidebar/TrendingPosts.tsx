import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { TrendingPostsTitle } from '@/Constant/constant';
import { trendingPostsData } from '@/Data/Miscellaneous/Blog/BlogData';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TrendingPosts = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 border-0' title={TrendingPostsTitle} />
                <CardBody>
                    <ul className="recent-blog trending-blog">
                        {trendingPostsData.map((item) => (
                            <li key={item.id}>
                                <div className="d-flex gap-2 align-items-start">
                                    <h5>{item.id}.</h5>
                                    <div className="flex-grow-1">
                                        <h6>{item.title}</h6>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}
export default TrendingPosts;