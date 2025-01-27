import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { ImagePath, RecentPostsTitle } from '@/Constant/constant';
import { recentPostsData } from '@/Data/Miscellaneous/Blog/BlogData';
import Image from 'next/image';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const RecentPosts = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 border-0' title={RecentPostsTitle} />
                <CardBody>
                    <ul className="recent-blog">
                        {recentPostsData.map((item) => (
                            <li key={item.id}>
                                <div className="d-flex gap-2 align-items-start">
                                    <Image className="img-fluid rounded" width={70} height={42} src={`${ImagePath}/blog/small/${item.image}`} alt="Generic placeholder image" />
                                    <div className="flex-grow-1">
                                        <h6>{item.title}</h6>
                                        <p>{item.time}</p>
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
export default RecentPosts;