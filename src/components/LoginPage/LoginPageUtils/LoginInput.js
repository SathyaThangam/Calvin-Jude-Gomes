import React from 'react'
import Auth from './../../Utils/Auth'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginInput extends React.Component {

    state = {
        'email': '',
        'password': '',
        'isAuth': false,
        'nlyOne': false
    }

    onChangeHandler = event => {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onResetHandler = () => {
        console.log();
        this.setState({
            'email': '',
            'password': ''
        });
    }

    onSubmitHandler = async event => {

        event.preventDefault();

        console.log(this.state);
        let oldUsers = await JSON.parse(localStorage.getItem('Users')) || [];
        if (!/[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,15}/.test(this.state.email)) {
            toast.configure({
                hideProgressBar: true,
                autoClose: 2000,
            })
            toast('Invalid Email');
        }
        else {
            oldUsers.forEach(user => {
                if (user.email === this.state.email) {
                    if (user.password === this.state.password) {
                        this.setState({
                            'isAuth': true,
                            'wishList': user.wishList,
                            'cart': user.cart
                        })
                        console.log(this.state);
                        let currentUser = this.state;
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        Auth.authenticate();
                        this.setState({
                            nlyOne: true
                        })
                        return this.props.history.push("/home");
                    } else {
                        if (this.state.isAuth === false && this.state.nlyOne === false) {
                            toast.configure({
                                hideProgressBar: true,
                                autoClose: 2000,
                            })
                            this.setState({
                                nlyOne: true
                            })
                            console.log("Invalid Details!!!");
                            return toast("Invalid Details!!!");
                        }
                    }
                } else {
                    if (this.state.isAuth === false && this.state.nlyOne === false) {
                        toast.configure({
                            hideProgressBar: true,
                            autoClose: 2000,
                        })
                        this.setState({
                            nlyOne: true
                        })
                        console.log("Invalid Details!!!");
                        return toast("Invalid Details!!!");
                    }
                }
            })
            // toast('Invalid ID');
        }
    }

    render() {



        const Styles = {
            modal: {
                'position': 'fixed',
                'top': '0px',
                'left': '0px',
                'height': '100vh',
                'width': '100vw',
                'backgroundColor': '#0000001f',
                'backdropFilter': 'blur(8px)'
            },
            general: {
                'position': 'fixed',
                'textAlign': 'center',
                'width': '40%',
                'height': '50%',
                'backgroundColor': '#00000099',
                'top': '150px',
                'left': '428px',
            },
            input: {
                'marginLeft': '5vw',
                'padding': '15px',
                'width': '400px',
                'fontSize': '1rem'
            },
            button: {
                'fontSize': '1rem',
                'margin': '10px',
                'backgroundColor': '#99cc33',
                'color': '#333333',
                'border': 'none',
            }
        }
        const { email, password } = this.state;
        return (
            <div className="row" style={Styles.modal}>
                <div style={Styles.general}>
                    <h1 style={{ 'padding': '20px' }}>Login</h1>
                    <form>
                        <div className="form-group">
                            <input style={Styles.input} type="email" className="form-control" id="Email" name="email" value={email} placeholder="Email" onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <input style={Styles.input} type="password" className="form-control" id="Password" name="password" value={password} placeholder="Password" onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <button style={Styles.button} className="btn btn-primary" type="button" onClick={this.onSubmitHandler}>Login</button>
                            {/* <button style={Styles.button} className="btn btn-danger" type="button" onClick={this.onResetHandler}>Reset</button> */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginInput;