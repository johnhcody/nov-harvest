import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import ContactForm from '../components/contact/ContactForm';
interface Props {

}
interface State {

}

class Csa extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BaseLayout>
                <div className="text-wrapper">
                    <h1>Get in touch!</h1>
                </div>
                <ContactForm />
            </BaseLayout>
        )
    }
}

export default Csa