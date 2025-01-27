import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import { CommentsTitle, Href, ImagePath } from '@/Constant/constant'
import { blogCommentData } from '@/Data/Miscellaneous/Blog/BlogData'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BlogComment = () => {
    return (
        <Col sm={12}>
            <Card className="blog-comment">
                <CommonCardHeader headClass='pb-0 border-0' title={CommentsTitle} />
                <CardBody>
                    <ul className="comment-section">
                        {blogCommentData.map((item) => (
                            <li key={item.id} className={item.id === 2 ? 'replay' : ''}>
                                <div className="d-flex">
                                    <Image width={50} height={50} src={`${ImagePath}/avtar/${item.image}`} alt="Generic placeholder image" />
                                    <div className="flex-grow-1">
                                        <h6>{item.name}</h6>
                                        <span>( {item.date} ) <a className="ms-1" href={Href}>{'reply'}</a></span>
                                        <p>{item.paragraph}</p>
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
export default BlogComment