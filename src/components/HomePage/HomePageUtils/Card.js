import React, { useState } from 'react'
import img from './../../../Images/shoe.png';
const Card = ({ Product, wishListHandler, cartHandler }) => {

    const [color, setColor] = useState('white');
    const Styles = {
        general: {
            margin: '20px 20px 20px 20px',
        },
        card: {
            // boxShadow: '5px 10px 10px 1px #77777781',
            width: '292px',
            borderRadius: '0px',
            border: 'none'
        },
        cardInner: {
            margin: '0px',
            padding: '0px',
            textAlign: 'left'
        },
        wishList1: {
            border: 'none',
            borderRadius: '100px',
            padding: '7px 12px',
            fontSize: '1rem',
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'red',
            backgroundColor: 'transparent'
        },
        wishList2: {
            border: 'none',
            borderRadius: '100px',
            padding: '7px 12px',
            fontSize: '1rem',
            position: 'absolute',
            top: '10px',
            right: '10px',
            color,
            backgroundColor: 'transparent'
        },
        cardBody: {
            paddingTop: '30px',
            paddingLeft: '30px'
        },
        cart: {
            border: 'none',
            borderRadius: '100px',
            padding: '7px 12px',
            fontSize: '1rem',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            color: 'black',
            backgroundColor: '#dddddd'
        }

    }

    let wishListItems = JSON.parse(localStorage.getItem('currentUser')) || [];
    let newList = wishListItems.wishList;
    let temp = false;
    return (
        <div style={Styles.general}>
            <div className="card" style={Styles.card}>
                <div style={Styles.cardInner}>
                    <div>
                        <img src={img} height='100%' width='100%' />
                    </div>
                    <div style={Styles.cardBody}>
                        <h6 className="">{Product.name}</h6>
                        <h5 className="">{Product.subName}</h5>
                        <h5 className="">₹ {Product.cost}</h5>
                    </div>
                    {newList.map(wish1 => {
                        if (wish1.subName === Product.subName) {
                            if (wish1.color === 'red') {
                                temp = true;
                                return <button className="wishList" style={Styles.wishList1} onClick={() => {
                                    wishListHandler(Product);
                                    setColor('red')
                                }}>
                                    <i className="fa fa-heart"></i>
                                </button>
                            }
                        }
                    })}
                    {temp === false ? <button className="wishList" style={Styles.wishList2} onClick={() => {
                        wishListHandler(Product);
                        setColor('red')
                    }}>
                        <i className="fa fa-heart"></i>
                    </button> : null}
                    {/* <button className="wishList" style={Styles.wishList} onClick={() => {
                        wishListHandler(Product);
                        setColor('red')
                    }}>
                        <i className="fa fa-heart"></i>
                    </button> */}
                    <button className="addCart" style={Styles.cart} onClick={() => cartHandler(Product)}><i className="fa fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Card;