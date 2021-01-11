import React, { useState } from 'react'
import Link from 'next/link'
//import Modal from '../modal';
//import Modal from 'react-modal';
import Image from 'next/image'


interface Props {
    
}


export const Header = (props: Props) => {

    //const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className="header-wrapper">
            <Link href="/">
            <div className="left-buffer">
                {/* <a> N.H. </a> */}
                <Image
                    src="/logo-sm.png"
                    alt="Novembers Harvest Logo"
                    height={75}
                    width={75}
                />
            </div>
            </Link>
            <Link href="/about">
                <a> About </a>
            </Link>
            <Link href="/csa">
                <a> CSA </a>
            </Link>
            <Link href="/contact">
                <a> Contact </a>
            </Link>
        </div>
    )
}


