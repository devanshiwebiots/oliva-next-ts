import { Featured, HighestPrices, LowestPrices, ShowingProducts } from '@/Constant/constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { sortBy } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import React, { ChangeEvent } from 'react'
import { Col, Input } from 'reactstrap'

const Sorting = () => {
    const dispatch = useAppDispatch();
    const filterSort = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(sortBy(event.target.value));
    };

    return (
        <Col md={6} className="text-sm-end">
            <span className="m-r-5 f-w-600 "> {ShowingProducts}</span>
            <div className="select2-drpdwn-product select-options d-inline-block" onClick={() => filterSort}>
                <Input className="btn-square" type='select' name="select">
                    <option value="opt1">{Featured}</option>
                    <option value="opt2">{LowestPrices}</option>
                    <option value="opt3">{HighestPrices}</option>
                </Input>
            </div>
        </Col>
    )
}
export default Sorting;