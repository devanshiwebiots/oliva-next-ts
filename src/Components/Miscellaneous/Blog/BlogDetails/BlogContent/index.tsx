import React from 'react'
import { Col, Row } from 'reactstrap'
import BlogDetail from './BlogDetail'
import BlogComment from './BlogComment'
import BlogContact from './BlogContact'

const BlogContent = () => {
    return (
        <Col xxl={9} xl={8} className="box-col-12">
            <Row>
                <BlogDetail />
                <BlogComment />
                <BlogContact />
            </Row>
        </Col>
    )
}
export default BlogContent