import { useAppDispatch } from '@/Redux/Hooks';
import { setSearchInput } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import React from 'react'
import { Col, Form, Input } from 'reactstrap';

const ProductSearch = () => {
    const dispatch = useAppDispatch();
    const handleSearchKeyword = (e: { target: { value: string } }) => {
        dispatch(setSearchInput(e.target.value));
    };
    return (
        <Col md={9} sm={12}>
            <Form>
                <div className="m-0 form-group">
                    <Input
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => handleSearchKeyword}
                    />
                    <i className="fa fa-search"/>
                </div>
            </Form>
        </Col>
    )
}
export default ProductSearch;