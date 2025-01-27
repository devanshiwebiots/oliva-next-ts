import { Dollar, ProductDetails } from '@/Constant/constant';
import { productSize } from '@/Data/Applications/Ecommerce/ProductData';
import { ModalProductDetailsProp } from '@/Types/EcommerceType';
import React from 'react'
import { Button } from 'reactstrap';

const ModalProductDetails: React.FC<ModalProductDetailsProp> = ({ modelData }) => {
    return (
        <>
            <h3>{modelData?.name}</h3>
            <div className="product-price">
                {Dollar} {modelData?.discountPrice}
                <del>
                    {Dollar} {modelData?.price}
                </del>
            </div>
            <div className="product-view">
                <h3>{ProductDetails}</h3>
                <p className="mb-0">{modelData?.discription}</p>
            </div>
            <div className="product-size">
                <ul>
                    {productSize.map((items: string, i: number) => (
                        <li key={i} className="me-2">
                            <Button color="light" outline>{items}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ModalProductDetails;