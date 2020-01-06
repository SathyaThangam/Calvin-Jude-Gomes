import React from 'react'

const ListCard = ({ Product, Functions, FuncCount }) => {

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
        delete: {
            border: 'none',
            borderRadius: '100px',
            padding: '7px 12px',
            fontSize: '1rem',
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'black',
            backgroundColor: '#ddd'
        },
        addTo: {
            border: 'none',
            borderRadius: '100px',
            padding: '7px 12px',
            fontSize: '1rem',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            color: 'black',
            backgroundColor: '#ddd'
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
    return (
        <div style={Styles.general}>
            <div className="card" style={Styles.card}>
                <div style={Styles.cardInner}>
                    <div>
                        {/* <img src={img} height='100%' width='100%' /> */}
                    </div>
                    <div style={Styles.cardBody}>
                        <h6 className="">{Product.name}</h6>
                        <h5 className="">{Product.subName}</h5>
                        <h5 className="">₹ {Product.cost}</h5>
                    </div>
                    {FuncCount === 2 ?
                        <div>
                            <button className="" style={Styles.addTo} onClick={() => {
                                Functions.addToCartHandler(Product);
                            }}>
                                <i className="fa fa-cart-plus"></i>
                            </button>
                            <button className="" style={Styles.delete} onClick={() => {
                                Functions.deleteHandler(Product);
                            }}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                        :
                        <div>
                            <button className="" style={Styles.delete} onClick={() => {
                                Functions.deleteHandler(Product);
                            }}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>


        // <button className="wishList" style={Styles.wishList} onClick={() => {
        //     wishListHandler(Product);
        //     setColor('red')
        // }}>
        //     <i className="fa fa-heart"></i>
        // </button>
        // <button className="addCart" style={Styles.cart} onClick={() => cartHandler(Product)}><i class="fa fa-cart-plus"></i>
        // </button>
    )
}

export default ListCard;