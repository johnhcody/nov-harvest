import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

interface Props {
    
}
interface State {
    
}

class Cv extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BaseLayout>
                <h1>hello from the CV page</h1>
                <h2>test</h2>
            </BaseLayout>
        )
    }
}

export default Cv
