import React from 'react'

const Chefs = () => {
    return (
        <div className="chef-cont">
            <div className="extra"></div>
            <div className="container text-center">
                <h5 className="heading">
                    OUR CHEFS
                </h5>
                <h2>We Offer the best <br /> ingredients for you</h2>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="card shadow p-3 mb-4 bg-body rounded">
                            <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/chefs-01.jpg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3 className='heading'>Name 1</h3>
                                <p className='text-muted'>Pastry Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/chefs-02.jpg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3 className='heading'>Name 2</h3>
                                <p className='text-muted'>Pastry Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/chefs-03.jpg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3 className='heading'>Name 3</h3>
                                <p className='text-muted'>Pastry Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chefs