import React, { Component } from 'react'
import Navbar from './../Utils/Navbar';
import CartCard from './../Utils/ListCard/ListCard'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CardList extends Component {

    state = {
        as: true
    }
    render() {
        toast.configure({
            hideProgressBar: true,
            autoClose: 2000,
        })

        const Styles = {
            general: {
                backgroundColor: '#2f2f2f',
                minHeight: '100vh'
            },
            total: {
                overflow: 'hidden',
                backgroundColor: 'Black',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                color: 'white'
            },
            totalContent: {
                float: 'right',
                padding: '7px 25px'
            }
        }

        let total = 0;

        let list = JSON.parse(localStorage.getItem('currentUser'));

        const deleteHandler = (item) => {
            let count = 0;
            console.log("Delete");
            list.cart.forEach(listItem => {
                if (listItem.subName === item.subName) {
                    list.cart.splice(count, 1);
                    total -= item.cost;
                    toast("Item has been Deleted from Cart");
                    localStorage.setItem('currentUser', JSON.stringify(list));
                    this.setState({
                        as: true
                    })
                }
                count++;
            })

        }

        const funcCount = 1;

        const functions = {
            deleteHandler
        }
        return (
            <div style={Styles.general}>
                <Navbar />
                <div style={{ paddingLeft: '20px' }}>
                    <div className="row" style={{ 'width': '100%', justifyContent: 'center' }}>
                        <h2 style={{ 'color': 'white', padding: '12px' }}>Cart</h2>
                    </div>
                    <div className="" style={{ 'width': '100%', justifyContent: 'center', paddingBottom: '100px' }}>
                        {this.state.as === true ?
                            list.cart.map((item) => {
                                total += item.cost;
                                return <CartCard Product={item} Functions={functions} FuncCount={funcCount} />
                            }
                            ) : null
                        }
                    </div>
                </div>
                <div className="total" style={Styles.total}>
                    <h2 style={Styles.totalContent}>Total : ₹{total}</h2>
                </div>
            </div >
        )
    }
}
export default CardList;