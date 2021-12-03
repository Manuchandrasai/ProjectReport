import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../index.css';
class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            names: '',
            passwords: '',
            position: '',
            prename: '',
            prepassword: ''
        }
        //let history = useHistory();
    }


    onFormsChange = (e) => {
        this.setState({ names: e.target.value });
    }
    onFormsChangePassword = (e) => {
        this.setState({ passwords: e.target.value });
    }

    onCheck = () => {
        let { names, passwords, prename, prepassword } = this.state;
        localStorage.setItem('names', names);
        localStorage.setItem('passwords', passwords);
        prename = localStorage.getItem('name');
        prepassword = localStorage.getItem('password');
        this.setState({ prename: prename });
        this.setState({ prepassword: prepassword });
        if (this.state.names === prename && this.state.passwords === prepassword) {
            //history.push('/home');

            this.props.history.push({
                pathname: './home',
            })
            alert('login successful');
        }
        else {
            alert('enter valid inputs');
        }
    }


    render() {

        const onClickLink = () => {
            return (this.state.names !== this.state.prename && this.state.passwords !== this.state.prepassword) ? '' : 'home';
        }
        const val = onClickLink();
        console.log(val);
        return (

            <div className="ui container login">

                <form onSubmit={this.onCheckSubmit} className="ui form">
                    <div className="field">

                        <h4>Welcome to  (PMS) <i class="book white icon"></i></h4>
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="names"
                            value={this.state.names}
                            onChange={this.onFormsChange} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password"
                            name="passwords"
                            value={this.state.passwords}
                            onChange={this.onFormsChangePassword} />
                    </div>
                    <div className="field">
                        <button className="ui button inverted secondary loginpagebutton" type="submit" onClick={this.onCheck}>Login</button>
                        <Link to='/signup'><button className="ui button inverted secondary loginpagebutton" data-tooltip="Please Sign Up" data-position="right center" type="submit">Sign Up</button></Link>
                    </div>
                </form>

            </div>
        );
    }
}

export default Login;