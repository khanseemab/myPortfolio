import React, { Component } from "react";
import "./Forms.css";
import emailjs from 'emailjs-com';

export default class Forms extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    message_state: false,
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      first_main_name: name,
      to_name: "seemab2703@gmail.com",
      subject: subject,
      message_html: message,
    };

    emailjs.send('service_ks9aeuz','template_wq171sn', templateParams, 'user_q75gmWOfgnrvYgtSACkBA')
	// .then((response) => {
	//    console.log('SUCCESS!', response.status, response.text);
	// }, (err) => {
	//    console.log('FAILED...', err);
	// });
      .then(
        this.setState({
          name: "", 
          email: "",
          subject: "",
          message: "",
          message_state: true,
        })
      );

    // alert("You are submitting " + this.state.username);
    // console.log(this.state);
  };
  render() {
    if (this.state.message_state === true) {
      return (
        <div className="alert alert-success" role="alert">
          Your message has been delivered you will be contacted soon by me.
        </div>
      );
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="YOUR NAME"
              value={this.state.name}
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              placeholder="YOUR EMAIL"
              onChange={this.myChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="SUBJECT"
            value={this.state.subject}
            onChange={this.myChangeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="message"
            className="form-control"
            placeholder="MESSAGE"
            value={this.state.message}
            onChange={this.myChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-block btn-large">
          Leave a message
        </button>
      </form>
    );
  }
}
