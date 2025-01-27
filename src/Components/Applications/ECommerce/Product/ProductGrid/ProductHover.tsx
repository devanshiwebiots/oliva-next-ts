import { useAppDispatch } from '@/Redux/Hooks';
import { addCartData } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import { ProductDataTypes, ProductHoverProps } from '@/Types/EcommerceType';
import Link from 'next/link';
import React from 'react'

const ProductHover: React.FC<ProductHoverProps> = ({ onClickHandle, item }) => {
    const dispatch = useAppDispatch();
    const addToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="product-hover">
            <ul>
                <li>
                    <Link href={`/app/ecommerce/cart`} onClick={() => addToCart(item)}>
                        <i className="icon-shopping-cart" />
                    </Link>
                </li>
                <li>
                    <a color="transparent" onClick={() => onClickHandle(item)}>
                        <i className="icon-eye" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default ProductHover;