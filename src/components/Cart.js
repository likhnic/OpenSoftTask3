import React from 'react'

const Cart = () => {
    
    const cartItems=[]

  return (
    <>
        <div className="container">
            {cartItems.length===0 && <div>Add an Item to display</div>}
        </div>
    </>
  )
}

export default Cart