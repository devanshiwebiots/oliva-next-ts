"use client";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant/constant";

const Loading = () => {
  return (
    <div className='loader-wrapper'>
      <div className='theme-loader'>
        <div className='loader'>
          <div className='loader-logo'>
            <RatioImage src={`${ImagePath}/landing/logo/footer-logo.png`} alt='loading' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
