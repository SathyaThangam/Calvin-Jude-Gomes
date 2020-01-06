import React, { Component } from 'react'
import Navbar from './../Utils/Navbar';
import WishListCard from './../Utils/ListCard/ListCard'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class WishList extends Component {
    state = {
        as: true
    }
    render() {

        const Styles = {
            general: {
                backgroundColor: '#2f2f2f',
                minHeight: '100vh'
            }
        }

        let list = JSON.parse(localStorage.getItem('currentUser'));
        let oldUsers = JSON.parse(localStorage.getItem('Users'));

        console.log(this.state);
        const addToCartHandler = (item) => {
            let count = 0;

            list.cart.push(item);
            localStorage.setItem('currentUser', JSON.stringify(list));

            oldUsers.forEach(oldUser => {
                if (list.email === oldUser.email) {
                    oldUsers.splice(count, 1);
                    oldUsers.push(list);
                    toast.configure({
                        hideProgressBar: true,
                        autoClose: 2000,
                    });
                    toast("Item has been added to Cart");
                    return localStorage.setItem('Users', JSON.stringify(oldUsers));
                }
                count++;
            })
        }

        const deleteHandler = (item) => {
            let count = 0;
            console.log("Delete");
            list.wishList.forEach(listItem => {
                if (listItem.subName === item.subName) {
                    list.wishList.splice(count, 1);
                    localStorage.setItem('currentUser', JSON.stringify(list));
                    this.setState({
                        as: true
                    })
                }
                count++;
            })

        }

        const funcCount = 2;

        const functions = {
            deleteHandler,
            addToCartHandler
        }

        return (
            <div style={Styles.general}>
                <Navbar />

                <div style={{ paddingLeft: '20px' }}>
                    <div className="row" style={{ 'width': '100%', justifyContent: 'center' }}>
                        <h2 style={{ 'color': 'white', padding: '12px' }}>Wish List</h2>
                    </div>
                    <div className="row" style={{ 'width': '100%', justifyContent: 'center' }}>
                        {this.state.as === true ?
                            list.wishList ?
                                list.wishList.map(item => <WishListCard Product={item} Functions={functions} FuncCount={funcCount} />)
                                : <h2>There's Nothing to Display !</h2>
                            : null
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default WishList;
