import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

interface Props {

}
interface State {

}

export default class About extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BaseLayout>
                <h1>Hello from about page</h1>
            </BaseLayout>
        )
    }
}