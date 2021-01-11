import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="form-wrapper">
                <form
                    className="contact-form"
                    onSubmit={this.submitForm}
                    action="https://formspree.io/f/mqkgwygn"
                    method="POST"
                >
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter Email Here"/>
                    <label>Message:</label>
                    <textarea name="message" placeholder="Let us know what you are looking for.  A visit to the farm?  Hosting an event?  A workshop with arts and crafts?"/>
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>

                
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}