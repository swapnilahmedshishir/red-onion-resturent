import React, { useState } from "react";
import { Link } from "react-router-dom";
import './singup.css';

const SingUp = () => {
  const Logo = "https://i.postimg.cc/nzQJXbng/logo2.png";

  const [emailErro , setEamilErro] = useState('');    
  const [passwordErro , setpasswordErro] = useState('');
  const [ConfPasswordErro , setConfPasswordErro] = useState('');
   const [checkPwd, setcheckPwd] = useState('') 
  const [validation, setvalidation] = useState({
    SingUp:false,
    message:''
  });

    const [userInfo,setUserInfo] = useState({
        isSingIn : false ,
      fname :"",
      lname :"",
      email : "",
      password :"",
      confpassword:""
    });

    
   // const [erro, setErro] = useState("");

  const userInputInfo = (e) => {
    let userValueValid; 
    if (e.target.name === 'fname') {
      userValueValid = e.target.value;
    }else if (e.target.name === 'lname') {
      userValueValid = e.target.value;
    }else if (e.target.name === "email") {
        const reguler = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        userValueValid = reguler.test(e.target.value);        
        if (!userValueValid) {
          let EmailErr= 'email is not valid';
          setEamilErro(EmailErr);
        }else if (userValueValid) {
          let EmailErr= '';
          setEamilErro(EmailErr);
        }
       
      
    } else if (e.target.name === "password") {
      
        const pwdLengthValid = e.target.value.length > 5 ;
        const pwdCharValid = /\d{1}/.test(e.target.value);       
        userValueValid=(pwdLengthValid && pwdCharValid );
        if (!userValueValid) {
          let passwordErr = 'Please use more than 5 character & 1 digit';
          setpasswordErro(passwordErr);          
        }else if (userValueValid) {
          let passwordErr = '';
          setpasswordErro(passwordErr);
        }


    } else if (e.target.name === "confpassword") {
        const confPwdLengthValid = e.target.value.length > 5 ;
        const confPwdCharValid = /\d{1}/.test(e.target.value);       
        userValueValid = (confPwdLengthValid && confPwdCharValid );
        if (!userValueValid) {
          let confPasswordErr = 'Please use more than 5 character & 1 digit';
          setConfPasswordErro(confPasswordErr);
          
        }else if(userValueValid){
          let confPasswordErr = '';
          setConfPasswordErro(confPasswordErr);
        }
        
    }

    if (userValueValid) {
        const newuser = {...userInfo} ;
        newuser[e.target.name] = e.target.value ;
        setUserInfo(newuser);
    }
    
    
  };

  console.log(userInfo);
  const fromValidation = () =>{
    if(userInfo.password !== userInfo.confpassword){
      setcheckPwd('password is not equal');
    }
  }

  
  const handSubmit = (e) => {
    if(userInfo.fname && userInfo.lname && userInfo.email && userInfo.password && userInfo.confpassword){
        if(userInfo.password === userInfo.confpassword){
          setvalidation({message:'submite success',success:true});          
          console.log('submiting success');
        }else{
          setvalidation({message:'',success:false})
        }
        
    }else{     
      fromValidation();
    }
    
    e.preventDefault();
    
  };
  console.log(validation.success);

  return (
    <div className="login_box">
      <img className="Login_image" src={Logo} alt="logo-ima" />
      <div className="submit_box">
        {/* singUp page  */}
        <form action="" onSubmit={handSubmit}>
          {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  name="fname"
                  required
                  className="form-control"
                  onBlur={userInputInfo}
                />
                <label className="form-label" htmlFor="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example2"
                  name="lname"
                  required
                  className="form-control"
                  onBlur={userInputInfo}
                />
                <label className="form-label" htmlFor="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <p>{emailErro}</p>
            <input
              type="email"
              id="form3Example3"
              name="email"
              placeholder="example@gmail.com"
              required
              className="form-control"
              onBlur={userInputInfo}
            />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <p>{passwordErro}</p>
            <input
              type="password"
              id="form3Example4"
              name="password"
              required
              className="form-control"
              placeholder="Must 8 charecter & 1 digit"
              onBlur={userInputInfo}
            />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>
          <div className="form-outline mb-4">
          <p>{ConfPasswordErro}</p>
            <input
              type="password"
              id="form3Example5"
              name="confpassword"
              required
              className="form-control"
              placeholder="Must 8 charecter & 1 digit"
              onBlur={userInputInfo}
            />
            <label className="form-label" htmlFor="form3Example5">
              Confirm Password
            </label>
          </div>
            <p style={{color:'red'}}>{''}</p>
          {/* <!-- Submit button --> */}
          <div className="d-flex">
                <input
                type="submit"
                className="btn btn-primary btn-block mb-4"
                value="Sign up"
              />
              {
                !validation.success ? <p className="px-5">{checkPwd} </p> :
                <p className="px-5">{validation.message} </p>
              }
              <p className="px-5"> {checkPwd} </p>
            
            
          </div>

          <div className="col p-2">
            {/* <!-- Simple link --> */}
            <Link to="/Signin">Already have an account </Link>
          </div>
          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <div className="d-flex Or-sing-up">
              <hr className="w-250px"/>
              <span className="p-1">or sign up</span>
              <hr/>
            </div>
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
