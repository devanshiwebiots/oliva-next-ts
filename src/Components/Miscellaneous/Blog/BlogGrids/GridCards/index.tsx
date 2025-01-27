import SVG from '@/CommonComponent/SVG/Svg'
import { ImagePath } from '@/Constant/constant'
import { gridCardsData } from '@/Data/Miscellaneous/Blog/BlogData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'

const GridCards = () => {
    return (
        <>
            {gridCardsData.map((item) => (
                <Col xxl={4} xl={6} lg={4} sm={6} key={item.id}>
                    <Card className="grid-cards">
                        <CardHeader className="p-0 border-0">
                            <Image width={382} height={256} className="img-fluid" src={`${ImagePath}/blog/grid-${item.gridSrc}`} alt="" />
                        </CardHeader>
                        <CardBody>
                            <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                    <Image className="img-fluid" width={40} height={40} src={`${ImagePath}/blog/about/${item.aboutSrc}`} alt="avatar" />
                                </div>
                                <div className="flex-grow-1">
                                    <h6>{item.name}</h6>
                                    <p className="mb-0">{item.date}</p>
                                </div><i className="fa fa-ellipsis-v" />
                            </div>
                            <h5>{item.title}</h5>
                            <p>
                                {item.paragraph}
                                <Link className="font-danger mx-1" href={`/blog/blog_details`}>{'Read more...'}</Link>
                            </p>
                            <ul className="d-flex gap-3 justify-content-between simple-list flex-row">
                                <li>{item.views} views</li>
                                <li className="blog-like">
                                    <SVG iconId='blog-heart' />
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default GridCards;