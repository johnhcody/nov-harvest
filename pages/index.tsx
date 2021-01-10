import React from 'react'
import { Header } from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'reactstrap'
import Typed from 'react-typed'
import Image from 'next/image'
interface Props {

}

const Index = (props: Props) => {
    

    return (
            <BaseLayout>
                <div className="index-page-wrapper">
                    <div className="image-wrapper">
                        <Image 
                            src="/splash-background.jpg"
                            alt="Picture of the author"
                            // width={500}
                            // height={500}
                            className="background"
                            layout="fill"
                        />
                    </div>
                    <Typed
                    strings={[
                        'I am a writer',
                        'I am a journalist',
                        'I am a storyteller',
                        'I am a leader']}
                        typeSpeed={40}
                        backSpeed={50}
                        backDelay={1000}
                        className="typed-text"
                        loop
                    />
                </div>
            </BaseLayout>
    )
}



export default Index