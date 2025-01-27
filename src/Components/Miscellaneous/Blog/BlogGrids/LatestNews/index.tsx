import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import { LatestNewsTrendsTitle } from '@/Constant/constant'
import { latestNewsData } from '@/Data/Miscellaneous/Blog/BlogData'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const LatestNews = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 border-0' title={LatestNewsTrendsTitle} />
                <CardBody>
                    <Row className="gy-3">
                        {latestNewsData.map((item) => (
                            <Col xxl={6} xl={12} md={6} key={item.id}>
                                <div className="blog-card">
                                    <h4>{item.title}</h4>
                                    <p>{item.paragraph}</p>
                                    <div className="post-social">
                                        <ul className="d-flex align-items-center simple-list flex-row">
                                            <li className="bg-light-primary txt-primary">{item.date}</li>
                                            <li className="bg-light-secondary txt-secondary"><i className="fa fa-user mx-1"></i>Admin</li>
                                            <li className="bg-light-success txt-success"><i className="fa fa-comments mx-1"></i>{item.comment} Comments</li>
                                        </ul>
                                    </div>
                                    <Link className="btn" href={`/miscellaneous/blog/blog-detail`}>View more<i className="fa fa-long-arrow-right" /></Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default LatestNews;