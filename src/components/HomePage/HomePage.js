import React, { Component } from 'react'
import Navbar from './../Utils/Navbar'
import Card from './HomePageUtils/Card'
import items from './HomePageUtils/ItemsData'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {

    componentDidMount() {
        toast.configure({
            hideProgressBar: true,
            autoClose: 2000,
        });
        let userName = JSON.parse(localStorage.getItem('currentUser')) || [];
        toast("Hello " + userName.email);

    }

    render() {


        let userName = JSON.parse(localStorage.getItem('currentUser')) || [];
        let updatedList = userName.wishList;
        console.log(updatedList);
        const Styles = {
            general: {
                backgroundColor: '#2f2f2f',
            }
        }

        const wishListHandler = (product) => {
            toast("Item has been added to Wishlist");
            let item = product;
            item.color = 'red';
            let oldList = JSON.parse(localStorage.getItem('currentUser')) || [];
            oldList.wishList.push(item);
            localStorage.setItem('currentUser', JSON.stringify(oldList));
            console.log(oldList.wishList);

            let count = 0;
            let oldUsers = JSON.parse(localStorage.getItem('Users'));
            oldUsers.forEach(oldUser => {
                if (oldList.email === oldUser.email) {
                    oldUsers.splice(count, 1);
                    oldUsers.push(oldList);
                    localStorage.setItem('Users', JSON.stringify(oldUsers));
                }
                count++;
            })
        }

        const cartHandler = (product) => {
            toast("Item has been added to Cart");
            let item = product;
            let oldList = JSON.parse(localStorage.getItem('currentUser')) || [];
            oldList.cart.push(item);
            localStorage.setItem('currentUser', JSON.stringify(oldList));
            console.log(oldList.cart);
        }

        return (
            <div style={Styles.general}>
                <Navbar />
                <div style={{ paddingLeft: '20px' }}>
                    <div className="row" style={{ 'width': '100%', justifyContent: 'center' }}>
                        <h2 style={{ 'color': 'white', padding: '12px' }}>New Arrivals</h2>
                    </div>
                    <div className="row" style={{ 'width': '100%', justifyContent: 'center' }}>
                        {items.map(product => <Card Product={product} wishListHandler={wishListHandler} cartHandler={cartHandler} color={product.color} />)}
                    </div>
                </div>
            </div >
        )
    }
}

export default HomePage;