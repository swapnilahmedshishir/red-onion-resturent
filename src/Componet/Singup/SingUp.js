import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
  const Logo = "https://i.postimg.cc/nzQJXbng/logo2.png";

    return (
        <div className='login_box'>
         <img className="Login_image" src={Logo} alt="logo-ima" />
         <div className='submit_box'>
            {/* singUp page  */}
            <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" for="form3Example1">First name</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" for="form3Example2">Last name</label>
                </div>
                </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control"  placeholder='Must 8 charecter & 2 num' />
                <label className="form-label" for="form3Example4" >Password</label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form3Example5" className="form-control" placeholder='Must 8 charecter & 2 num' />
                <label className="form-label" for="form3Example5" >Confirm Password</label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
            <div claclassNamess="col p-2">
                    {/* <!-- Simple link --> */}
                    <Link to='/Signin'>Already have an account </Link>
                
                </div>
            {/* <!-- Register buttons --> */}
            <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-github"></i>
                </button>
            </div>
            </form>
         </div>
            
        </div>
    );
};

export default SingUp;