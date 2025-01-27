'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BlogSidebar from '../Common/BlogSidebar'
import BlogContent from './BlogContent'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { BlogDetailsTitle, BlogTitle } from '@/Constant/constant'

const BlogDetailsContainer = () => {
    return (
        <>
            <Breadcrumbs pageTitle={BlogDetailsTitle} parent={BlogTitle} title={BlogDetailsTitle} />
            <Container className="blog-detail-page" fluid>
                <Row>
                    <BlogContent />
                    <BlogSidebar />
                </Row>
            </Container>
        </>
    )
}
export default BlogDetailsContainer