import React from 'react'
import { NavLink } from 'react-router-dom'
function Sginup() {
    return (
        <>
            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i class="zmdi zmdi-assignment-account"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i class="zmdi zmdi-account"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i class="zmdi zmdi-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="mobile" placeholder="Phone Number" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i class="zmdi zmdi-slideshow"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work" placeholder="Your Profession" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i class="zmdi zmdi-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i class="zmdi zmdi-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="cpassword" placeholder="Confirm Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>

                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

            </div>

        </>
    )
}

export default Sginup