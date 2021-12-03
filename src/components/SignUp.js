import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../index.css';


class SignUp extends React.Component {
    state = {
        name: '',
        phone: '',
        password: ''
    }

    onFormChange = (name) => {
        this.setState({ name: name.target.value });
    }
    onFormChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    onFormChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    }
    onFormSubmit = (e) => {
        let { name, password, phone } = this.state;
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        localStorage.setItem('phone', phone);
        if (name.length != 0 && password.length != 0 && name.length > 3 && phone.length > 6 && password.length > 5) {
            this.props.history.push({
                pathname: './',
            })
        }
        else if (name.length < 4) {
            alert("name should have more than 3 characteres");
        }
        else if (phone.length < 7) {
            alert("Phone No should have more than 6 characteres");
        }
        else if (password.length < 6) {
            alert("password should have more than 5 characteres");
        }
        else {
            alert("enter valid values")
        }
        console.log(this.state.name);
        console.log(this.state.password);

    }

    render() {
        const onClickLink = () => {
            return (this.state.name.length != 0 && this.state.password.length != 0) ? '' : 'signup';
        }


        const nameValidation = () => {
            return (this.state.name.length < 4) ? 'Name Should have atleast 4 characters' : 'Perfect!!! :-)';
        }
        const nameValidationField = () => {
            return (this.state.name.length < 4) ? 'error' : '';
        }

        const phoneValidation = () => {
            return (this.state.phone.length < 7) ? 'Phone num Should have atleast 7 characters' : 'Perfect!!! :-)';
        }
        const phoneValidationField = () => {
            return (this.state.phone.length < 7) ? 'error' : '';
        }

        const passwordValidation = () => {
            return (this.state.password.length < 6) ? 'Password Should have atleast 6 characters' : 'Perfect!!! :-)';
        }
        const passwordValidationField = () => {
            return (this.state.password.length < 6) ? 'error' : '';
        }



        const val = onClickLink();
        const nameValid = nameValidation();
        const nameValidField = nameValidationField();
        const phoneValid = phoneValidation();
        const phoneValidField = phoneValidationField();
        const passwordValid = passwordValidation();
        const passwordValidField = passwordValidationField();
        console.log(val);
        return (

            <div className="ui container login">

                <form onSubmit={this.onCheckSubmit} className="ui form">
                    <div className="field">

                        <h4> Sign Up  <i class="book black icon"></i></h4>
                    </div>
                    <div className={` field ${nameValidField}`} data-tooltip={`${nameValid}`}
                        data-position="left center">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onFormChange} />
                    </div>

                    <div className={` field ${phoneValidField}`} data-tooltip={`${phoneValid}`}
                        data-position="left center">
                        <label>Phone No:</label>
                        <input
                            type="tel"
                            name="name"
                            value={this.state.phone}
                            onChange={this.onFormChangePhone} />
                    </div>
                    <div className={` field ${passwordValidField}`} data-tooltip={`${passwordValid}`}
                        data-position="left center">
                        <label>Password</label>
                        <input className={`{color}`}
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onFormChangePassword} />
                    </div>
                    <div className="field">

                        <button className="ui button inverted secondary loginpagebutton" type="submit" onClick={this.onFormSubmit}>Sign Up</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignUp;