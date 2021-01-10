import React, { useState } from 'react'
import Link from 'next/link'
//import Modal from '../modal';
import Modal from 'react-modal';


interface Props {
    
}


export const Header = (props: Props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className="header-wrapper">
            <Link href="/">
                <a> M.R. </a>
            </Link>
            <i onClick={() => setModalIsOpen(true)} className="fas fa-bars"></i>
            <Modal className="modal" ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{
                overlay: {
                    backgroundColor: 'transparent'
                },
                content: {
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '0px',
                    top: '40px',
                    left: '0px',
                    right: '0px',
                    bottom: '40px',
                    background: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '50px'
                }
            }}>
                <div className="modal-link-wrapper">
                    <Link href="/about">
                        <a> About </a>
                    </Link>
                    <Link href="/portfolio">
                        <a> Written Work </a>
                    </Link>
                    <Link href="/cv">
                        <a> CV </a>
                    </Link>
                    <a></a>
                </div>
            </Modal>
        </div>
    )
}


