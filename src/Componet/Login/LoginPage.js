import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {

  const Logo = "https://i.postimg.cc/nzQJXbng/logo2.png";


    return (
        <div className='login_box'>
         <img className="Login_image" src={Logo} alt="logo-ima" />
         <div className='submit_box'>
         <form>
            {/* Email input  */}
            <div className="form-outline mb-4">
                <input type="email" id="form1Example1" className="form-control" />
                <label className="form-label" for="form1Example1">Email address</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="form1Example2" className="form-control" />
                <label className="form-label" for="form1Example2">Password</label>
            </div>

            

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                <div claclassNamess="col">
                    {/* <!-- Simple link --> */}
                    <Link to='/singUp'>Sing up an account</Link>
                
                </div>
            </form>


         </div>
         


        </div>
    );
};

export default LoginPage;