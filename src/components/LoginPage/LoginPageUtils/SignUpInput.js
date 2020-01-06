import React from 'react'
import Auth from './../../Utils/Auth'
import { toast } from 'react-toastify';

class SignUpInput extends React.Component {

    state = {
        'email': '',
        'password': '',
        'isPossible': true,
        'wishList': [],
        'cart': []
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

        // event.preventDefault();

        let oldUsers = JSON.parse(localStorage.getItem('Users')) || [];
        let newUsers = this.state;
        // oldUsers.push(newUsers);
        // localStorage.setItem('Users', JSON.stringify(oldUsers));

        this.setState({
            isPossible: true
        })
        if (/[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,15}/.test(this.state.email)) {
            await oldUsers.forEach(user => {
                console.log(this.state.isPossible);
                if (user.email === this.state.email) {
                    console.log("user not possible");
                    this.setState({
                        isPossible: false
                    })
                    console.log(this.state);
                }
            })
            if (this.state.isPossible === true) {
                oldUsers.push(newUsers);
                localStorage.setItem('Users', JSON.stringify(oldUsers));
                localStorage.setItem('currentUser', JSON.stringify(newUsers));
                Auth.authenticate();
                return this.props.history.push("/home");
            } else {
                toast.configure({
                    hideProgressBar: true,
                    autoClose: 2000,
                })
                console.log("User Already exits")
                toast("User Already Exists!");
            }
        } else {
            console.log("Invalid Email ID!");
            toast.configure({
                hideProgressBar: true,
                autoClose: 2000,
            })
            toast("Invalid Email ID!");
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
                'left': '428px'
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
                    <h1 style={{ 'padding': '20px' }}>Sign Up</h1>
                    <form>
                        <div className="form-group">
                            <input style={Styles.input} type="email" className="form-control" id="Email" name="email" value={email} placeholder="Email" onChange={this.onChangeHandler} required />
                        </div>
                        <div className="form-group">
                            <input style={Styles.input} type="password" className="form-control" id="Password" name="password" value={password} placeholder="Password" onChange={this.onChangeHandler} required />
                        </div>
                        <div className="form-group">
                            <button style={Styles.button} className="btn btn-primary" type="button" onClick={this.onSubmitHandler}>Sign Up</button>
                            {/* <button style={Styles.button} className="btn btn-danger" type="button" onClick={this.onResetHandler}>Reset</button> */}
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default SignUpInput;