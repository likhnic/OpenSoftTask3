import React from 'react'

const Itemcard = (props) => {

    const item=props.item
    return (
        <>
            <div key={item.id}>
                <div class="item card m-2" >
                    <div className="item-banner">
                        {item.price}
                    </div>
                    <img src={item.img} class="card-img-top" alt="1" />
                    <div className="overlay-card text-center">
                        <div className="item-name heading">
                            {item.name}
                        </div>
                        {item.description}
                        <br />
                        <div className="btn btn-danger mt-3">
                            Add to Cart
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itemcard