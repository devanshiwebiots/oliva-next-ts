import { AddToCart, AddToWishList, BuyNow } from '@/Constant/constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { addCartData } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import { ProductDataTypes } from '@/Types/EcommerceType';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from 'reactstrap';

const ButtonLinks = ({ product }: { product: ProductDataTypes }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const addToCart = () => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="m-t-15 btn-showcase">
            <Button color="primary" onClick={() => router.push(`/app/ecommerce/cart`)} title="">
                <i className="fa fa-shopping-basket me-1" onClick={addToCart} />
                {AddToCart}
            </Button>
            <Button color="success" onClick={() => router.push(`/app/ecommerce/checkout`)} title="">
                <i className="fa fa-shopping-cart me-1" />
                {BuyNow}
            </Button>
            <Button color="secondary" onClick={() => router.push(`/app/ecommerce/wishlist`)}>
                <i className="fa fa-heart me-1" />
                {AddToWishList}
            </Button>
        </div>
    )
}
export default ButtonLinks;