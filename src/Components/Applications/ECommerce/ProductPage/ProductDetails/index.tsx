import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ProductPageWidth from './ProductPageWidth';
import SocialIcons from './SocialIcons';
import StarRating from './StarRating';
import ButtonLinks from './ButtonLinks';
import { useAppSelector } from '@/Redux/Hooks';
import { Dollar, WomenPinkShirt } from '@/Constant/constant';

const ProductDetails = () => {
    const productData = useAppSelector((state) => state.product.productItem);
    const product = productData[0];
    const products = {
        price: productData[0]?.price,
        discountPrice: productData[0]?.discountPrice,
    };

    return (
        <Col xxl={5} className='box-col-6 order-xxl-0 order-1'>
            <Card>
                <CardBody>
                    <div className='product-page-details'>
                        <h3>{WomenPinkShirt}</h3>
                    </div>
                    <div className='product-price'>
                        {Dollar}{products.price}
                        <del>{Dollar}{products.discountPrice}</del>
                    </div>
                    <ul className='product-color simple-list flex-row'>
                        <li className='bg-primary'></li>
                        <li className='bg-secondary'></li>
                        <li className='bg-success'></li>
                        <li className='bg-info'></li>
                        <li className='bg-warning'></li>
                    </ul>
                    <hr />
                    <p>{'Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.'}</p>
                    <hr />
                    <ProductPageWidth /><hr />
                    <SocialIcons /><hr />
                    <StarRating /><hr />
                    <ButtonLinks product={product} />
                </CardBody>
            </Card>
        </Col>
    )
}
export default ProductDetails;