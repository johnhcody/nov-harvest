import React from 'react'
import { Header } from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import Carousel from '../components/splash/Carousel'
interface Props {

}

const Index = (props: Props) => {
    

    return (
            <BaseLayout>
                <Carousel />
                <h1>Hello from Index Page</h1>
            </BaseLayout>
    )
}



export default Index