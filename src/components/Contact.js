import React from 'react'

const Contact = () => {


    const handleOnClick = ()=>{
        document.getElementsByClassName('reserve')[0].innerHTML = "Reservation Made"
    }
    return (
        <>
            <div className="extra"></div>
            <div className="contact-cont">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h5 className="heading whitetext">CONTACT US</h5>
                        <h3 className='whitetext'>Here You Can Make A Reservation Or Just walkin to our cafe</h3>
                        <p className="whitetext">
                            Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.
                        </p>
                        <div className="row">
                            <div className="col-md-6" >
                                <div className="card mt-4" >
                                    <div className="card-body">
                                        <h5 className='text-center' style={{ fontWeight: "bolder" }}>Phone Numbers</h5>
                                        <div className="text-center">
                                            9999999999<br />9999999999
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h5 className='text-center' style={{ fontWeight: "bolder" }}>Emails</h5>
                                        <div className="text-center">
                                            123@gmail.com<br />456@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body mt-4">
                                <h3 className='text-center' style={{ fontWeight: "bolder" }}>Table Reservation</h3>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6 mt-2 mb-3">
                                            <input type="text" placeholder='Your Name*' className='form-control' id='name' required />
                                        </div>
                                        <div className="col-lg-6 mt-2 mb-3">
                                            <input type="email" placeholder='Your Email Address' className='form-control' id='email' />
                                        </div>

                                        <div className="col-lg-6 mt-2 mb-3">
                                            <input type="text" placeholder='Phone Number*' className='form-control' id='phone' required />
                                        </div>
                                        <div className="col-lg-6 mt-2 mb-3">
                                            <input type="number" placeholder='Number of Guests' className='form-control' id='number' />
                                        </div>

                                        <div className="col-lg-6 mt-2 mb-3">
                                            <input type="date" className='form-control' id='date' required />
                                        </div>
                                        <div className="col-lg-6 mt-2 mb-3">
                                            <select class="form-select">
                                                <option>Time</option>
                                                <option value="1">Breakfast</option>
                                                <option value="2">Lunch</option>
                                                <option value="3">Dinner</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder='Message' name="message" className='form-control' id="message" rows={6}></textarea>

                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <div className="btn btn-danger mt-3 reserve" onClick={handleOnClick}>
                                            Make A Reservation
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact