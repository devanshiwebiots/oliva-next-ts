import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import PostEdit from './PostEdit'
import Breadcrumbs from '@/CommonComponent/Breadcrumb'
import { AddPostTitle, BlogTitle } from '@/Constant/constant'

const AddPostContainer = () => {
    return (
        <>
            <Breadcrumbs pageTitle={AddPostTitle} parent={BlogTitle} title={AddPostTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <PostEdit />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddPostContainer