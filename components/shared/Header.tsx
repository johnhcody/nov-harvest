import React, { useState } from 'react'
import Link from 'next/link'
//import Modal from '../modal';
//import Modal from 'react-modal';


interface Props {
    
}


export const Header = (props: Props) => {

    //const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className="header-wrapper">
            <Link href="/">
                <a> N.H. </a>
            </Link>
            <Link href="/about">
                <a> About </a>
            </Link>
            <Link href="/csa">
                <a> CSA </a>
            </Link>
        </div>
    )
}


