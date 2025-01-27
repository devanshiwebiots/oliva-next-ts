import { ImagePath } from '@/Constant/constant';
import Image from 'next/image';
import React from 'react'

const InvoiceBackImage = () => {
    return (
        <td>
            <Image className="banner-image w-100" width={1114} height={171} src={`${ImagePath}/email-template/invoice-1/1.png`} alt="background" />
        </td>
    )
}
export default InvoiceBackImage;