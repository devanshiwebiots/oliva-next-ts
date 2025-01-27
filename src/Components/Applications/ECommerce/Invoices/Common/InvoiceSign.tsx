import { ImagePath } from '@/Constant/constant';
import Image from 'next/image';
import React from 'react'

const CommonInvoiceSign = () => {
    return (
        <td>
            <Image width={154} height={49} src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
            <span style={{ color: "var(--theme-default)", display: "block", fontSize: 18, fontWeight: 600 }} >Laurine T. Ebbert</span>
            <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
        </td>
    )
}
export default CommonInvoiceSign;