import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap'
import TrendingPosts from './TrendingPosts'
import FollowUs from './FollowUs'
import RecentPosts from './RecentPosts'
import PopularTags from './PopularTags'
import Subscriber from './Subscriber'

const BlogSidebar = () => {
    const [open, setOpen] = useState(false)
    const blogToggle = () => {
        setOpen(!open);
    }
    return (
        <Col xxl={3} xl={4} className="blog-filter">
            <div className="md-sidebar">
                <Button color='primary' className="email-aside-toggle md-sidebar-toggle" onClick={blogToggle}>{'Blog Filter'}</Button>
                <div className={`md-sidebar-aside job-sidebar custom-scrollbar ${open ? 'open' : ''}`}>
                    <Row className="blog-sidebar">
                        <Col sm={12}>
                            <Card>
                                <CommonCardHeader headClass='pb-0 border-0' title='Search' />
                                <CardBody>
                                    <div className="blog-search">
                                        <Input type="text" placeholder="Search here..." /><i className="fa fa-search" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <TrendingPosts />
                        <FollowUs />
                        <RecentPosts />
                        <PopularTags />
                        <Subscriber />
                    </Row>
                </div>
            </div>
        </Col>
    )
}
export default BlogSidebar;