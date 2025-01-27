import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap';
import { XCircle } from 'react-feather';
import { ProductDataTypes } from '../../../../../Types/EcommerceType';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import Image from 'next/image';
import { Apply, CheckOut, ContinueShopping, Dollar, Href, ImagePath, TotalPrice } from '@/Constant/constant';
import { decrementCart, incrementCart, removeFromCart } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import Link from 'next/link';

const CartTableBody = () => {
    const dispatch = useAppDispatch();
    const { cartData } = useAppSelector((state) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    return (
        <tbody>
            {cartData.map((item, i) => {
                return (
                    item.quantity && (
                        <tr key={i}>
                            <td>
                                <Image width={40} height={40} className="img-fluid img-40" src={`${ImagePath}/${item.image}`} alt="#" />
                            </td>
                            <td>
                                <div className="product-name">
                                    <a href={Href}>{item.name}</a>
                                </div>
                            </td>
                            <td>{Dollar}{item.price}</td>
                            <td className="qty-box">
                                <InputGroup className="flex-nowrap">
                                    <span className="input-group-prepend">
                                        <Button color="primary" className="bootstrap-touchspin-down" onClick={() => dispatch(decrementCart(i))}>
                                            <i className="fa fa-minus"></i>
                                        </Button>
                                    </span>
                                    <Input type="number" value={item.quantity} readOnly={true} className="input-touchspin text-center" />
                                    <span className="input-group-append">
                                        <Button color="primary" className="bootstrap-touchspin-up" onClick={() => dispatch(incrementCart(i))}>
                                            <i className="fa fa-plus"></i>
                                        </Button>
                                    </span>
                                </InputGroup>
                            </td>
                            <td> <a href={Href}> <XCircle onClick={() => dispatch(removeFromCart(item.id))} /></a></td>
                            <td> {Dollar}{item.price * item.quantity}</td>
                        </tr>
                    )
                );
            })}
            <tr>
                <td colSpan={4}>
                    <InputGroup>
                        <Input className="me-2" type="text" placeholder="Enter coupon code" />
                        <Button color="primary"> {Apply}</Button>
                    </InputGroup>
                </td>
                <td className="total-amount">
                    <h6 className="m-0 text-end">
                        <span className="f-w-600">{TotalPrice} :</span>
                    </h6>
                </td>
                <td><span className="f-w-600">{Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></td>
            </tr>
            <tr>
                <td className="text-end" colSpan={5}>
                    <Link href={`/app/ecommerce/product`} className="btn btn-secondary cart-btn-transform">
                        {ContinueShopping}
                    </Link>
                </td>
                <td>
                    <Link className="btn btn-success cart-btn-transform" href={`/app/ecommerce/checkout`}>
                        {CheckOut}
                    </Link>
                </td>
            </tr>
        </tbody>
    )
}
export default CartTableBody;