import React from 'react'

const Home = () => {
    return (
        <>
            <div className="extra"></div>

            <div className="home-card">
                <div className="card">
                    <div className="card-img-top home-card-img">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/slide-01.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/slide-02.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/slide-03.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="card-body home-card-body">
                        <p className="card-text restuarant">KlassyCafe</p>
                        <p className="card-text poppinstext">THE BEST EXPERIENCE</p>
                        <a className="btn btn-danger reservebtn poppinstext" href='#contact'>Make a Reservation</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home