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
                <h1>Hello from Index Page</h1>
            </BaseLayout>
    )
}



export default Index