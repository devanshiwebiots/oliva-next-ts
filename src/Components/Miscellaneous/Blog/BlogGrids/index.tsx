"use client";
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import GridCards from './GridCards'
import LatestNews from './LatestNews'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { BlogGridsTitle, BlogTitle } from '@/Constant/constant'
import BlogSidebar from '../Common/BlogSidebar'

const BlogGridsContainer = () => {
    return (
        <>
            <Breadcrumbs pageTitle={BlogGridsTitle} parent={BlogTitle} title={BlogGridsTitle} />
            <Container className="blog-grid-page" fluid>
                <Row>
                    <Col xxl={9} xl={8} className="box-col-12">
                        <Row>
                            <GridCards />
                            <LatestNews />
                        </Row>
                    </Col>
                    <BlogSidebar />
                </Row>
            </Container>
        </>
    )
}
export default BlogGridsContainer;