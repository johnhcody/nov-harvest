import React, { useState } from 'react'
import Link from 'next/link'
//import Modal from '../modal';
//import Modal from 'react-modal';
import Image from 'next/image'


interface Props {

}


export const Footer = (props: Props) => {

    //const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className="footer-wrapper">

                <a href="https://www.facebook.com/novembersharvest/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/novembersharvest/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://goo.gl/maps/Ad7PwKHAYbxaQRdW6" target="_blank"><i className="fas fa-map-marker-alt"></i></a>

        </div>
    )
}