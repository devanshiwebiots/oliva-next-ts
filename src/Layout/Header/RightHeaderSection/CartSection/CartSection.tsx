"use client";
import SVG from "@/CommonComponent/SVG/Svg";
import { Dollar, Href, ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeFromCart } from "@/Redux/Reducers/EcommerceReducer/ProductReducer";
import { ProductDataTypes } from "@/Types/EcommerceType";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";
import { Badge, Col } from "reactstrap";

export const CartSection = () => {
  const { cartData } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const getCartTotal = (item: ProductDataTypes) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
    return 0;
  };
  return (
    <li className='cart-nav onhover-dropdown'>
      <div className='cart-box'>
        <SVG iconId='Bag' />
        <Badge color='secondary' pill>
          {cartData.length}{" "}
        </Badge>
      </div>
      <div className='cart-dropdown onhover-show-div'>
        <h4 className='f-18 mb-0 dropdown-title'>Cart</h4>
        {cartData && cartData.length > 0 ? (
        <ul>
          <>
            {cartData.map((item) => (
              <li key={item.id}>
                <div className='d-flex'>
                  <Image className='img-fluid b-r-5 img-40' src={`${ImagePath}/${item.image}`} width={40} height={45} alt='' />
                  <div className='flex-grow-1'>
                    <span>{item.name}</span>
                    <h6>
                      {item.quantity} x {Dollar}
                      {item.price}
                    </h6>
                    {}
                  </div>
                  <div className='close-circle' onClick={() => dispatch(removeFromCart(item.id))}>
                    <a href={Href}>
                      <X />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </>
          <li className='total'>
            <h5 className='mb-0'>
              Subtotal :{" "}
              <span className='f-right'>
                {Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}
              </span>
            </h5>
          </li>
          <li>
            <Link className='view-cart' href={`/app/ecommerce/cart`}>
              View cart
            </Link>
            <Link className='view-checkout f-right' href={`/app/ecommerce/checkout`}>
              Checkout
            </Link>
          </li>
        </ul>
         ) : (
          <Col sm={12} className='empty-cart-cls text-center'>
          <Image height={172} width={172} src={`${ImagePath}/ecommerce/icon-empty-cart.png`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
          <h5>
            <strong>Your Cart is Empty</strong>
          </h5>
          <h6>Add something to make me happy</h6>
          <Link className='btn btn-primary cart-btn-transform m-t-15 mb-4' href='/app/ecommerce/product'>
            continue shopping
          </Link>
        </Col>
        )}
      </div>
    </li>
  );
};
