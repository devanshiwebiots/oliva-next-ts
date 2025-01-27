import { ImagePath } from '@/Constant/constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { fetchProductData } from '@/Redux/Reducers/EcommerceReducer/ProductReducer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

const ProductSlider = () => {
    const dispatch = useAppDispatch();
    const { productItem } = useAppSelector((state) => state.product);
    const [nav1, setNav1] = useState<Slider | null>();
    const [nav2, setNav2] = useState<Slider | null>();
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);
    return (
        <>
            <Slider className='product-slider' arrows={false} asNavFor={nav2!} autoplay={true} autoplaySpeed={3000} ref={(slider1) => setNav1(slider1)}>
                {productItem ? productItem.map((item) =>
                    item.variants.map((items, id) =>
                        <Image src={`${ImagePath}/${items.images}`} alt='' width={479} height={400} className="img-fluid" key={id} />)
                ) : "No product Found "
                }
            </Slider>
            <Slider arrows={false} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} infinite={true}>
                {productItem &&
                    productItem.map((item) => {
                        return item.variants.map((items, id) =>
                            <Image src={`${ImagePath}/${items.images}`} alt='' width={107} height={117} className="img-fluid" key={id} />);
                    })}
            </Slider>
        </>
    )
}
export default ProductSlider;