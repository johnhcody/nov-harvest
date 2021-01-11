import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

interface Props {

}
interface State {

}

class Csa extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BaseLayout>
                <h1>hello from the Contact page</h1>
            </BaseLayout>
        )
    }
}

export default Csa