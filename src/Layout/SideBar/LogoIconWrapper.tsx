import { ImagePath } from '@/Constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoIconWrapper = () => {
    return (
        <div className="logo-icon-wrapper">
            <Link href={`/dashboard/default`}>
                <Image className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} width={32} height={32} alt="" />
            </Link>
        </div>
    )
}
export default LogoIconWrapper
