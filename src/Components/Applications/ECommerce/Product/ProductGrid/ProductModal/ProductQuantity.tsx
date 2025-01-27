import { AddToCart, Quantity, ViewDetails } from '@/Constant/constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { addCartData } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import { ProductQuantityProp } from '@/Types/EcommerceType';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'

const ProductQuantity: React.FC<ProductQuantityProp> = ({ dataId, modelData }) => {
    const [cartCount, setCartCount] = useState(1);
    const dispatch = useAppDispatch();
    const incrementCount = () => {
        setCartCount(cartCount + 1);
    };
    const decrementCount = () => {
        if (cartCount === 1) {
            return;
        } else {
            setCartCount(cartCount - 1);
        }
    };
    const handleAddToCart = () => {
        dispatch(addCartData({ id: dataId, item: modelData, increment: cartCount }));
    };
    return (
        <div className="product-qnty">
            <h3>{Quantity}</h3>
            <fieldset>
                <InputGroup>
                    <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={decrementCount}>
                        <i className="fa fa-minus"></i>
                    </Button>
                    <InputGroupText className="bootstrap-touchspin-prefix d-none"></InputGroupText>
                    <Input className="touchspin text-center" type="text" name="quantity" value={cartCount} />
                    <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={incrementCount}>
                        <i className="fa fa-plus"></i>
                    </Button>
                </InputGroup>
            </fieldset>
            <div className="addcart-btn mt-3">
                <Link href={`/app/ecommerce/cart`} className='btn btn-primary me-3' onClick={handleAddToCart}>
                    {AddToCart}
                </Link>
                <Link href={`/app/ecommerce/product-page`} className='btn btn-primary ms-2'>
                    {ViewDetails}
                </Link>
            </div>
        </div>
    )
}
export default ProductQuantity;