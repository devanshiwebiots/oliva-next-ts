import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { Href, PopularTagsTitle } from '@/Constant/constant';
import { popularTagsData } from '@/Data/Miscellaneous/Blog/BlogData';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const PopularTags = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 border-0' title={PopularTagsTitle} />
                <CardBody>
                    <ul className="tags">
                        {popularTagsData.map((item, index) => (
                            <li key={index}>
                                <a href={Href}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}
export default PopularTags;