import React from 'react'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
        this.handleEmailSubjectChange = this.handleEmailSubjectChange.bind(this);
        this.handleEmailMessageChange = this.handleEmailMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            emailAddress: '',
            emailSubject: '',
            emailMessage: ''
        }
    }

    handleEmailAddressChange(event) {
        this.setState({ emailAddress: event.target.value });
    }

    handleEmailSubjectChange(event) {
        this.setState({ emailSubject: event.target.value });
    }

    handleEmailMessageChange(event) {
        this.setState({ emailMessage: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var email = this.state.emailAddress;
        var subject = this.state.emailSubject;
        var message = this.state.emailMessage;
        var endpoint = 'https://dy9qeil84c.execute-api.us-east-1.amazonaws.com/prod/contact-form-logic';

        var body = {
            email: email,
            subject: subject,
            message: message
        };

        console.log(body);

        var endpointRequest = new Request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body)
        });

        console.log(endpointRequest);

        fetch(endpointRequest)
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h3>Contact Us</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email Address:
                    <input type="text" name="emailAddress" style={{ display: 'block', width: '250px' }} value={this.state.emailAddress} onChange={this.handleEmailAddressChange} />
                    </label>
                    <label>
                        Subject:
                    <input type="text" name="subject" style={{ display: 'block', width: '350px' }} value={this.state.emailSubject} onChange={this.handleEmailSubjectChange} />
                    </label>
                    <label>
                        Message:
                    <textarea name="message" rows="10" style={{ display: 'block', width: '450px' }} value={this.state.emailMessage} onChange={this.handleEmailMessageChange} >
                    </textarea>
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default ContactForm