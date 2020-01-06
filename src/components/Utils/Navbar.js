import React from "react";
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const styles = {
        navbar: {
            'boxShadow': '1px 1px 10px 2px #000000a1',
            'backgroundColor': '#000000a4',
            'backdropFilter': 'blur(8px)'
        },
        navbarBrand: {
            'color': '#99cc33'
        },
        navLinks: {
            'paddingRight': '15px',
        },
        link: {
            'color': '#afafaf'
        }
    };

    toast.configure({
        hideProgressBar: true,
        autoClose: 2000,
    })

    const logOutHandler = () => {
        let count = 0;

        let oldUsers = JSON.parse(localStorage.getItem('Users'));
        let user = JSON.parse(localStorage.getItem('currentUser'));

        oldUsers.forEach(oldUser => {
            if (user.email === oldUser.email) {
                oldUsers.splice(count, 1);
                oldUsers.push(user);
                localStorage.setItem('Users', JSON.stringify(oldUsers));
                localStorage.removeItem('currentUser');
            }
            count++;
        })
        toast("User has been Logged out!");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={styles.navbar}>
            <a style={styles.navbarBrand} className="navbar-brand" href="/">LimePunch</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav mr-auto">
                </ul>
                <ul className="nav navbar-nav">
                    <li className="nav-item" style={styles.navLinks}>
                        <Link className="nav-link" to="/home" style={styles.link}>Home</Link>
                    </li>
                    <li className="nav-item" style={styles.navLinks}>
                        <Link className="nav-link" to="/wishlist" style={styles.link}>WishList</Link>
                    </li>
                    <li className="nav-item" style={styles.navLinks}>
                        <Link className="nav-link" to="/cart" style={styles.link}>Cart</Link>
                    </li>
                    <li className="nav-item" style={styles.navLinks}>
                        <Link className="nav-link" to="/" onClick={logOutHandler} style={styles.link}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
