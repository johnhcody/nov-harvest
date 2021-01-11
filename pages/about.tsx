import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import Image from 'next/image'
import ParaOne from '../components/about/ParaOne';
import ParaTwo from '../components/about/ParaTwo';

interface Props {

}
interface State {

}

export default class About extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BaseLayout>
                <ParaOne />
            </BaseLayout>
        )
    }
}