import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

interface Props {
    
}
interface State {
    
}

class Blog extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BaseLayout>
                <h1>hello from the blog page</h1>
            </BaseLayout>
        )
    }
}

export default Blog;
