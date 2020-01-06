import React from 'react';
import LoginBG from './../../Images/Login1.jpg';
import LoginInput from './LoginPageUtils/LoginInput'
import SignUpInput from './LoginPageUtils/SignUpInput'

class LoginPage extends React.Component {

    //STATE
    state = {
        showLoginPage: true,
        showLogin: null
    };

    render() {

        const Styles = {
            general: {
                'fontFamily': 'Montserrat',
                'height': '100vh',
                'padding': '90px',
                'background': `url(${LoginBG})`,
                'backgroundPosition': 'center',
                'backgroundSize': 'cover',
                'color': 'white'
            },
            h1: {
                'paddingBottom': '100px',
                'color': 'white'
            },
            button: {
                'backgroundColor': '#99cc33',
                'color': '#333333',
                'padding': '5px 70px',
                'margin': '30px',
                'border': 'none',
                'fontSize': '1.3rem'
            }
        };

        //FUNCTIONS
        const loginHandler = () => {
            this.setState({
                'showLogin': true,
                'showLoginPage': false
            })
            console.log('Login');
        }

        const signUpHandler = () => {
            console.log('Sign Up');
            this.setState({
                'showLogin': false,
                'showLoginPage': false
            });
        }

        return (
            <div style={Styles.general}>

                <h1 style={Styles.h1}>LimePunch</h1>
                <h3 style={Styles.h1}>India's Most Loved Platform</h3>
                <button style={Styles.button} className="btn" onClick={loginHandler}>LOGIN</button>
                <button style={Styles.button} className="btn" onClick={signUpHandler}>SIGN UP</button>

                {this.state.showLogin === true ?
                    <LoginInput history={this.props.history} />
                    : this.state.showLogin === false ?
                        <SignUpInput history={this.props.history} />
                        : null
                }
            </div>
        )
    }

}

export default LoginPage;