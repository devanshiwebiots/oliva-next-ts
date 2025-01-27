import React, { useEffect } from 'react'
import { Badge, Col, Row } from 'reactstrap'
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { ProductDataTypes } from '@/Types/EcommerceType';
import { addCartData, fetchProductData } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import Image from 'next/image';
import { Dollar, Href, ImagePath, MoveToCart, Price } from '@/Constant/constant';

const WishlistCards = () => {
    const router = useRouter();
    const productItem = useAppSelector((state) => state.product.productItem);
    const dispatch = useAppDispatch();
    const moveToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
        router.push(`/app/ecommerce/cart`);
    };
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    return (
        <Row className='g-sm-4 g-3'>
            {productItem.map((item) => (
                <Col xl={4} md={6} key={item.id}>
                    <div className="prooduct-details-box">
                        <div className="d-flex">
                            <Image width={60} height={60} className="align-self-center img-fluid img-60" src={`${ImagePath}/${item.image}`} alt="#" />
                            <div className="flex-grow-1 ms-3">
                                <div className="product-name">
                                    <h6><a href={Href}>{item.name}</a></h6>
                                </div>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price d-flex border-0 p-0">
                                    <div className="text-muted me-2">{Price}</div>: {item.price}{Dollar}
                                </div>
                                <div className="avaiabilty">
                                    <div className="text-success">{item.stock}</div>
                                </div>
                                <Badge href={Href} color="light-primary" className='txt-primary' onClick={() => moveToCart(item)}>
                                    {MoveToCart}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
export default WishlistCards;