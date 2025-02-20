import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { RateNow } from '@/Constant/constant';

const StarRating = () => {
    const [rating, setRating] = useState(1);
    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <Row>
            <Col md={4}>
                <h6 className="product-title">{RateNow}</h6>
            </Col>
            <Col md={8}>
                <div className='d-flex'>
                    <Rating
                        initialValue={rating}
                        size={20}
                        transition
                        fillColor="gold"
                        emptyColor="gray"
                        onClick={handleRatingChange}
                    />
                    <span>{' (250 review)'}</span>
                </div>
            </Col>
        </Row>
    )
}
export default StarRating;